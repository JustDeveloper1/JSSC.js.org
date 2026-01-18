<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
    cells?: Record<string, string>
    defaults?: Record<string, string>
}>()

// headers
const cols = Array.from({ length: 16 }, (_, i) =>
    i.toString(16).toUpperCase()
)
const rows = Array.from({ length: 16 }, (_, i) =>
    i.toString(16).toUpperCase()
)

// default
const baseDefaults: Record<string, string> = {
    '00': 'NUL',
    '01': 'SOH',
    '02': 'STX',
    '03': 'ETX',
    '04': 'EOT',
    '05': 'ENQ',
    '06': 'ACK',
    '07': 'BEL',
    '08': 'BS',
    '09': 'TAB',
    '0A': 'EOL',
    '0B': 'VT',
    '0C': 'FF',
    '0D': 'CR',
    '0E': 'SO',
    '0F': 'SI',

    '10': 'DLE',
    '11': 'DC1',
    '12': 'DC2',
    '13': 'DC3',
    '14': 'DC4',
    '15': 'NAK',
    '16': 'SYN',
    '17': 'ETB',
    '18': 'CAN',
    '19': 'EOM',
    '1A': 'SUB',
    '1B': 'ESC',
    '1C': 'FS',
    '1D': 'GS',
    '1E': 'RS',
    '1F': 'US',

    '20': ' ',
    '21': '!',
    '22': '"',
    '23': '#',
    '24': '$',
    '25': '%',
    '26': '&',
    '27': '\'',
    '28': '(',
    '29': ')',
    '2A': '*',
    '2B': '+',
    '2C': ',',
    '2D': '-',
    '2E': '.',
    '2F': '/',

    '30': '0',
    '31': '1',
    '32': '2',
    '33': '3',
    '34': '4',
    '35': '5',
    '36': '6',
    '37': '7',
    '38': '8',
    '39': '9',
    '3A': ':',
    '3B': ';',
    '3C': '<',
    '3D': '=',
    '3E': '>',
    '3F': '?',

    '40': '@',

    '5B': '[',
    '5C': '\\',
    '5D': ']',
    '5E': '^',
    '5F': '_',
    '60': '`',

    '7B': '{',
    '7C': '|',
    '7D': '}',
    '7E': '~',
    '7F': 'DEL',
}

const cells = computed<Record<string, string>>(() => ({
    ...baseDefaults,
    ...props.defaults,
    ...props.cells
}))
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
                    {{ cells[`${r}${c}`] ?? '' }}
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
    .char-table th {
        user-select: none;
        pointer-events: none;
    }
</style>
