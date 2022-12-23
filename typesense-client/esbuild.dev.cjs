require("esbuild").buildSync({
  bundle: true,
  define: { "process.env.NODE_ENV": '"development"' },
  entryPoints: ["./src/index.jsx"],
  loader: { ".js": "jsx" },
  logLevel: "info",
  outfile: "./www/app.js",
  platform: "browser",
  sourcemap: true,
});
