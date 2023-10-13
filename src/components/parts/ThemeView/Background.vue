<script setup>

import {useThemeStore} from "@/stores/themeStore";
import {storeToRefs} from "pinia";

const store = useThemeStore()
const { theme } = storeToRefs(store)
console.log(theme)
</script>

<template>
  <img v-if="theme === 'warm'" src='@/assets/png/background-warm.png' alt="background">
  <img v-if="theme === 'cold'" src='@/assets/png/background-cold.png' alt="background">
</template>

<style scoped>

</style>