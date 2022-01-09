import { createApp } from 'vue'
import router from './router'
import store from './store'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGlobeAmericas, faBars, faX, faEnvelope, faTerminal } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faGitlab, faLinkedin, faTwitter, faHtml5, faCss3, faJs, faGitAlt, faSass, faGulp, faNpm, faVuejs, faBootstrap } from '@fortawesome/free-brands-svg-icons'

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import App from './App.vue'

library.add(faGithub, faGitlab, faLinkedin, faTwitter, faGlobeAmericas, faBars, faX, faEnvelope, faHtml5, faCss3, faJs, faGitAlt, faSass, faGulp, faNpm, faVuejs, faTerminal, faBootstrap)

// const firebaseConfig = {
//     apiKey: "AIzaSyC3WDcoxeLByyV5QFAFeDXLn0FEZtz_fYc",
//     authDomain: "portafoli02022.firebaseapp.com",
//     projectId: "portafoli02022",
//     storageBucket: "portafoli02022.appspot.com",
//     messagingSenderId: "65412214751",
//     appId: "1:65412214751:web:32b2eeb60b67a2420bde6a",
//     measurementId: "G-7SHQ7RTED8"
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// console.log(analytics);

createApp(App)
    .component('fa', FontAwesomeIcon)
    .use(store).use(router).mount('#app')
    .use(ElementPlus)
    .mount('#app')