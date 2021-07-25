import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faGithub,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faGithub,
  faTwitter
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
