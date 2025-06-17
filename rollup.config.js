// rollup.config.js
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/elemix.es.js",
        format: "es",
        sourcemap: true,
      },
      {
        file: "dist/elemix.umd.js",
        format: "umd",
        name: "Elemix",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
    external: [],
  },
  {
    input: "src/index.ts",
    output: [{ file: "dist/elemix.d.ts", format: "es" }],
    plugins: [dts()],
  },
];
