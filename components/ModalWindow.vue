<template>
  <div class="modal" v-if="modalStore.isVisible">
      <div class="close" @click="modalStore.toggleVisible">+</div>
      <h2 class="title">регистрация/аутентификация</h2>
      <div class="form"  v-if="!modalStore.isRegistr">
        <input
            v-model="loginData.username"
            placeholder="username"
            class="input"
        />
        <input
            v-model="loginData.password"
            placeholder="password"
            type="password"
            class="input"
        />
      </div>
      <div class="form"  v-else>
        <input
            v-model="authData.username"
            placeholder="username"
            class="input"
        />
        <input
            v-model="authData.username"
            placeholder="email"
            type="email"
            class="input"
        />
        <input
            v-model="authData.password"
            placeholder="password"
            type="password"
            class="input"
        />
      </div>
      <div class="btn-block">
            <Button @click="getLogin()">вход</Button>
            <Button @click="getAuth()">регистрация</Button>
        </div>
  </div>
</template>

<script lang="ts" setup>
import { useModalStore, } from '../store/modal.store'
const loginData = ref({
  username: '',
  password: '',
})
const authData = ref({
  username: '',
  email: '',
  password: '',
})
const modalStore = useModalStore()

const getLogin = () => {
  modalStore.isRegistr ? modalStore.toggleRegistr() : modalStore.toggleVisible()
}
const getAuth = () => {
  !modalStore.isRegistr ? modalStore.toggleRegistr() : modalStore.toggleRegistr()
}
</script>

<style scoped lang="scss">
.modal {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: #ffffff60;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #FFF;

    .close {
        background: none;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 1px solid #FFF;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        position: absolute;
        top: 30px;
        transform: rotate(45deg);
        font-size: 22px
    }

    .title {
        font-family: Roboto;
        cursor: default;
        background: none;
    }

    .form {
        display: flex;
        flex-direction: column;
        gap: 10px;
        background: none;
    }

    .btn-block {
      width: 270px;
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      background: none;
    }
}
</style>