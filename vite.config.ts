import { defineConfig } from "vite";

export default defineConfig({
	build: {
		lib: {
			entry: "src/index.ts",
			name: "Elemix",
			fileName: (format) => `elemix.${format}.js`,
		},
		rollupOptions: {
			// mark React/react-dom (and others) as externals if you ever interop
			external: [],
			output: { globals: {} },
		},
	},
});
