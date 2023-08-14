import { defineConfig } from "tsup";

export default defineConfig([
	{
		entry: ["./src/index.ts", "./src/cli.ts"],
		format: ["esm"],
		platform: "node",
		target: "node14",
		shims: false,
		dts: { entry: ["./src/index.ts"] },
	},
]);
