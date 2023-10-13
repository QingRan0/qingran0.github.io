<script setup>

import IconDiscord from "@/components/icons/Relative/IconDiscord.vue";
import IconGitee from "@/components/icons/Relative/IconGitee.vue";
import IconGithub from "@/components/icons/Relative/IconGithub.vue";
</script>

<template>
  <div id="relative">
    <IconGithub></IconGithub>
    <IconDiscord></IconDiscord>
    <IconGitee></IconGitee>
  </div>
</template>

<style scoped>
#relative {
  display: flex;
  gap: 30px;
}
</style>