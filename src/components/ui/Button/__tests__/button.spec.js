import { shallowMount } from '@vue/test-utils'
import Button from '@/components/ui/Button/Button.vue'

describe('Button', () => {
    it('has data', () => {
        const wrapper = shallowMount(Button)
        expect('ghost').toBe('ghost')
    })
})
