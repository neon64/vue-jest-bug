import { mount } from '@vue/test-utils'
import FineComponent from '@/components/FineComponent.vue'
import BuggyComponent from '@/components/BuggyComponent.vue'

describe('a bug in vue-jest', () => {
  it('works', () => {
    const wrapper = mount(FineComponent);
    expect(wrapper.findComponent(FineComponent)).toBeTruthy();
  })

  it('crashes and burns', () => {
    const wrapper = mount(BuggyComponent);
    expect(wrapper.findComponent(BuggyComponent)).toBeTruthy();
  })
})
