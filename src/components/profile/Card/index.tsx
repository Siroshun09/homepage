import { createSignal, lazy, Suspense } from "solid-js";
import { CopyrightFooter } from "../CopyrightFooter";
import { Profile } from "../Profile";
import styles from "./styles.module.css";

export const Card = () => {
	const [showContact, setShowContact] = createSignal(false);
	const Contact = lazy(() =>
		import("../Contact").then((m) => ({ default: m.Contact })),
	);

	return (
		<div
			class={`w-max h-max my-auto p-5 bg-white rounded-3xl ${styles.fadeUp}`}
		>
			{showContact() ? (
				<Suspense fallback={<Profile />}>
					<Contact onClickBack={() => setShowContact(false)} />
				</Suspense>
			) : (
				<Profile onClickContactLink={() => setShowContact(true)} />
			)}
			<CopyrightFooter />
		</div>
	);
};
