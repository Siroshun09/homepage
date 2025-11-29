import { render } from "solid-js/web";
import "./index.css";
import { ProfilePage } from "./pages/Profile";

const root = document.getElementById("root");
if (!root) throw new Error("root element not found");

render(() => <ProfilePage />, root);
