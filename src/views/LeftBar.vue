<script setup>
import Choice from "@/components/parts/leftBar/Choice.vue";
import IconLogo from "@/components/icons/IconLogo.vue";
import IconSearch from "@/components/icons/Tool/IconSearch.vue";
</script>

<template>
  <div id="left-bar">
    <IconLogo style="flex: 1"></IconLogo>
    <Choice style="flex: 12"></Choice>
    <IconSearch style="flex: 1"></IconSearch>
  </div>
</template>

<style scoped>
#left-bar {
  position: fixed;
  left: 0; top: 0;
  width: 4%; height: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: rgba(18, 18, 18, 0.7);
}
</style>