/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();

import { WebsiteCarbonCalculator, WebsiteCarbonCalculatorError } from '../src';

jest.setTimeout(60000);

let websiteCarbonCalculator: null | WebsiteCarbonCalculator;

describe('Website Carbon Calculator', () => {
  beforeEach(() => {
    websiteCarbonCalculator = null;
  });

  it('Should calculate the carbon emission for a given URL.', async () => {
    websiteCarbonCalculator = new WebsiteCarbonCalculator({
      pagespeedApiKey: process.env.GOOGLE_PAGESPEED_API_KEY,
    });
    const result = await websiteCarbonCalculator.calculateByURL(
      'https://ricardodantas.me'
    );
    expect(websiteCarbonCalculator).toBeInstanceOf(WebsiteCarbonCalculator);
    expect(result).toEqual(
      expect.objectContaining({
        url: 'https://ricardodantas.me',
        bytesTransferred: expect.any(Number),
        isGreenHost: expect.any(Boolean),
        co2PerPageview: expect.any(Number),
      })
    );
  });

  it('Should throw error due the missing Google Pagespeed API Key', () => {
    expect(() => {
      new WebsiteCarbonCalculator({ pagespeedApiKey: null });
    }).toThrowError(WebsiteCarbonCalculatorError);
  });

  it('Should throw an error for a given invalid URL.', async () => {
    await expect(async () => {
      websiteCarbonCalculator = new WebsiteCarbonCalculator({
        pagespeedApiKey: process.env.GOOGLE_PAGESPEED_API_KEY,
      });
      await websiteCarbonCalculator.calculateByURL('somethinginvalid.com');
    }).rejects.toThrowError('Ops! This is an invalid URL.');
  });
});
