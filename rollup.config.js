import terser from '@rollup/plugin-terser';
import filesize from 'rollup-plugin-filesize';
import typescript from '@rollup/plugin-typescript';

export default {
  input: "src/main.ts",
  output: {
    file: "dist/bundle.js",
    format: "esm",
  },
  plugins: [
    typescript(),
    terser(),
    filesize()
  ]
};
