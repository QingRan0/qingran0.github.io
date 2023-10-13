import {defineStore} from "pinia";
import {onBeforeUnmount, onMounted, ref, watch} from "vue";

export const useThemeStore = defineStore('local', () => {
    const defaultBg = 'cold'
    const localBg = localStorage.getItem('bg')
    const theme = ref(localBg ? localBg : defaultBg)
    watch(theme, () => localStorage.setItem('bg', theme.value)

    )
    return {
        theme,
    }
})
