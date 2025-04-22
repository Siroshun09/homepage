import type { ReactNode } from "react";
import styles from "./styles.module.css";

export const KarlaFont = (props: { children: ReactNode }) => {
	return <div className={`${styles.karlaFont}`}>{props.children}</div>;
};
