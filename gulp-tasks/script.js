import { src, dest } from "gulp";
import webpack from "webpack-stream";
import plumber from "gulp-plumber";
import babelConfig from "../babel.config.json";
import config from "../app/js/index";

const script = () =>
  src("app/js/*.js")
    .pipe(plumber())
    .pipe(
      webpack({
        entry: {
          [config.banner]: `./app/js/${config.banner}.js`,
        },
        output: {
          filename: "[name].js",
          path: `${__dirname}/dist`,
        },
        // devtool: "eval-source-map",
        module: {
          rules: [
            {
              test: /\.js$/,
              loader: "source-map-loader",
            },
            {
              test: /\.(js)$/,
              exclude: /(node_modules)/,
              loader: "babel-loader",
              options: {
                presets: babelConfig.presets,
                plugins: babelConfig.plugins,
              },
            },
            {
              test: /\.json$/,
              loader: "json",
            },
          ],
        },
      })
    )
    .pipe(dest("dist/js"));

export default script;
