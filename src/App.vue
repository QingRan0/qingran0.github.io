<script setup>
import LeftBar from "@/views/LeftBar.vue";
import RightBar from "@/views/RightBar.vue";
import {ref} from "vue";
import Background from "@/components/parts/ThemeView/Background.vue";

const style = ref('cold')
</script>

<template>
  <div id="root">
    <div id="background">
      <Background></Background>
    </div>
    <LeftBar></LeftBar>
      <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <Component :is="Component" />
        </Transition>
      </RouterView>
    <RightBar></RightBar>
  </div>
</template>

<style>
#root {

}

#background {
  position: fixed;
  z-index: -999;
  user-select: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
