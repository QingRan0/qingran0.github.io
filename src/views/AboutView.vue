<script setup>

import {ref} from "vue";
import Relative from "@/components/parts/aboutView/Relative.vue";
import Avatar from "@/components/parts/aboutView/Avatar.vue";

const name = ref('')
const word = ref('')
</script>

<template>
  <div id="about">
    <div id="profile">
      <Avatar></Avatar>
      <div style="flex: 1" id="name" class="text-gradient">{{name}}</div>
      <div style="flex: 1" id="word" class="text-gradient">{{word}}</div>
      <Relative></Relative>
    </div>
  </div>
</template>

<style scoped>
#about {
  width: 92%; height: 100vh;
  margin-left: 4%;

  display: flex;
  align-items: center;
  justify-content: center;
}

#profile {
  width: 30%; height: 74%;
  background-color: rgba(18, 18, 18, 0.7);

  border-radius: 8px;
  padding: 3% 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
}

#name {
  font-size: 36px;
  background-image: linear-gradient(90deg, #ff9a9e 0%, #fad0c4 100%);
  font-family: 华文楷体, cursive;
}

#word {
  font-size: 28px;
  background-image: linear-gradient(90deg, #ff9a9e 0%, #fad0c4 100%);
}

.text-gradient {
  -webkit-background-clip: text;
  color: transparent;
}
</style>