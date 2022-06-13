# Font Info

Reads font information from file.

```ts
interface FontInfo {
  family: string;
  familylang: string;
  style: string;
  stylelang: string;
  fullname: string;
  fullnamelang: string;
  file: string;
  outline: boolean;
  scalable: boolean;
  lang: string;
  capability: string;
  fontformat: string;
  decorative: boolean;
  postscriptname: string;
  color: boolean;
  symbol: boolean;
  variable: boolean;
}
```

## Requirements

This package depends on `fc-scan`. Make sure you have it installed in your system.

## Installation

```bash
npm i font-info
```

## Usage

```ts
import fontInfo from "font-info";

const font = await fontInfo(
  "/home/xorb/Projects/Scenify/font-info/fonts/Inter-Regular.otf"
);
console.log({ font });
```
