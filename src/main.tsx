import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ProfilePage } from "./pages/Profile";

const root = document.getElementById("root");
if (!root) throw new Error("root element not found");

createRoot(root).render(
	<StrictMode>
		<ProfilePage />
	</StrictMode>,
);
