import { defineConfig } from "tsup";

export default defineConfig(options => ({
    entry: ["src/index.ts"],
    splitting: false,
    clean: true,
    dts: true,
    format: ["esm", "cjs"],
    minify: !options.watch,
}));
