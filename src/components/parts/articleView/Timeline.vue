<script setup>
import {useArticleStore} from "@/stores/articleStore";
import {ref} from "vue";
import {filesDataSortedByDate} from "@/assets/script/fileMap";

const store = useArticleStore()

const date = new Date()
const now = ref(date.toLocaleDateString())
</script>

<template>
  <div id="timeline">
    <div id="title">
      <span>🌕 {{now}}</span>
    </div>
    <RouterLink
        v-for="data in filesDataSortedByDate"
        :to="{ path: '/article/' + data.id }"
        :class="['item', {active: data.name === store.currentFileData.name}]">
      <span class="title" >{{data.name}}</span>
      <span class="time">{{data.date}}</span>
    </RouterLink>
  </div>
</template>

<style scoped>
#title {
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px;
  background-color: rgba(33, 33, 33, 0.4);
}

.item {
  display: flex;

  cursor: pointer;
  transition: all 0.2s ease;

  text-decoration: none;
  color: #afafaf;
  padding: 8px 10px;
  border-left: 4px solid #6c6c6c;
}

.item:hover {
  color: #ffffff;
  border-left: 4px solid #ff9a9e;
  background-color: rgba(33, 33, 33, 0.4);
}

.item.active {
  color: #ffffff;
  border-left: 4px solid #ff9a9e;
  background-color: rgba(33, 33, 33, 0.4);
}

.title {
  flex: 1;
}
</style>