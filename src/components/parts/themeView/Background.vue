<script setup>

import {useThemeStore} from "@/stores/themeStore";
import {storeToRefs} from "pinia";

const store = useThemeStore()
const { theme } = storeToRefs(store)
console.log(theme)
</script>

<template>
  <img v-if="theme === 'warm'" src='@/assets/jpg/background-warm.jpg' alt="background">
  <img v-if="theme === 'cold'" src='@/assets/jpg/background-cold.jpg' alt="background">
</template>

<style scoped>

</style>