import { src, dest } from "gulp";
import sass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import shorthand from "gulp-shorthand";
import cleanCSS from "gulp-clean-css";
import plumber from "gulp-plumber";
import concat from "gulp-concat";
import config from "../app/js/index";

const styles = () =>
  src([
    "app/styles/**/*.scss",
    "app/pages/common/**/*.scss",
    "app/pages/mixins/**/*.scss",
    `app/pages/${config.banner}/**/*.scss`,
  ])
    .pipe(plumber())
    .pipe(concat("style.scss"))
    .pipe(
      sass({
        includePaths: ["node_modules/normalize.css"],
      })
    )
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(shorthand())
    .pipe(cleanCSS({ debug: true }))
    .pipe(dest("dist/css"));

export default styles;
