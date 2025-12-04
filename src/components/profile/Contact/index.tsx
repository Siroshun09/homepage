import { KarlaFont } from "../../../fonts/KarlaFont";
import { RubikFont } from "../../../fonts/RubikFont";

export type Props = {
	onClickBack: () => void;
};

export const Contact = (props: Props) => {
	return (
		<>
			<KarlaFont>
				<h1 class="text-4xl mt-3 mb-5 mx-auto px-1 py-2 text-gray-500 border-b border-gray-300 tracking-wider">
					How to contact me?
				</h1>
			</KarlaFont>

			<RubikFont>
				<p class="text-lg">
					X (Twitter) or Discord DM is the quickest way to get a response.
				</p>

				<ul class="text-lg my-3">
					<li>
						X (Twitter):{" "}
						<a
							class="text-blue-500 hover:text-blue-700"
							href="https://x.com/siroshun09"
						>
							Siroshun09
						</a>
					</li>
					<li>
						Discord:{" "}
						<code class="bg-gray-200 px-1 rounded text-gray-700 tracking-wider">
							siroshun
						</code>
					</li>
				</ul>

				<p class="text-lg">
					If you are using Discord, please send me a friend request first.
				</p>

				<hr class="my-3 text-gray-200" />

				<p class="text-center text-base">
					<button
						class="text-blue-400 hover:text-blue-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
						onClick={props.onClickBack}
						type="button"
					>
						Back to profile
					</button>
				</p>
			</RubikFont>
		</>
	);
};
