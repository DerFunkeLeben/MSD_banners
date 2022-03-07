import { src, dest } from "gulp";
import imagemin from "gulp-imagemin";
import plumber from "gulp-plumber";
import imageminPngquant from "imagemin-pngquant";
import imageminMozjpeg from "imagemin-mozjpeg";
import config from "../app/js/index";

const imgMin = () =>
  src(`app/img/${config.banner}/*.{png,jpg,svg}`)
    .pipe(plumber())
    .pipe(imagemin([imageminPngquant(), imageminMozjpeg(), imagemin.svgo()]))
    .pipe(dest(`dist/img/${config.banner}`));

export default imgMin;
