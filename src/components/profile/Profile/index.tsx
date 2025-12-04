import { KarlaFont } from "../../../fonts/KarlaFont";
import { RubikFont } from "../../../fonts/RubikFont";
import { GitHubIcon, TwitterIcon } from "../../icons";
import Icon from "./icon.jpg";

export type Props = {
	onClickContactLink?: () => void;
};

export const Profile = (props: Props) => {
	return (
		<>
			<img
				src={Icon}
				alt="Siroshun's Icon"
				class="w-48 h-48 rounded-full mx-auto my-5"
				decoding="async"
				fetchpriority="high"
				width={192}
				height={192}
			/>

			<KarlaFont>
				<h1 class="text-center text-5xl my-5 mx-auto px-10 py-1 text-gray-500 border-b border-gray-300 tracking-wider">
					Siroshun
				</h1>
			</KarlaFont>

			<RubikFont>
				<div class="text-center text-xl text-gray-900">
					<p>Hello, I am a Software Developer from Japan.</p>
					<p>I develop various software mainly in Java and Go.</p>
				</div>

				<div class="flex my-10 text-5xl justify-center">
					<a
						href="https://twitter.com/siroshun09"
						target="_blank"
						rel="noreferrer noopener"
						class="px-5 text-blue-300 hover:text-blue-400 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
						aria-label="Twitter: @siroshun09 (opens in a new tab)"
					>
						<TwitterIcon height="1em" width="1em" />
					</a>
					<a
						href="https://github.com/Siroshun09"
						target="_blank"
						rel="noreferrer noopener"
						class="px-5 text-blue-300 hover:text-blue-400 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
						aria-label="GitHub: Siroshun09 (opens in a new tab)"
					>
						<GitHubIcon height="1em" width="1em" />
					</a>
				</div>

				<hr class="my-3 text-gray-200" />

				<p class="text-center text-base">
					<button
						class="text-blue-400 hover:text-blue-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
						onClick={() => props.onClickContactLink?.()}
						type="button"
					>
						Contact
					</button>
				</p>
			</RubikFont>
		</>
	);
};
