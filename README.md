# node-weeby
Node.js wrapper for [Weeby API](https://weebyapi.ntmnathan.com/), developed by [Red League](https://github.com/redleague) on behalf of NTM Development.

## Getting Started
Installing with NPM.
```js
npm install node-weeby --save
```

## Authentication
`node-weeby` requires an authorization token which will have to be obtained on the [NTM Discord](https://weebyapi.ntmnathan.com/discord) Server by messaging the Weeby API Bot. Please read more about this on the [Weeby API Website](https://weebyapi.ntmnathan.com/).

### Example Usage

Typescript:

```ts
import { WeebyAPI } from 'node-weeby';

const client: WeebyAPI = new WeebyAPI({ token: 'YOUR_TOKEN' });

/* without promise */
(async () => {
const pat = await client.gif('pat');
console.log(pat)
})();

/* with promise */
client.gif('akko').then(i => console.log(i));
```

Javascript:

```js
const { WeebyAPI } = require('node-weeby')

const client = new WeebyAPI({ token: 'YOUR_TOKEN' });

/* without promise */
(async () => {
const pat = await client.gif('pat');
console.log(pat)
})();

/* with promise */
client.gif('akko').then(i => console.log(i));
```

## Support
Found an issue while using this wrapper or have suggestions? Feel free to join the [Red League](https://discord.gg/P6gV4wX9sG) Discord Server, send a bug report or a pull request.

## Functions

### GIF
```js
client.gif('type');
```

### Word
```js
client.word('type');
```
