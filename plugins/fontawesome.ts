// https://fontawesome.com/docs/web/use-with/vue/use-with#nuxt

import { config, library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
	faExclamationCircle,
	faTerminal,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faExclamationCircle, faTerminal, faGithub, faTwitter);

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon);
});
