<template>
    <section>
        <div class="table">
            <template v-for="column in columnData">
                <Column :column="column"/>
            </template>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { ICard, IColumn } from '../components/kanban/kanban.types'
import { columnData } from '../components/kanban/column.data'


const dragCard = ref<ICard | null>(null)
const sourceColumn = ref<IColumn | null>(null)

useSeoMeta({
  title: 'Home | kanban',
})
</script>

<style scoped lang="scss">
    section {
        padding: 60px 40px;
        display: flex;
        align-items: center;
        justify-content: center;

        .table {
            display: grid;
            grid-template-columns: 250px 250px 250px 250px;
            gap: 20px;

            @media screen and (max-width: 1100px) {
                grid-template-columns: 250px 250px 250px;
            }

            @media screen and (max-width: 820px) {
                grid-template-columns: 250px 250px;
            }

            @media screen and (max-width: 540px) {
                grid-template-columns: 250px;
            }
        }
    }
</style>