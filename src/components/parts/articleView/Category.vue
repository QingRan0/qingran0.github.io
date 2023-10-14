<script setup>
import {useArticleStore} from "@/stores/articleStore";
import {storeToRefs} from "pinia";

const store = useArticleStore()
const { nowDirName, itemList } = storeToRefs(store)
</script>

<template>
  <div id="cate">
    <div id="back" @click="store.backPreDir">
      <span id="arrow">&lt;</span>
      <span id="nowDir">🗂️ {{nowDirName}}</span>
    </div>
    <div id="items">
      <RouterLink v-for="item in itemList"
                  :to="item.path"
                  :class="['item', {active: item.isActive}]"
                  @click="store.selectItem(item.name)">
        <span>{{item.emoji}}</span>
        <span id="title">{{item.name}}</span>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
#cate {
  display: flex;
  flex-direction: column;
}

#back {
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  padding: 8px;

  transition: all 0.3s ease;
  background-color: rgba(33, 33, 33, 0.4);
}

#back:hover {
  background-color: rgba(33, 33, 33, 0.6);
}

#arrow {
  position: absolute;
  left: 5px;
}

.item {
  display: block;
  padding: 8px 10px;
  border-left: 4px solid #6c6c6c;

  cursor: pointer;
  color: #afafaf;
  text-decoration: none;

  transition: all 0.2s ease;
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
</style>