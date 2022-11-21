// https://fontawesome.com/docs/web/use-with/vue/use-with#nuxt

import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faGithub,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import {faExclamationCircle, faTerminal} from "@fortawesome/free-solid-svg-icons";

library.add(
  faExclamationCircle,
  faTerminal,
  faGithub,
  faTwitter
)

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
