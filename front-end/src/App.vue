<script setup>

import NavBar from './components/NavBar.vue'
import ChatBot from './components/ChatBot.vue'
</script>

<template>
  <NavBar/>
  <ChatBot/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
