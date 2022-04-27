import { defineConfig } from "tsup";

export default defineConfig(options => ({
    entry: ["src/index.ts", "src/canvas.ts"],
    clean: true,
    sourcemap: true,
    dts: true,
    format: ["esm", "cjs"],
    minify: !options.watch,
}));
