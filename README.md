# DevX-UI Developer Guide

Welcome to the DevX-UI project! We bootstrapped this project with TSDX. Let’s get you oriented with what’s here and how to use it.

> If you’re new to TypeScript and React, checkout [this handy cheatsheet](https://github.com/sw-yx/react-typescript-cheatsheet/)

## Commands

The library is scaffolded inside `/src`, and a [Parcel-based](https://parceljs.org) playground is set up for the lib inside `/example`.

The recommended workflow is to run TSDX in one terminal:

```bash
npm start # or yarn start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

Then run either Storybook or the example playground:

### Storybook

Run inside another terminal:

```bash
npm run storybook
```

This loads the stories from `./stories`.

> NOTE: Stories should reference the components as if using the library, similar to the example playground. This means importing from the root project directory. This has been aliased in the tsconfig and the storybook webpack config as a helper.

### Example

Then run the example inside another:

```bash
cd example
npm i # or yarn to install dependencies
npm start # or yarn start
```

The default example imports and live reloads whatever is in `/dist`, so if you are seeing an out of date component, make sure TSDX is running in watch mode like we recommend above. **No symlinking required**, we use [Parcel's aliasing](https://parceljs.org/module_resolution.html#aliases).

To do a one-off build, use `npm run build` or `yarn build`.

To run tests, use `npm test` or `yarn test`.

## Configuration

Code quality is set up for you with `prettier`, `husky`, and `lint-staged`. Adjust the respective fields in `package.json` accordingly.

### Jest

Jest tests are set up to run with `npm test` or `yarn test`.

### Bundle analysis

Calculates the real cost of your library using [size-limit](https://github.com/ai/size-limit) with `npm run size` and visulize it with `npm run analyze`.

#### Setup Files

This is the folder structure we set up for you:

```txt
/example
  index.html
  index.tsx       # test your component here in a demo app
  package.json
  tsconfig.json
/src
  ...             # components go here
  index.tsx
/test
  ...             # tests go here
/stories
  ...             # stories go here
/.storybook
  main.js
  preview.js
.gitignore
package.json
README.md
tsconfig.json
```

## Continuous Integration

### GitHub Actions

Here is the list of actions set up for this project:

- `main` which installs deps w/ cache, lints, tests, and builds on all pushes against a Node and OS matrix
- `size` which comments cost comparison of your library on every pull request using [size-limit](https://github.com/ai/size-limit)
- `chromatic` which publishes storybook to Chromatic
- `release` which publishes the library to npm

## Module Formats

CJS, ESModules, and UMD module formats are supported.

The appropriate paths are configured in `package.json` and `dist/index.js` accordingly.

## Deploying the Example Playground

The Playground is just a simple [Parcel](https://parceljs.org) app. Here are some guidelines for **manually** deploying with the Vercel CLI (`npm i -g vercel`):

```bash
cd example # if not already in the example folder
npm run build # builds to dist
vercel --prod # deploy the dist folder
```
