import Vue = require('vue')
import * as vts from 'vue-typescript-component'

import * as Hello from './hello.vue'

@vts.component({components: {Hello}})
export default class App extends Vue {
    
}