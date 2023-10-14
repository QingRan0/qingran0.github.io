<script setup>
import Word from "@/components/parts/rightBar/Word.vue";
</script>

<template>
  <div id="right-bar">
    <Word></Word>
  </div>
</template>

<style scoped>
#right-bar {
  position: fixed;
  right: 0; top: 0;
  width: 4%; height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: rgba(18, 18, 18, 0.7);
}
</style>