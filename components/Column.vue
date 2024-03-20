<template>
  <div class="column">
    <div class="header" :style="{background: column.colorColumn}">
        <span class="title">{{ column.name }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IColumn } from './kanban/kanban.types';

defineProps<({
  column: IColumn
})>()

</script>

<style scoped lang="scss">
.column {
  height: fit-content;
  width: 250px;

  .header {
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 10px;

    .title {
      font-size: 16px;
      font-weight: 600;
      background: none;
      color: #FFF;
    }
  }
}
</style>