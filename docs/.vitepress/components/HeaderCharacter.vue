<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
    cells?: Record<string, string>
    defaults?: Record<string, string>,
    translate: Record<string, string>
}>()

const code = props.translate.Code || 'Code';

// default
const baseDefaults: Record<string, string> = {
    '00': '0',
    '01': '1',
    '02': '2',
    '03': '3',
    '04': '4',
    '05': '5',
    '06': '6',
    '07': '7',
    '08': '8',
    '09': '9',
    '0A': '10',
    '0B': '11',
    '0C': '12',
    '0D': '13',
    '0E': '14',
    '0F': '15',

    '10': `${code} #2`,
    '14': 's?',
    '15': `${code} #3`,
    '18': 'i?',
    '19': 'o?',
    '1A': 'b?',
    '1B': `${code} #1`,
}
const reversed: Record<string, string> = {};
for (const [key, value] of Object.entries(baseDefaults)) {
    reversed[value] = key;
}

const cols = Array.from({ length: 16 }, (_, i) =>
    i.toString(16).toUpperCase()
)

const cols2 = cols.filter((i)=>baseDefaults['1'+i])

const rows = Array.from({ length: 2 }, (_, i) =>
    i.toString(16).toUpperCase()
)

const cells = computed<Record<string, string>>(() => ({
    ...baseDefaults,
    ...props.defaults,
    ...props.cells
}))

const names: Record<string, string> = {
    0: props.translate.Bits || 'Bits',
    1: props.translate.Blocks || 'Blocks'
}

const widths = [
    'width',
    'min-width',
    'max-width'
];
function width(px: number): string {
    const output = [];
    for (const w of widths) {
        output.push(w + ':' + px + 'px!important');
    }
    return output.join(';');
}

function bw(side: string): string {
    return `border-${side}-width:2px!important;`;
}
function bs(side: string): string {
    return `border-${side}-style:dashed!important;`;
}

</script>

<template>
    <table class="header-character">
        <tbody>
            <tr v-for="r in rows" :key="r">
                <th><i>{{ names[r] }}</i></th>
                <td v-for="c in (parseInt(r) == 1 ? cols2 : cols)" :key="c" :style="parseInt(r) == 1 ? width(
                    c == 'B' ? 32 * 5 : ((parseInt(reversed[cells[`${r}${cols2[cols2.indexOf(c)+1]}`]], 16) - 0x10) - (parseInt(reversed[cells[`${r}${c}`]], 16) - 0x10)) * 32
                ) : 
                    (parseInt(cells[`${r}${c}`]) - 1) % 4 == 3 ? bw('left') + bs('right') :
                    parseInt(cells[`${r}${c}`]) % 4 == 3 ? bw('right') + bs('left') : 
                    bs('left') + cells[`${r}${c}`] != '0' ? bs('right') : ''
                ">
                    {{ cells[`${r}${c}`] }}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style>
    .header-character th, .header-character td {
        width: 32px;
        min-width: 32px;
        max-width: 32px;
        text-align: center;
        padding: 4px 0;
    }
    .header-character th {
        user-select: none;
        pointer-events: none;
        width: 64px;
        min-width: 64px;
        max-width: 64px;
    }
    .header-character td:empty {
        border: none;
        background: black;
        opacity: 0.5;
    }
    .header-character tr {
        display: flex;
    }
</style>
