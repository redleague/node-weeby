# node-weeby
Node.js wrapper for [Weeby API](https://weebyapi.ntmnathan.com/), developed by [Red League](https://github.com/redleague) on behalf of NTM Development.

[![NPM](https://nodei.co/npm/node-weeby.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/node-weeby/)

## Getting Started
Installing with NPM.
```js
npm install redleague/node-weeby#dev
```

## Support
Found an issue while using this wrapper or have suggestions? Feel free to join the [Red League](https://discord.gg/HCjEmNpp8t) Discord Server, send a bug report or a pull request.

## Authentication
`node-weeby` requires an authorization token which will have to be obtained on the [NTM Discord](https://weebyapi.xyz/discord) Server by messaging the Weeby API Bot. Please read more about this on the [Weeby API Website](https://weebyapi.xyz/).

### Example Usage

Typescript:

```ts
import { WeebyClient } from 'node-weeby';

const client: WeebyClient = new WeebyClient({ token: 'YOUR_TOKEN' });

(async () => {
const pat = await client._rest("GET", "/gif/pat");
console.log(pat)
})();
```

Javascript:

```js
const { WeebyClient } = require('node-weeby')

const client = new WeebyClient({ token: 'YOUR_TOKEN' });

(async () => {
const pat = await client._rest("GET", "/gif/pat");
console.log(pat)
})();

```