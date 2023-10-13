<script setup>

import {useThemeStore} from "@/stores/themeStore";
import {storeToRefs} from "pinia";

const store = useThemeStore()
const themes = [
    'warm',
    'cold',
    'desktop'
]
const { theme } = storeToRefs(store)
</script>

<template>
  <div id="themes">
    <img class="theme" src="../assets/png/background-warm.png" alt="" @click="theme = 'warm'">
    <img class="theme" src="../assets/png/background-cold.png" alt="" @click="theme = 'cold'">
  </div>
</template>

<style scoped>
#themes {
  width: 90%; height: 100vh;
  margin-left: 5%;
}

.theme {
  display: inline-block;
  width: 30%;
}

</style>