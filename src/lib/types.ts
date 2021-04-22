export type Statistics = {
  readonly adjustedBytes: number;
  readonly energy: number;
  readonly co2: {
    readonly grid: {
      readonly grams: number;
      readonly litres: number;
    };
    readonly renewable: {
      readonly grams: number;
      readonly litres: number;
    };
  };
};

export type CarbonCalculatorResult = {
  readonly url: string;
  readonly bytesTransferred: number;
  readonly isGreenHost: boolean;
  readonly co2PerPageview: number;
};

export type GreenFoundationAPIResponse = {
  readonly url: string;
  readonly hosted_by: string;
  readonly hosted_by_website: string;
  readonly partner: string;
  readonly green: boolean;
  readonly hosted_by_id: number;
  readonly modified: string;
};

export type GooglePageSpeedAPIResponse = {
  readonly captchaResult: string;
  readonly kind: string;
  readonly id: string;
  readonly loadingExperience: LoadingExperience;
  readonly lighthouseResult: LighthouseResult;
  readonly analysisUTCTimestamp: string;
};

export type LighthouseResult = {
  readonly requestedUrl: string;
  readonly finalUrl: string;
  readonly lighthouseVersion: string;
  readonly userAgent: string;
  readonly fetchTime: string;
  readonly environment: Environment;
  readonly runWarnings: readonly unknown[];
  readonly configSettings: ConfigSettings;
  readonly audits: Audits;
  readonly categories: Categories;
  readonly categoryGroups: CategoryGroups;
  readonly timing: Timing;
  readonly i18n: I18N;
  readonly stackPacks: readonly StackPack[];
};

export type Audits = {
  readonly 'mainthread-work-breakdown': BootupTime;
  readonly 'first-cpu-idle': DOMSize;
  readonly 'full-page-screenshot': FullPageScreenshot;
  readonly 'screenshot-thumbnails': Diagnostics;
  readonly 'final-screenshot': FinalScreenshot;
  readonly 'layout-shift-elements': DOMSize;
  readonly 'uses-text-compression': DOMSize;
  readonly diagnostics: Diagnostics;
  readonly 'efficient-animated-content': DuplicatedJavascript;
  readonly 'unused-css-rules': CriticalRequestChains;
  readonly metrics: CumulativeLayoutShift;
  readonly 'uses-passive-event-listeners': DOMSize;
  readonly 'duplicated-javascript': DuplicatedJavascript;
  readonly 'unminified-javascript': CriticalRequestChains;
  readonly 'speed-index': DuplicatedJavascript;
  readonly 'uses-optimized-images': DuplicatedJavascript;
  readonly 'cumulative-layout-shift': CumulativeLayoutShift;
  readonly 'largest-contentful-paint': CriticalRequestChains;
  readonly 'unminified-css': DOMSize;
  readonly 'third-party-facades': FinalScreenshot;
  readonly 'bootup-time': BootupTime;
  readonly 'no-document-write': BootupTime;
  readonly 'network-requests': DOMSize;
  readonly 'uses-long-cache-ttl': CumulativeLayoutShift;
  readonly 'timing-budget': FinalScreenshot;
  readonly 'network-server-latency': BootupTime;
  readonly 'main-thread-tasks': DOMSize;
  readonly 'third-party-summary': DuplicatedJavascript;
  readonly 'max-potential-fid': CumulativeLayoutShift;
  readonly 'offscreen-images': DuplicatedJavascript;
  readonly 'server-response-time': BootupTime;
  readonly 'legacy-javascript': DOMSize;
  readonly 'largest-contentful-paint-element': CriticalRequestChains;
  readonly 'uses-rel-preconnect': DOMSize;
  readonly 'first-meaningful-paint': DOMSize;
  readonly 'font-display': DOMSize;
  readonly 'performance-budget': Diagnostics;
  readonly 'dom-size': DOMSize;
  readonly 'long-tasks': DOMSize;
  readonly 'uses-rel-preload': DOMSize;
  readonly 'unused-javascript': CriticalRequestChains;
  readonly 'unsized-images': FinalScreenshot;
  readonly redirects: BootupTime;
  readonly 'non-composited-animations': BootupTime;
  readonly 'render-blocking-resources': BootupTime;
  readonly 'total-blocking-time': BootupTime;
  readonly 'user-timings': CriticalRequestChains;
  readonly 'uses-webp-images': DOMSize;
  readonly 'network-rtt': CriticalRequestChains;
  readonly 'total-byte-weight': BootupTime;
  readonly 'preload-lcp-image': BootupTime;
  readonly interactive: CriticalRequestChains;
  readonly 'first-contentful-paint': DOMSize;
  readonly 'critical-request-chains': CriticalRequestChains;
  readonly 'resource-summary': BootupTime;
  readonly 'estimated-input-latency': BootupTime;
  readonly 'uses-responsive-images': DOMSize;
};

export type BootupTime = {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly score: number | null;
  readonly scoreDisplayMode: ScoreDisplayMode;
  readonly details?: PurpleDetails;
  readonly numericValue?: number;
  readonly displayValue?: string;
};

export type PurpleDetails = {
  readonly headings: readonly PurpleHeading[];
  readonly summary?: PurpleSummary;
  readonly items: readonly PurpleItem[];
  readonly type: Type;
  readonly overallSavingsMs?: number;
};

export type PurpleHeading = {
  readonly text?: string;
  readonly key: string;
  readonly itemType?: string;
  readonly granularity?: number;
  readonly valueType?: string;
  readonly label?: string;
};

export type PurpleItem = {
  readonly groupLabel?: string;
  readonly duration?: number;
  readonly group?: string;
  readonly wastedMs?: number;
  readonly url?: string;
  readonly resourceType?: string;
  readonly label?: string;
  readonly transferSize?: number;
  readonly requestCount?: number;
  readonly responseTime?: number;
  readonly totalBytes?: number;
};

export type PurpleSummary = {
  readonly wastedMs: number;
};

export enum Type {
  Opportunity = 'opportunity',
  Table = 'table',
}

export enum ScoreDisplayMode {
  Binary = 'binary',
  Informative = 'informative',
  NotApplicable = 'notApplicable',
  Numeric = 'numeric',
}

export type CriticalRequestChains = {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly score: number | null;
  readonly scoreDisplayMode: ScoreDisplayMode;
  readonly displayValue?: string;
  readonly details?: CriticalRequestChainsDetails;
  readonly numericValue?: number;
  readonly warnings?: readonly unknown[];
};

export type CriticalRequestChainsDetails = {
  readonly type: string;
  readonly chains?: Chains;
  readonly longestChain?: LongestChain;
  readonly headings?: readonly FluffyHeading[];
  readonly items?: readonly FluffyItem[];
  readonly overallSavingsMs?: number;
  readonly overallSavingsBytes?: number;
};

export type Chains = {
  readonly E8929E59985462295CEF9D1316785457: E8929E59985462295Cef9D1316785457;
};

export type E8929E59985462295Cef9D1316785457 = {
  readonly children: Children;
  readonly request: Request;
};

export type Children = {
  readonly '23.15': The2315;
};

export type The2315 = {
  readonly request: Request;
};

export type Request = {
  readonly startTime: number;
  readonly url: string;
  readonly transferSize: number;
  readonly responseReceivedTime: number;
  readonly endTime: number;
};

export type FluffyHeading = {
  readonly key: string;
  readonly text?: string;
  readonly itemType?: string;
  readonly subItemsHeading?: PurpleSubItemsHeading;
  readonly label?: string;
  readonly valueType?: string;
  readonly granularity?: number;
};

export type PurpleSubItemsHeading = {
  readonly key: string;
  readonly valueType?: string;
};

export type FluffyItem = {
  readonly node?: ItemNode;
  readonly wastedBytes?: number;
  readonly url?: string;
  readonly wastedPercent?: number;
  readonly totalBytes?: number;
  readonly timingType?: string;
  readonly name?: string;
  readonly startTime?: number;
  readonly duration?: number;
};

export type ItemNode = {
  readonly nodeLabel: string;
  readonly boundingRect: NodeValue;
  readonly selector: string;
  readonly path: string;
  readonly snippet: string;
  readonly type: string;
  readonly lhId: string;
};

export type NodeValue = {
  readonly right: number;
  readonly left: number;
  readonly width: number;
  readonly height: number;
  readonly top: number;
  readonly bottom: number;
};

export type LongestChain = {
  readonly transferSize: number;
  readonly length: number;
  readonly duration: number;
};

export type CumulativeLayoutShift = {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly score: number | null;
  readonly scoreDisplayMode: ScoreDisplayMode;
  readonly displayValue?: string;
  readonly details?: CumulativeLayoutShiftDetails;
  readonly numericValue: number;
};

export type CumulativeLayoutShiftDetails = {
  readonly items: readonly TentacledItem[];
  readonly type: string;
  readonly summary?: FluffySummary;
  readonly headings?: readonly TentacledHeading[];
};

export type TentacledHeading = {
  readonly text?: string;
  readonly itemType: string;
  readonly key: string;
  readonly granularity?: number;
  readonly displayUnit?: string;
  readonly subItemsHeading?: FluffySubItemsHeading;
};

export type FluffySubItemsHeading = {
  readonly itemType?: string;
  readonly key: string;
};

export type TentacledItem = {
  readonly finalLayoutShiftTraceEventFound?: boolean;
  readonly observedLargestContentfulPaintAllFramesTs?: number;
  readonly observedCumulativeLayoutShift?: number;
  readonly observedFirstVisualChangeTs?: number;
  readonly observedFirstContentfulPaint?: number;
  readonly observedFirstMeaningfulPaint?: number;
  readonly observedTimeOriginTs?: number;
  readonly observedLoadTs?: number;
  readonly observedSpeedIndex?: number;
  readonly observedFirstMeaningfulPaintTs?: number;
  readonly observedTraceEndTs?: number;
  readonly observedFirstContentfulPaintAllFrames?: number;
  readonly observedTraceEnd?: number;
  readonly totalBlockingTime?: number;
  readonly observedNavigationStart?: number;
  readonly observedLoad?: number;
  readonly interactive?: number;
  readonly observedDomContentLoaded?: number;
  readonly observedLargestContentfulPaintAllFrames?: number;
  readonly observedFirstPaintTs?: number;
  readonly observedCumulativeLayoutShiftAllFrames?: number;
  readonly maxPotentialFID?: number;
  readonly observedLargestContentfulPaint?: number;
  readonly layoutShiftAvgSessionGap5s?: number;
  readonly observedFirstVisualChange?: number;
  readonly layoutShiftMaxSessionGap1sLimit5s?: number;
  readonly observedLargestContentfulPaintTs?: number;
  readonly firstContentfulPaint?: number;
  readonly cumulativeLayoutShiftAllFrames?: number;
  readonly observedFirstContentfulPaintAllFramesTs?: number;
  readonly observedTimeOrigin?: number;
  readonly layoutShiftMaxSessionGap1s?: number;
  readonly cumulativeLayoutShift?: number;
  readonly firstCPUIdle?: number;
  readonly firstMeaningfulPaint?: number;
  readonly speedIndex?: number;
  readonly observedLastVisualChangeTs?: number;
  readonly observedNavigationStartTs?: number;
  readonly estimatedInputLatency?: number;
  readonly layoutShiftMaxSliding300ms?: number;
  readonly layoutShiftMaxSliding1s?: number;
  readonly observedDomContentLoadedTs?: number;
  readonly largestContentfulPaint?: number;
  readonly observedSpeedIndexTs?: number;
  readonly observedLastVisualChange?: number;
  readonly observedFirstContentfulPaintTs?: number;
  readonly observedFirstPaint?: number;
  readonly lcpInvalidated?: boolean;
  readonly wastedBytes?: number;
  readonly totalBytes?: number;
  readonly url?: string;
  readonly debugData?: DebugData;
  readonly cacheHitProbability?: number;
  readonly cacheLifetimeMs?: number;
};

export type DebugData = {
  readonly type: string;
  readonly public: boolean;
  readonly 'max-age': number;
};

export type FluffySummary = {
  readonly wastedBytes: number;
};

export type Diagnostics = {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly score: null;
  readonly scoreDisplayMode: ScoreDisplayMode;
  readonly details?: DiagnosticsDetails;
};

export type DiagnosticsDetails = {
  readonly items: readonly StickyItem[];
  readonly type: string;
  readonly scale?: number;
};

export type StickyItem = {
  readonly maxRtt?: number;
  readonly numTasksOver500ms?: number;
  readonly totalByteWeight?: number;
  readonly rtt?: number;
  readonly numTasksOver10ms?: number;
  readonly mainDocumentTransferSize?: number;
  readonly totalTaskTime?: number;
  readonly numTasksOver100ms?: number;
  readonly maxServerLatency?: null;
  readonly numTasks?: number;
  readonly numStylesheets?: number;
  readonly numTasksOver50ms?: number;
  readonly numScripts?: number;
  readonly numFonts?: number;
  readonly throughput?: number;
  readonly numTasksOver25ms?: number;
  readonly numRequests?: number;
  readonly timestamp?: number;
  readonly data?: string;
  readonly timing?: number;
};

export type DOMSize = {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly score: number | null;
  readonly scoreDisplayMode: ScoreDisplayMode;
  readonly displayValue?: string;
  readonly details?: FluffyDetails;
  readonly numericValue?: number;
  readonly warnings?: readonly string[];
};

export type FluffyDetails = {
  readonly headings: readonly StickyHeading[];
  readonly items: readonly IndigoItem[];
  readonly type: Type;
  readonly overallSavingsMs?: number;
  readonly overallSavingsBytes?: number;
};

export type StickyHeading = {
  readonly text?: string;
  readonly itemType?: string;
  readonly key: null | string;
  readonly granularity?: number;
  readonly subItemsHeading?: PurpleSubItemsHeading;
  readonly valueType?: string;
  readonly label?: string;
  readonly displayUnit?: string;
};

export type IndigoItem = {
  readonly statistic?: string;
  readonly value?: number;
  readonly node?: ItemNode;
  readonly score?: number;
  readonly url?: string;
  readonly totalBytes?: number;
  readonly subItems?: PurpleSubItems;
  readonly wastedBytes?: number;
  readonly startTime?: number;
  readonly duration?: number;
  readonly protocol?: Protocol;
  readonly resourceSize?: number;
  readonly mimeType?: string;
  readonly statusCode?: number;
  readonly endTime?: number;
  readonly finished?: boolean;
  readonly resourceType?: string;
  readonly transferSize?: number;
  readonly wastedPercent?: number;
};

export enum Protocol {
  H2 = 'h2',
}

export type PurpleSubItems = {
  readonly type: string;
  readonly items: readonly IndecentItem[];
};

export type IndecentItem = {
  readonly signal: string;
  readonly location: Location;
};

export type Location = {
  readonly column: number;
  readonly url: string;
  readonly type: string;
  readonly line: number;
  readonly urlProvider: string;
};

export type DuplicatedJavascript = {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly score: number;
  readonly scoreDisplayMode: ScoreDisplayMode;
  readonly details?: DuplicatedJavascriptDetails;
  readonly numericValue?: number;
  readonly warnings?: readonly unknown[];
  readonly displayValue?: string;
};

export type DuplicatedJavascriptDetails = {
  readonly items: readonly HilariousItem[];
  readonly overallSavingsBytes?: number;
  readonly overallSavingsMs?: number;
  readonly headings: readonly TentacledHeading[];
  readonly type: Type;
  readonly summary?: TentacledSummary;
};

export type HilariousItem = {
  readonly blockingTime: number;
  readonly mainThreadTime: number;
  readonly entity: Entity;
  readonly transferSize: number;
  readonly subItems: FluffySubItems;
};

export type Entity = {
  readonly url: string;
  readonly text: string;
  readonly type: string;
};

export type FluffySubItems = {
  readonly type: string;
  readonly items: readonly AmbitiousItem[];
};

export type AmbitiousItem = {
  readonly mainThreadTime: number;
  readonly url: string;
  readonly blockingTime: number;
  readonly transferSize: number;
};

export type TentacledSummary = {
  readonly wastedMs: number;
  readonly wastedBytes: number;
};

export type FinalScreenshot = {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly score: number | null;
  readonly scoreDisplayMode: ScoreDisplayMode;
  readonly details?: FinalScreenshotDetails;
};

export type FinalScreenshotDetails = {
  readonly timing?: number;
  readonly timestamp?: number;
  readonly type: string;
  readonly data?: string;
  readonly headings?: readonly TentacledHeading[];
  readonly items?: readonly CunningItem[];
};

export type CunningItem = {
  readonly url: string;
  readonly node: ItemNode;
};

export type FullPageScreenshot = {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly score: null;
  readonly scoreDisplayMode: ScoreDisplayMode;
  readonly details: FullPageScreenshotDetails;
};

export type FullPageScreenshotDetails = {
  readonly screenshot: Screenshot;
  readonly nodes: { readonly [key: string]: NodeValue };
  readonly type: string;
};

export type Screenshot = {
  readonly height: number;
  readonly data: string;
  readonly width: number;
};

export type Categories = {
  readonly performance: Performance;
};

export type Performance = {
  readonly id: string;
  readonly title: string;
  readonly score: number;
  readonly auditRefs: readonly AuditRef[];
};

export type AuditRef = {
  readonly id: string;
  readonly weight: number;
  readonly group?: Group;
};

export enum Group {
  Budgets = 'budgets',
  Diagnostics = 'diagnostics',
  LoadOpportunities = 'load-opportunities',
  Metrics = 'metrics',
}

export type CategoryGroups = {
  readonly 'pwa-optimized': BestPracticesBrowserCompat;
  readonly 'seo-content': A11YAria;
  readonly 'a11y-tables-lists': A11YAria;
  readonly budgets: A11YAria;
  readonly 'load-opportunities': A11YAria;
  readonly diagnostics: A11YAria;
  readonly 'best-practices-browser-compat': BestPracticesBrowserCompat;
  readonly 'best-practices-general': BestPracticesBrowserCompat;
  readonly 'a11y-aria': A11YAria;
  readonly 'best-practices-trust-safety': BestPracticesBrowserCompat;
  readonly 'a11y-best-practices': A11YAria;
  readonly 'pwa-installable': BestPracticesBrowserCompat;
  readonly 'a11y-navigation': A11YAria;
  readonly metrics: BestPracticesBrowserCompat;
  readonly 'a11y-color-contrast': A11YAria;
  readonly 'a11y-names-labels': A11YAria;
  readonly 'a11y-language': A11YAria;
  readonly 'best-practices-ux': BestPracticesBrowserCompat;
  readonly 'seo-mobile': A11YAria;
  readonly 'a11y-audio-video': A11YAria;
  readonly 'seo-crawl': A11YAria;
};

export type A11YAria = {
  readonly title: string;
  readonly description: string;
};

export type BestPracticesBrowserCompat = {
  readonly title: string;
};

export type ConfigSettings = {
  readonly emulatedFormFactor: string;
  readonly formFactor: string;
  readonly locale: string;
  readonly onlyCategories: readonly string[];
  readonly channel: string;
};

export type Environment = {
  readonly networkUserAgent: string;
  readonly hostUserAgent: string;
  readonly benchmarkIndex: number;
};

export type I18N = {
  readonly rendererFormattedStrings: { readonly [key: string]: string };
};

export type StackPack = {
  readonly id: string;
  readonly title: string;
  readonly iconDataURL: string;
  readonly descriptions: Descriptions;
};

export type Descriptions = {
  readonly 'unminified-css': string;
  readonly 'unminified-javascript': string;
  readonly redirects: string;
  readonly 'dom-size': string;
  readonly 'time-to-first-byte': string;
  readonly 'unused-javascript': string;
  readonly 'user-timings': string;
};

export type Timing = {
  readonly total: number;
};

export type LoadingExperience = {
  readonly initial_url: string;
};
