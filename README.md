# coinvert
Node.js CLI for quick and easy cryptocurrency conversions

[![npm (scoped)](https://img.shields.io/npm/v/@ssalka/coinvert.svg)](https://www.npmjs.com/package/@ssalka/coinvert)
[![CircleCI](https://img.shields.io/circleci/project/github/RedSparr0w/node-csgo-parser.svg)](https://circleci.com/gh/ssalka/coinvert)

## Installation
coinvert is made available for install through NPM:

```
npm install -g @ssalka/coinvert

// or

yarn global add @ssalka/coinvert
```

## Usage

### CLI
coinvert performs a simple async request to fetch the current conversion price for a given pairing, and performs the conversion on a given amount:

```sh
coinvert 1 USD to USDT
> 1 USD = 1 USDT
```

### Named Export
```ts
import { coinvert } from '@ssalka/coinvert';

coinvert(1, 'USD', 'USDT').then(console.log); // 1
```
