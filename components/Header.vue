<template>
  <header>
    <div class="btn-block">
      <Button
        @click="console.log(1)"
      >
        выход
      </Button>
    </div>
    <BurgerMenu style="position: absolute; right: 30px;"/>
  </header>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
header {
  height: 40px;
  padding: 30px 30px 0;
  display: flex;
  align-items: center;

  .btn-block {
    position: absolute;
    right: 30px;

    @media screen and (max-width: 540px) {
      display: none;
    }
  }
}
</style>