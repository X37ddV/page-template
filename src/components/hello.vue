<template>
    <div>
        <h1 @click="sayHello">
            Hello {{ name }}
        </h1>
        <input v-model="name">
    </div>
</template>

<script>
    module.exports = require('./hello.ts').default.vueComponentOptions
</script>

<style>
    body {
        font-family: Verdana, Helvetica, sans-serif;
    }
</style>