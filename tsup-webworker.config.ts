import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["./webworker/entrypoint.ts"],
  format: ["esm"],
  platform: "browser",
  sourcemap: "inline",
  outDir: "dist/webworker",
  noExternal: ["@tscircuit/core", "circuit-json", "jscad-fiber"],
  clean: true,
  dts: true,
})
