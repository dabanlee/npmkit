import Vue from 'vue'
import Component from './components/Component.vue'

export default {
    install(app: Vue.App) {
        // @ts-ignore
        app.component('component-name', Component)
    },
};

export { Component }