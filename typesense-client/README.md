# Typesense React Client

> ✨ Bootstrapped with [Create Snowpack App (CSA)](https://www.snowpack.dev).

## Prerequisites

- [Node.js](https://nodejs.org) using npm or [yarn](https://yarnpkg.com)
- [Docker](https://www.docker.com/get-started)

## Available Scripts

Run the following scripts in multiple tabs in the order they appear here:

```bash
yarn
```

Yarn, to install all dependencies.

```bash
yarn typesenseServer
```

Pulls down a Typesense Docker image (v0.22.0.rcu6), sets a local data directory, maps it to the container and starts the container. Container is running on port 8180.

```bash
yarn indexer
```

Indexes the demo ecommerce data into Typesense. Thanks to [Jason Bosco](https://github.com/typesense/showcase-nextjs-typesense-ecommerce-store) for this.

> 🚨 Note: environment variables are dangerously set to `process.env.SNOWPACK_PUBLIC_` and should not be deployed to production servers in this demonstration state.

```bash
yarn start
```

Runs the app in the development mode.
Open [http://localhost:8080](http://localhost:8080s) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### Snowpack.dev

```bash
yarn build
```

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

**For the best production performance:** Add a build bundler plugin like [@snowpack/plugin-webpack](https://github.com/snowpackjs/snowpack/tree/main/plugins/plugin-webpack) or [snowpack-plugin-rollup-bundle](https://github.com/ParamagicDev/snowpack-plugin-rollup-bundle) to your `snowpack.config.mjs` config file.

What about EJECT? No eject needed! Snowpack guarantees zero lock-in, and CSA strives for the same.
