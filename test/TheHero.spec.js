import { mount } from '@vue/test-utils'
import Hero from '@/components/TheHero.vue'

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Hero)
    expect(wrapper.vm).toBeTruthy()
  })
})
