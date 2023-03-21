<script setup>
import { createApp } from 'vue'
import { createStore } from 'vuex'
</script>

<template>
    <router-view></router-view>
</template>

<style scoped></style>

<script>
import NavBarDashboard from './components/NavBarDashboard.vue'

export default {
    components: {
        NavBarDashboard
    }
}
</script>
