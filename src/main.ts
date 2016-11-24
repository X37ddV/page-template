import Vue = require('vue')
import * as Hello from './components/hello.vue'

new Vue({
    el: '#app',
    render: (h) => h(Hello)
});