import type { ReactNode } from "react";
import styles from "./styles.module.css";

export const RubikFont = (props: { children: ReactNode }) => {
	return <div className={`${styles.rubikFont}`}>{props.children}</div>;
};
