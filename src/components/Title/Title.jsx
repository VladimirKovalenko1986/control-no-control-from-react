import css from "./Title.module.css";
import clsx from "clsx";

export default function Title({ text, variant }) {
  return <h1 className={clsx(css.text, css[variant])}>{text}</h1>;
}
