import { createApp } from 'vue'
import router from './router'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGlobeAmericas, faBars, faX, faEnvelope, faTerminal } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faGitlab, faLinkedin, faTwitter, faHtml5, faCss3, faJs, faGitAlt, faSass, faGulp, faNpm, faVuejs, faBootstrap } from '@fortawesome/free-brands-svg-icons'

import App from './App.vue'

library.add(faGithub, faGitlab, faLinkedin, faTwitter, faGlobeAmericas, faBars, faX, faEnvelope, faHtml5, faCss3, faJs, faGitAlt, faSass, faGulp, faNpm, faVuejs, faTerminal, faBootstrap)

createApp(App)
    .component('fa', FontAwesomeIcon)
    .use(router)
    .mount('#app')