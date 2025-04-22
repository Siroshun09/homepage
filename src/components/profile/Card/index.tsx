import { useState } from "react";
import { Contact } from "../Contact";
import { CopyrightFooter } from "../CopyrightFooter";
import { Profile } from "../Profile";
import styles from "./styles.module.css";

export const Card = () => {
	const [showContact, setShowContact] = useState(false);

	return (
		<div
			className={`w-max h-max my-auto p-5 bg-white rounded-3xl ${styles.fadeUp}`}
		>
			{showContact ? (
				<Contact onClickBack={() => setShowContact(false)} />
			) : (
				<Profile onClickContactLink={() => setShowContact(true)} />
			)}
			<CopyrightFooter />
		</div>
	);
};
