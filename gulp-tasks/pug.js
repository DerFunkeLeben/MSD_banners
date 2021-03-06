import { src, dest } from "gulp";
import pug from "gulp-pug";
import plumber from "gulp-plumber";
import htmlbeautify from "gulp-html-beautify";
import config from "../app/js/index";

const pugToHtml = () =>
  src(["app/pages/*.pug", "!app/pages/layout.pug"])
    .pipe(plumber())
    .pipe(
      pug({
        data: {
          banner: config.banner,
        },
      })
    )
    .pipe(htmlbeautify())
    .pipe(dest("dist"));

export default pugToHtml;
