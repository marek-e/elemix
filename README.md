<p align="center">
  <a 
  href="https://raw.githubusercontent.com/marek-e/elemix/refs/heads/main/assets/elemix.svg" target="_blank" rel="noopener noreferrer">
    <img width="180" src="https://raw.githubusercontent.com/marek-e/elemix/refs/heads/main/assets/elemix.svg" alt="elemix logo">
  </a>
</p>
<br/>

# Elemix 🌐

> A minimal React-like framework in TypeScript. Fast, tiny, and hackable.

## Features
- JSX-like API: `createElement`, `Fragment`, function components
- Tiny render engine
- Written in TypeScript
- Rollup for bundling

# Getting Started

## Installation

Using npm:

```bash
npm i elemix
```

Using yarn:

```bash
yarn add elemix
```

Using pnpm:

```bash
pnpm add elemix
```

Using bun:

```bash
bun add elemix
```

## Local Development

### Install dependencies

```sh
pnpm install
```

### Build
```sh
pnpm run build
```
Outputs to `dist/` as ES and UMD modules, plus types.

### Dev
```sh
pnpm run dev
```
Runs TypeScript in watch mode.

### Preview
```sh
pnpm run preview
```
Serves the `dist/` folder (needs `serve` installed globally or as a dev dep).

## Usage Example
```ts
import { createElement, render, Fragment } from "elemix";

const App = () => (
  <Fragment>
    <h1>Hello Elemix</h1>
    <p>Minimal React-like framework</p>
  </Fragment>
);

render(<App />, document.getElementById("app"));
```


## License

[MIT](LICENSE).