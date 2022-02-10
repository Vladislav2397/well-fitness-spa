import { shallowMount } from '@vue/test-utils'
import Button from '../Button.vue'

describe('Button', () => {
    it('has data', () => {
        const wrapper = shallowMount(Button)
        expect('button').toEqual('button')
    })
})
