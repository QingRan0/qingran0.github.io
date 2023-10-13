<script setup>
import Category from "@/components/parts/ArticleView/Category.vue";
import Summary from "@/components/parts/ArticleView/Summary.vue";
import Timeline from "@/components/parts/ArticleView/Timeline.vue";
import {computed, ref, shallowRef, watch} from "vue";
import router from "@/router";
import {use} from "marked";
import {useRoute} from "vue-router";
import {useArticleStore} from "@/stores/articleStore";
import {storeToRefs} from "pinia";


const store = useArticleStore()
const tabs = [
  ['📁 分类', Category],
  ['📖 大纲', Summary],
  ['⏳ 时间线', Timeline],
].map((item) => {
  return { name: item[0], component: item[1] }
})

const { currentTabIndex } = storeToRefs(store)

</script>

<template>
  <div id="tab-buttons">
        <span v-for="(tab, index) in tabs"
              :key="index"
              :class="['tab-button', { active: currentTabIndex === index }]"
              @click="currentTabIndex = index;">{{tab.name}}</span>
  </div>
  <KeepAlive>
    <Component :is="tabs[currentTabIndex].component"></Component>
  </KeepAlive>
</template>

<style scoped>
#tab-buttons {
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 14px;
  color: #afafaf;
}

.tab-button {
  flex: 1;
  padding: 10px 0;

  text-align: center;
  cursor: pointer;
  background-color: rgba(33, 33, 33, 0.8);

  transition: all 0.3s ease;
}

.tab-button:hover {
  color: #ff9a9e;
  background-color: rgba(14, 14, 14, 0.9);
}

.tab-button.active {
  color: #ff9a9e;
  background-color: rgba(14, 14, 14, 0.9);
}
</style>