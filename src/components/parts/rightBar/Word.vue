<script setup>

import {ref} from "vue";

const saying = ref('山花如绣颊 · 江火似流萤')
</script>

<template>
  <div id="word">
    <span id="saying" class="text-gradient">{{saying}}</span>
  </div>
</template>

<style scoped>
#word {
  flex: 1;

  display: flex;
  align-items: center;
}

#saying {
  writing-mode: tb;
  text-orientation: upright;

  font-size: 26px;
  font-family: Tahoma, 华文楷体, STKaiti, sans-serif;
  background-image: linear-gradient(to bottom, #ff9a9e 0%, #fad0c4 100%);
}

.text-gradient {
  -webkit-background-clip: text;
  color: transparent;
}
</style>

to bottom