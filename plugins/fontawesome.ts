import Vue from 'vue'

import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
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

Vue.component('font-awesome-icon', FontAwesomeIcon)
