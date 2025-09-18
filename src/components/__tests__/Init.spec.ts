import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Init from '../Init.vue'

// This test is an example that just tests if the props are working correctly.
describe('Init', () => {
  it('Props work properly', () => {
    const wrapper = mount(Init, { props: { msg: 'Hello world' } })
    expect(wrapper.text()).toContain('Hello world')
  })
})
