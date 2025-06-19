// rollup.config.js
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import { exec } from "node:child_process";

function runCustomScript() {
  return {
    name: "run-custom-script-after-build",
    writeBundle() {
      exec("node scripts/add-jsx-ref.js", (err, stdout, stderr) => {
        if (stdout) process.stdout.write(stdout);
        if (stderr) process.stderr.write(stderr);
        if (err) console.error("Custom script failed:", err);
      });
    },
  };
}

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
    watch: {
      include: "src/**",
      exclude: "node_modules/**",
      clearScreen: true,
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      runCustomScript(),
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
    watch: {
      include: "src/**",
      exclude: "node_modules/**",
      clearScreen: true,
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      runCustomScript(),
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
    watch: {
      include: "src/**",
      exclude: "node_modules/**",
      clearScreen: true,
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      runCustomScript(),
    ],
    external: [],
  },
];
