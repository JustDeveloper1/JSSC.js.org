<script setup lang="ts">
defineProps<{
  cells?: Record<string, string>
}>()
</script>

<template>
  <table class="char-table">
    <thead>
      <tr>
        <th></th>
        <th v-for="c in 16" :key="c">_<span>{{ (c - 1).toString(16).toUpperCase() }}</span>_</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in 8" :key="row">
        <th>_<span>{{ (row - 1).toString(16).toUpperCase() }}</span>_</th>
        <td
          v-for="col in 16"
          :key="col"
        >
          {{ cells?.[`${row - 1}${(col - 1).toString(16).toUpperCase()}`] ?? '' }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.char-table {
  border-collapse: collapse;
  font-family: monospace;
}
.char-table th,
.char-table td {
  border: 1px solid var(--vp-c-divider);
  padding: 4px 6px;
  text-align: center;
}
</style>
