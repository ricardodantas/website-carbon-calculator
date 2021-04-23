import fetch from 'node-fetch';

import {
  CARBON_PER_KWG_GRID,
  CARBON_PER_KWG_RENEWABLE,
  CO2_GRAMS_TO_LITRES,
  FIRST_TIME_VIEWING_PERCENTAGE,
  GOOGLE_PAGESPEED_API_ENDPOINT,
  GREEN_FOUNDATION_API_ENDPOINT,
  KWG_PER_GB,
  PERCENTAGE_OF_DATA_LOADED_ON_SUBSEQUENT_LOAD,
  PERCENTAGE_OF_ENERGY_IN_DATACENTER,
  PERCENTAGE_OF_ENERGY_IN_TRANSMISSION_AND_END_USER,
  RETURNING_VISITOR_PERCENTAGE,
} from './constants';
import {
  CarbonCalculatorResult,
  GooglePageSpeedAPIResponse,
  GreenFoundationAPIResponse,
  IndigoItem,
  Statistics,
} from './types';
import { WebsiteCarbonCalculatorError } from './websiteCarbonCalculatorError';

/**
 * Based on https://gitlab.com/wholegrain/carbon-api-2-0/-/tree/master/
 */

export class WebsiteCarbonCalculator {
  private PAGE_SPEED_API_KEY: string;

  constructor({ pagespeedApiKey }: { pagespeedApiKey: string }) {
    if (!pagespeedApiKey || !pagespeedApiKey.length) {
      throw new WebsiteCarbonCalculatorError(
        "Please set the PageSpeed API Key. (i.e: new WebsiteCarbonCalculator({pagespeedApiKey: 'YOU_API_KEY'}))"
      );
    }

    this.PAGE_SPEED_API_KEY = pagespeedApiKey;
  }

  private getNetworkTraffic({
    url,
    key,
  }: {
    readonly url: string;
    readonly key: string;
  }): Promise<GooglePageSpeedAPIResponse> {
    return fetch(
      `${GOOGLE_PAGESPEED_API_ENDPOINT}?url=${url}&key=${key}`
    ).then((res) => res.json());
  }

  private getGreenWeb(url: string): Promise<GreenFoundationAPIResponse> {
    const parsedURL = new URL(url);
    return fetch(
      `${GREEN_FOUNDATION_API_ENDPOINT}/${parsedURL.host}`
    ).then((res) => res.json());
  }

  public async calculateByURL(url: string): Promise<CarbonCalculatorResult> {
    const normalizedURL = this.normalizeURL(url);

    const [pagespeedapi, greenweb] = await Promise.all([
      this.getNetworkTraffic({
        url: normalizedURL,
        key: this.PAGE_SPEED_API_KEY,
      }),
      this.getGreenWeb(normalizedURL),
    ]);

    const isGreenHost = greenweb?.green;

    if (
      !pagespeedapi?.lighthouseResult.audits['network-requests']?.details?.items
    ) {
      throw new WebsiteCarbonCalculatorError(
        "Sorry, traffic couldn't be estimated."
      );
    }

    const bytesTransferred = this.calculateTransferredBytes(
      pagespeedapi.lighthouseResult.audits['network-requests'].details.items
    );

    // Calculate the statistics as we need the co2 emissions
    const statistics = this.getStatistics(bytesTransferred);

    // pull the co2 relative to the energy
    const co2 =
      isGreenHost === true
        ? statistics['co2']['renewable']['grams']
        : statistics['co2']['grid']['grams'];

    return {
      url: normalizedURL,
      bytesTransferred,
      isGreenHost: isGreenHost,
      co2PerPageview: co2,
    };
  }

  private calculateTransferredBytes(items: readonly IndigoItem[]): number {
    return items
      .filter((item: IndigoItem) => item.transferSize !== undefined)
      .map((item: IndigoItem) => item.transferSize)
      .reduce((prev, next) => {
        return prev + next;
      }, 0);
  }

  private getStatistics(bytes: number): Statistics {
    const bytesAdjusted = this.adjustDataTransfer(bytes);
    const energy = this.energyConsumption(bytesAdjusted);
    const co2Grid = this.getCo2Grid(energy);
    const co2Renewable = this.getCo2Renewable(energy);

    return {
      adjustedBytes: bytesAdjusted,
      energy: energy,
      co2: {
        grid: {
          grams: co2Grid,
          litres: this.co2ToLitres(co2Grid),
        },
        renewable: {
          grams: co2Renewable,
          litres: this.co2ToLitres(co2Renewable),
        },
      },
    };
  }

  private normalizeURL(url: string): string {
    try {
      const normalizedURL = new URL(url);
      return `${normalizedURL.protocol}//${normalizedURL.hostname}`;
    } catch (_) {
      throw new WebsiteCarbonCalculatorError('Ops! This is an invalid URL.');
    }
  }

  private adjustDataTransfer(val: number): number {
    return (
      val * RETURNING_VISITOR_PERCENTAGE +
      PERCENTAGE_OF_DATA_LOADED_ON_SUBSEQUENT_LOAD *
        val *
        FIRST_TIME_VIEWING_PERCENTAGE
    );
  }

  private energyConsumption(bytes: number): number {
    return bytes * (KWG_PER_GB / 1073741824);
  }

  private getCo2Grid(energy): number {
    return energy * CARBON_PER_KWG_GRID;
  }

  private getCo2Renewable(energy: number): number {
    return (
      energy * PERCENTAGE_OF_ENERGY_IN_DATACENTER * CARBON_PER_KWG_RENEWABLE +
      energy *
        PERCENTAGE_OF_ENERGY_IN_TRANSMISSION_AND_END_USER *
        CARBON_PER_KWG_GRID
    );
  }

  private co2ToLitres(co2: number): number {
    return co2 * CO2_GRAMS_TO_LITRES;
  }
}
