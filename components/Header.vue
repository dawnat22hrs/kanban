<template>
  <header>
    <div class="btn-block">
      <Button
        v-if="authStore.isAuth"
        @click="console.log(1)"
      >
        выход
      </Button>
      <Button
        v-else
        @click="modalStore.toggleVisible"
      >
        вход
      </Button>
    </div>
    <BurgerMenu style="position: absolute; right: 30px;"/>
  </header>
</template>

<script lang="ts" setup>
import { useAuthStore } from '~/store/auth.store'
import { useModalStore } from '~/store/modal.store'

const authStore = useAuthStore()
const modalStore = useModalStore()
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