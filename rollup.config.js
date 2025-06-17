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
  {
    input: "src/jsx-runtime.ts",
    output: [
      {
        file: "dist/jsx-runtime.js",
        format: "es",
        sourcemap: true,
      },
      {
        file: "dist/jsx-runtime.umd.js",
        format: "umd",
        name: "ElemixJSXRuntime",
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
    input: "src/jsx-dev-runtime.ts",
    output: [
      {
        file: "dist/jsx-dev-runtime.js",
        format: "es",
        sourcemap: true,
      },
      {
        file: "dist/jsx-dev-runtime.umd.js",
        format: "umd",
        name: "ElemixJSXDevRuntime",
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
];
