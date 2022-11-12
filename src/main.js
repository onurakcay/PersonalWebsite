import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
 import { faEnvelope,faPaperPlane } from '@fortawesome/free-solid-svg-icons'
 //import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGithub,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import "./assets/main.css";

/* add icons to the library */
library.add(faGithub)
library.add(faLinkedinIn)
library.add(faEnvelope)
library.add(faPaperPlane)


const vuetify = createVuetify({
    components,
    directives,
  })

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount("#app");
