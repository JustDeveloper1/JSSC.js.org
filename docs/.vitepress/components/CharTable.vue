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
        <th v-for="c in cols" :key="c">_{{ c }}_</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="r in rows" :key="r">
        <th>_{{ r }}_</th>
        <td v-for="c in cols" :key="c">
          {{ cells?.[`${r}${c}`] ?? '' }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
