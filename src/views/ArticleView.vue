<script setup>

import Content from "@/components/parts/ArticleView/Content.vue";
import ArticleTabs from "@/components/parts/ArticleView/ArticleTabs.vue";
</script>

<template>
  <div id="article">
    <div id="tab">
      <ArticleTabs></ArticleTabs>
    </div>
    <div id="content">
      <Content></Content>
    </div>
  </div>
</template>

<style scoped>
#article {
  width: 92%; height: 100vh;
  margin-left: 4%;
  letter-spacing: 1.5px;
}

#tab {
  position: fixed;
  left: 8%; top: 3%;
  width: 18%; height: 94%;

  background-color: rgba(18, 18, 18, 0.8);
  overflow: scroll;
}

#content {
  position: absolute;
  left: 26%; top: 3%;
  width: 66%; min-height: 94%;

  display: flex;
  align-content: center;
  justify-content: center;


  color: #efb3b3;
  background-color: rgba(18, 18, 18, 0.75);
  overflow: scroll;
}
</style>