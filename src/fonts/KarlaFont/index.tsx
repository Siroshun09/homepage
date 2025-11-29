import type { ParentProps } from "solid-js";
import styles from "./styles.module.css";

export const KarlaFont = (props: ParentProps) => {
	return <div class={`${styles.karlaFont}`}>{props.children}</div>;
};
