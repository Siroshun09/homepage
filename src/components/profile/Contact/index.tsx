import { KarlaFont } from "../../../fonts/KarlaFont";
import { RubikFont } from "../../../fonts/RubikFont";

export type Props = {
	onClickBack: () => void;
};

export const Contact = (props: Props) => {
	return (
		<div>
			<KarlaFont>
				<h1 className="text-4xl mt-3 mb-5 mx-auto px-1 py-2 text-gray-500 border-b border-gray-300 tracking-wider">
					How to contact me?
				</h1>
			</KarlaFont>

			<RubikFont>
				<p className="text-lg">
					X (Twitter) or Discord DM is the quickest way to get a response.
				</p>

				<ul className="text-lg my-3">
					<li>
						X (Twitter):{" "}
						<a
							className="text-blue-500 hover:text-blue-700"
							href="https://x.com/siroshun09"
						>
							Siroshun09
						</a>
					</li>
					<li>
						Discord:{" "}
						<code className="bg-gray-200 px-1 rounded text-gray-700 tracking-wider">
							siroshun
						</code>
					</li>
				</ul>

				<p className="text-lg">
					If you are using Discord, please send me a friend request first.
				</p>

				<hr className="my-3 text-gray-200" />

				<div className="text-center">
					<small className="text-base">
						<button
							className="text-blue-500 hover:text-blue-700 cursor-pointer"
							onClick={props.onClickBack}
							type="button"
						>
							Click here
						</button>{" "}
						to back to profile card
					</small>
				</div>
			</RubikFont>
		</div>
	);
};
