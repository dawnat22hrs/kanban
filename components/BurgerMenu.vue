<template>
  <div class="burger-block">
    <div
      class="burger"
      @click="visibleMenu = !visibleMenu"
    >
      <div class="burger-element"/>
      <div class="burger-element"/>
      <div class="burger-element"/>
    </div>
    <Button
      v-if="visibleMenu"
      style="position: absolute; top: 40px"
    >
      выход
    </Button>
  </div>
</template>

<script lang="ts" setup>
const visibleMenu = ref(false)
</script>

<style scoped lang="scss">
.burger-block {
  display: none;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;

  .burger {
    width: 40px;
    height: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .burger-element {
      width: auto;
      height: 3px;
      background-color: #FFF;
    }
  }

  @media screen and (max-width: 540px) {
    display: flex;
  }
}
</style>