import { defineConfig } from "tsup";

export default defineConfig(options => ({
    entry: ["src/server.ts"],
    splitting: false,
    clean: false,
    dts: true,
    format: ["esm", "cjs"],
    minify: !options.watch,
}));
