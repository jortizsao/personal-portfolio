import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMediumM, faTwitter, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faMediumM);
library.add(faTwitter);
library.add(faLinkedinIn);
library.add(faGithub);

Vue.component('font-awesome-icon', FontAwesomeIcon);