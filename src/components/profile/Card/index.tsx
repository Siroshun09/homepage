import { createSignal } from "solid-js";

import { Contact } from "../Contact";
import { CopyrightFooter } from "../CopyrightFooter";
import { Profile } from "../Profile";

import styles from "./styles.module.css";

export const Card = () => {
  const [showContact, setShowContact] = createSignal(false);

  return (
    <div class={`my-auto h-max w-max rounded-3xl bg-white p-5 ${styles.fadeUp}`}>
      {showContact() ? (
        <Contact onClickBack={() => setShowContact(false)} />
      ) : (
        <Profile onClickContactLink={() => setShowContact(true)} />
      )}
      <CopyrightFooter />
    </div>
  );
};
