<script setup>

import {useArticleStore} from "@/stores/articleStore";
import {ref, watch} from "vue";
import {storeToRefs} from "pinia";

const store = useArticleStore()
const {currentFileData, title} = storeToRefs(store)
// 定位
function headLocate(head) {
  head.scrollIntoView()
}
// 设置各标题的初始位置，并在窗口调整大小、转换页面时重新设置位置
const tops = () => currentFileData.value.heads.map((head) => head.getBoundingClientRect().top + document.documentElement.scrollTop || document.body.scrollTop)
let scrollTops = tops()
watch(store, () => scrollTops = tops())
window.addEventListener('resize', () => scrollTops = tops())

const nowHeadIndex = ref(0)
window.addEventListener('scroll', () => {
  const yOffset = (document.documentElement.scrollTop || document.body.scrollTop) + (160)
  for (let i in scrollTops) {
    if (yOffset < scrollTops[i]) {
      nowHeadIndex.value = i - 1 < 0 ? 0 : i - 1
      break
    }
  }
})


</script>
<template>
  <div id="sum">
    <div id="title">
      <span>{{ title }}</span>
    </div>
    <div v-for="(head, index) in currentFileData.heads"
         :class="['head-locate', {active: index === nowHeadIndex}]"
         @click="headLocate(head)"
         :style="{ 'padding-left': head.tagName.substring(1) * 10 + 'px' }">{{head.textContent}}</div>
  </div>
</template>
<style scoped>
#sum{
  overflow-y: scroll;
  letter-spacing: 1.5px;
}

#title {
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px;
  background-color: rgba(33, 33, 33, 0.4);
}

.head-locate {
  cursor: pointer;
  transition: all 0.2s ease;

  color: #afafaf;
  padding: 8px 10px;
  border-left: 4px solid #6c6c6c;
}

.head-locate:hover {
  color: #ffffff;
  border-left: 4px solid #ff9a9e;
  background-color: rgba(33, 33, 33, 0.4);
}

.head-locate.active {
  color: #ffffff;
  border-left: 4px solid #ff9a9e;
  background-color: rgba(33, 33, 33, 0.4);
}
</style>
