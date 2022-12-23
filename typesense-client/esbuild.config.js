import esbuildServe from "esbuild-serve";

esbuildServe(
  {
    banner: {
      js: "import { createRequire as topLevelCreateRequire } from 'module';\n const require = topLevelCreateRequire(import.meta.url);",
    },
    format: "cjs",
    bundle: true,
    define: { DEBUG: "true", "process.env.NODE_ENV": '"development"' },
    entryPoints: ["./src/index.jsx"],
    loader: { ".js": "jsx" },
    logLevel: "info",
    outfile: "./www/app.js",
    sourcemap: true,
  },
  { root: "./www" }
);
