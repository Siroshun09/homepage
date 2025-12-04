import { KarlaFont } from "../../../fonts/KarlaFont";
import { RubikFont } from "../../../fonts/RubikFont";
import { GitHubIcon, TwitterIcon } from "../../icons";
import Icon from "./icon.jpg";

export type Props = {
	onClickContactLink?: () => void;
};

export const Profile = (props: Props) => {
	return (
		<div class="text-center">
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
				<h1 class="text-5xl my-5 mx-auto px-10 py-1 text-gray-500 border-b border-gray-300 tracking-wider">
					Siroshun
				</h1>
			</KarlaFont>

			<RubikFont>
				<p class="text-xl text-gray-900 my-1">
					Hello, I am a Software Developer from Japan.
				</p>
				<p class="text-xl text-gray-900 my-1">
					I develop various software mainly in Java and Go.
				</p>
				<div class="flex my-10 text-5xl justify-center">
					<a
						href="https://twitter.com/siroshun09"
						target="_blank"
						rel="noreferrer noopener"
						class="px-5 text-blue-300 hover:text-blue-400 cursor-pointer"
					>
						<TwitterIcon height="1em" width="1em" />
					</a>
					<a
						href="https://github.com/Siroshun09"
						target="_blank"
						rel="noreferrer noopener"
						class="px-5 text-blue-300 hover:text-blue-400 cursor-pointer"
					>
						<GitHubIcon height="1em" width="1em" />
					</a>
				</div>
				<small class="text-base">
					If you want to contact me, please{" "}
					<button
						class="text-blue-500 hover:text-blue-700 cursor-pointer"
						onClick={() => props.onClickContactLink?.()}
						type="button"
					>
						click here
					</button>{" "}
					for more information.
				</small>
			</RubikFont>
		</div>
	);
};
