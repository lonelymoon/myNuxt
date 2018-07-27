import Vue from 'vue'

import {
  VApp,
  Vuetify,
  VGrid,
  VCard,
  VNavigationDrawer,
  VList,
  VBtn,
  VIcon,
  VToolbar,
  VSubheader,
  VDivider,
  VAvatar,
  VExpansionPanel,
  VFooter,
  VTabs
} from 'vuetify'

import { Ripple, Resize } from 'vuetify/es5/directives'

Vue.use(Vuetify, {
  components: {
    VApp,
    Vuetify,
    VGrid,
    VCard,
    VNavigationDrawer,
    VList,
    VBtn,
    VIcon,
    VToolbar,
    VSubheader,
    VDivider,
    VAvatar,
    VExpansionPanel,
    VFooter,
    VTabs
  },
  directives: {
    Ripple,
    Resize
  }
})
