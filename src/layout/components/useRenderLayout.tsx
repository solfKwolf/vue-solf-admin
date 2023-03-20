import { computed } from 'vue'
import { useAppStore } from '@/store/modules/app'

const appStore = useAppStore()

export const useRenderLayout = () => {
    const renderClassic = () => {
        return (
            <>
            </>
        )
    }
    return {
        renderClassic,
    }
}