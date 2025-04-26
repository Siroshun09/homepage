import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { MouseEventHandler } from "react";
import { KarlaFont } from "../../../fonts/KarlaFont";
import { RubikFont } from "../../../fonts/RubikFont";
import Icon from "./icon.jpg";

export type Props = {
	onClickContactLink: MouseEventHandler<HTMLSpanElement>;
};

export const Profile = (props: Props) => {
	return (
		<div className="text-center">
			<img
				src={Icon}
				alt="Siroshun's Icon"
				className="w-48 h-48 rounded-full mx-auto my-5"
			/>

			<KarlaFont>
				<h1 className="text-5xl my-5 mx-auto px-10 py-1 text-gray-500 border-b border-gray-300 tracking-wider">
					Siroshun
				</h1>
			</KarlaFont>

			<RubikFont>
				<p className="text-xl text-gray-900 my-1">
					Hello, I am a Software Developer from Japan.
				</p>
        <p className="text-xl text-gray-900 my-1">
          I develop various software mainly in Java and Go.
        </p>
				<div className="flex my-10 text-5xl justify-center">
					<a
						href="https://twitter.com/siroshun09"
						target="_blank"
						rel="noreferrer noopener"
					>
						<button
							className="px-5 text-blue-300 hover:text-blue-400 cursor-pointer"
							type="button"
						>
							<FontAwesomeIcon icon={faTwitter} fixedWidth />
						</button>
					</a>
					<a
						href="https://github.com/Siroshun09"
						target="_blank"
						rel="noreferrer noopener"
					>
						<button
							className="px-5 text-blue-300 hover:text-blue-400 cursor-pointer"
							type="button"
						>
							<FontAwesomeIcon icon={faGithub} fixedWidth />
						</button>
					</a>
				</div>
				<small className="text-base">
					If you want to contact me, please{" "}
					<button
						className="text-blue-500 hover:text-blue-700 cursor-pointer"
						onClick={props.onClickContactLink}
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
