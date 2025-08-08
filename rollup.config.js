import terser from '@rollup/plugin-terser';
import filesize from 'rollup-plugin-filesize';

export default {
  input: "src/main.js",
  output: {
    file: "dist/bundle.js",
    format: "esm",
  },
  plugins: [
    terser(),
    filesize()
  ]
};
