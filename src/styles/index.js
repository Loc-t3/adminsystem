import store from '@/store'

if (store.state.settings.theme === 'dark') {
  import('@/assets/theme/dark/index.css')
} else {
  import('@/assets/theme/light/index.css')
}

import '@/styles/index.scss' // global css
