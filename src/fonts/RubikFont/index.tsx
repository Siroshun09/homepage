import type { ParentProps } from "solid-js";
import styles from "./styles.module.css";

export const RubikFont = (props: ParentProps) => {
	return <div class={`${styles.rubikFont}`}>{props.children}</div>;
};
