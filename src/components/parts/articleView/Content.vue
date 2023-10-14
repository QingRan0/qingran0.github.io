<script setup>

</script>
<template>
    <div id="paper">
      <RouterView></RouterView>
    </div>
</template>
<style scoped>
#paper {
  width: 720px;
  margin: 20px 20px;

  color: #fffdfc;
  line-height: 1.8;
}

#title {
  padding: 10px 0;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 24px;
  color: #ffc9c9;
  background-color: rgba(33, 33, 33, 0.8);
}
</style>
