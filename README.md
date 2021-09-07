![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/ricardodantas/website-carbon-calculator) ![CircleCI](https://img.shields.io/circleci/build/gh/ricardodantas/website-carbon-calculator) ![Codecov](https://img.shields.io/codecov/c/github/ricardodantas/website-carbon-calculator) ![GitHub last commit](https://img.shields.io/github/last-commit/ricardodantas/website-carbon-calculator) ![GitHub top language](https://img.shields.io/github/languages/top/ricardodantas/website-carbon-calculator) ![node-current](https://img.shields.io/node/v/website-carbon-calculator)

# 🌳 Website Carbon Calculator

This package calculates the carbon emission by the network traffic from a given URL.

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
import { WebsiteCarbonCalculator, WebsiteCarbonCalculatorError } from 'website-carbon-calculator';

try {

  const websiteCarbonCalculator = new WebsiteCarbonCalculator({pagespeedApiKey: '...'});
  const result = websiteCarbonCalculator.calculateByURL('https://yourwebsite.com');

//   {
//     url: 'yourwebsite.com',
//     bytesTransferred: 123456,
//     isGreenHost: true,
//     co2PerPageview: 0.1234567,
//   }

} catch(error) {
  if(error instanceof WebsiteCarbonCalculatorError){
    console.warn(error.message);
  }
  // Do something else...
}


```

## How it works

Check how the calc works [here](https://www.websitecarbon.com/how-does-it-work/).

## Sponsor

Help to maintain this project and become a sponsor on [Github Sponsors](https://github.com/sponsors/ricardodantas), [Ko-fi](https://ko-fi.com/ricardodantas), or [Buy Me A Coffee](https://www.buymeacoffee.com/ricardodantas)! 🎉 You can get your company logo, link & name on this file. It's also rendered on package page in npmjs.com and yarnpkg.com sites too! 🚀

## Contributing

See [CONTRIBUTING](CONTRIBUTING.md).

## Author

Ricardo Dantas - [@ricardodantas](https://twitter.com/ricardodantas)

## Credits

This package based on the carbon emission calculator code available on the [Website Carbon API](https://gitlab.com/wholegrain/carbon-api-2-0/-/tree/master/) by [Wholegrain Digital](https://www.wholegraindigital.com/).

## License

MIT, see [LICENSE](LICENSE)
