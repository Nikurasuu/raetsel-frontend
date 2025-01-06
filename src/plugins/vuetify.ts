import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@fortawesome/fontawesome-free/css/all.css'

import { createVuetify } from 'vuetify'
import { aliases, md } from 'vuetify/iconsets/md'
import { fa } from 'vuetify/iconsets/fa'

export default createVuetify({
    icons: {
      defaultSet: 'md',
      aliases,
      sets: {
        md,
        fa,
      },
    },
  })