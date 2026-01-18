<script setup lang="ts">
defineProps<{
  cells?: Record<string, string>
}>()

const cols = Array.from({ length: 16 }, (_, i) =>
  i.toString(16).toUpperCase()
)
const rows = Array.from({ length: 8 }, (_, i) =>
  i.toString(16).toUpperCase()
)
</script>

<template>
  <table class="char-table">
    <thead>
      <tr>
        <th></th>
        <th v-for="c in cols" :key="c"><i>{{ c }}</i></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="r in rows" :key="r">
        <th><i>{{ r }}</i></th>
        <td v-for="c in cols" :key="c">
          {{ cells?.[`${r}${c}`] ?? '' }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style>
    .char-table th, .char-table td {
        width: 32px;
        min-width: 32px;
        max-width: 32px;
        text-align: center;
        padding: 4px 0;
    }
    .char-table th:first-child {
        width: 16px;
        min-width: 16px;
        max-width: 16px;
        padding: 4px 0;
    }
</style>