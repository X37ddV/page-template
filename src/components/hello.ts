import Vue = require('vue')
import * as vts from 'vue-typescript-component'

@vts.component()
export default class Hello extends Vue {
    name = 'Word'

    sayHello() {
        alert('Hello ' + this.name);
    }
}