import { KarlaFont } from "../../../fonts/KarlaFont";
import { RubikFont } from "../../../fonts/RubikFont";

export type Props = {
  onClickBack: () => void;
};

export const Contact = (props: Props) => {
  return (
    <>
      <KarlaFont>
        <h1 class="mx-auto mt-3 mb-5 border-b border-gray-300 px-1 py-2 text-4xl tracking-wider text-gray-500">
          How to contact me?
        </h1>
      </KarlaFont>

      <RubikFont>
        <p class="text-lg">X (Twitter) or Discord DM is the quickest way to get a response.</p>

        <ul class="my-3 text-lg">
          <li>
            X (Twitter):{" "}
            <a class="text-blue-500 hover:text-blue-700" href="https://x.com/siroshun09">
              Siroshun09
            </a>
          </li>
          <li>
            Discord:{" "}
            <code class="rounded bg-gray-200 px-1 tracking-wider text-gray-700">siroshun</code>
          </li>
        </ul>

        <p class="text-lg">If you are using Discord, please send me a friend request first.</p>

        <hr class="my-3 text-gray-200" />

        <p class="text-center text-base">
          <button
            class="cursor-pointer text-blue-400 hover:text-blue-700"
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
