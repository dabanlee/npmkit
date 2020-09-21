import Component from './components/Component.vue'

export default {
    install(Vue) {
        Vue.component('component-name', Component)
    },
};

export { Component }