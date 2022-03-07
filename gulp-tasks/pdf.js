import { src, dest } from "gulp";
import plumber from "gulp-plumber";

const pdf = () =>
  src("app/pdf/**/*.pdf").pipe(plumber()).pipe(dest("dist/pdf"));

export default pdf;
