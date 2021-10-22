import Vue from 'vue'

import { Button, Input } from 'element-ui'

const components = [Button, Input]

components.forEach(item => {
  Vue.use(item)
})
