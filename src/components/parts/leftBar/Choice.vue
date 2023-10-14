<script setup>
import {computed, onMounted, ref, watch} from "vue";

import IconHome from "@/components/icons/Choice/IconHome.vue";
import IconArticle from "@/components/icons/Choice/IconArticle.vue";
import IconAbout from "@/components/icons/Choice/IconAbout.vue";
import IconTransfer from "@/components/icons/Choice/IconTransfer.vue";
import {useRoute} from "vue-router";
import IconTheme from "@/components/icons/Choice/IconTheme.vue";

const route = useRoute()
const currentPath = ref('/')
watch(route, () => {
  currentPath.value = '/' + route.path.split('/')[1]
})


const pages = [
  [IconHome, '/'],
  [IconArticle, '/article'],
  [IconTransfer, '/transfer'],
  [IconAbout, '/about'],
  [IconTheme, '/theme']
].map((item) => {
  return {component: item[0], path: item[1]}
})
</script>

<template>
  <div id="choice">
    <RouterLink v-for="page in pages" :to="page.path" @click="currentPath = page.path">
      <Component :is="page.component" :class="{active: currentPath === page.path}"></Component>
    </RouterLink>
  </div>
</template>

<style scoped>
#choice {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 48px;
}

a {
  text-decoration: none;
  color: #aaeeff;
}
</style>