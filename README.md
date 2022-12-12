# recomposition-api

[![version](https://img.shields.io/npm/v/recomposition-api?label=&color=29BC9B)](https://npm.im/recomposition-api) [![downloads](https://img.shields.io/npm/dm/recomposition-api?label=&color=29BC9B)](https://npm.im/recomposition-api)

POC

## Install

```bash
npm i recomposition-api
```

## Usage

```ts
import { useState } from 'react';
import { useWatch } from 'recomposition-api';

export default function App() {
  const [count, setCount] = useState(0);

  useWatch(count, (val, oldVal) => {
    console.log(val, oldVal);
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}
```

## Sponsors

[![sponsors](https://cdn.jsdelivr.net/gh/2nthony/sponsors-image/sponsors.svg)](https://github.com/sponsors/2nthony)

## License

MIT &copy; [2nthony](https://github.com/sponsors/2nthony)
