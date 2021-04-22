![CircleCI](https://img.shields.io/circleci/build/gh/ricardodantas/website-carbon-calculator) ![Codecov](https://img.shields.io/codecov/c/github/ricardodantas/website-carbon-calculator) ![GitHub last commit](https://img.shields.io/github/last-commit/ricardodantas/website-carbon-calculator) ![GitHub top language](https://img.shields.io/github/languages/top/ricardodantas/website-carbon-calculator)

# Website Carbon Calculator

This package calculates the carbon emission by the network traffic from a given URL. Use it on both browser either Node.js.

Package based on the carbon emission calculator code available on the [Website Carbon API](https://gitlab.com/wholegrain/carbon-api-2-0/-/tree/master/) by [Wholegrain Digital](https://www.wholegraindigital.com/).

## How to use

### 1. Install the package using NPM or YARN.

**NPM**

```
npm i website-carbon-calculator --save

```

**YARN**

```
yarn add website-carbon-calculator
```

### 2. Get you Google PageSpeed API Key [here](https://developers.google.com/speed/docs/insights/v5/get-started#APIKey).

### 3. Import and use the lib

```
import WebsiteCarbonCalculator from 'website-carbon-calculator';

// or
const WebsiteCarbonCalculator = require('website-carbon-calculator');



const websiteCarbonCalculator = new WebsiteCarbonCalculator({pagespeedApiKey: '...'});

const result = websiteCarbonCalculator.calculateByURL('https://yourwebsite.com');

// result: {
//      url: 'yourwebsite.com',
//      bytesTransferred: 123456,
//      isGreenHost: true,
//      co2PerPageview: 0.1234567,
//    }

```

## How it works

Check how the calc works [here](https://www.websitecarbon.com/how-does-it-work/).

## Sponsor

[:heart: Sponsor](https://github.com/sponsors/ricardodantas)

## Contributing

See [CONTRIBUTING](CONTRIBUTING.md).

## Author

Ricardo Dantas - [@ricardodantas](https://twitter.com/ricardodantas)

## License

MIT, see [LICENSE](LICENSE)
