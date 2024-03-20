<template>
  <div class="item">
    <span class="text-bold">id: <span>{{ item.id }}</span></span>
    <div class="text">
      <span>{{ item.text }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type ICard } from './kanban/kanban.types';

defineProps<({
  item: ICard,
})>()
</script>

<style scoped lang="scss">
.item {
  width: 210px;
  height: 80px;
  background-color: #22272B;
  border: 10px solid #464E56;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  

  .text {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    background: none;
  }

  span {
    background: none;
    font-family: Lato;
    color: #FFF;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 1px;
  }

  .text-bold {
    font-weight: 600;
  }
}
</style>