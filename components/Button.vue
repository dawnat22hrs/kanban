<template>
  <button>
    <slot />
  </button>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
button {
  border: none;
  background-color: #3B454F;
  height: 40px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-family: Roboto;
  font-size: 20px;
  color: #FFF;
  padding: 0 20px;
}

button:active {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.5), 0 6px 20px 0 rgba(0,0,0,0.19);
}
</style>