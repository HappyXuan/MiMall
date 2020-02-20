<template>
    <div>
        <nav-header></nav-header>
        <router-view></router-view>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
import NavHeaderVue from '../components/NavHeader.vue'
import NavFooterVue from '../components/NavFooter.vue'
export default {
    name:'home',
    components:[NavHeaderVue, NavFooterVue]
}
</script>