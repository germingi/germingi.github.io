import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import PageHeader from './PageHeader.vue'
import { describe, it, expect } from 'vitest'

// simple router so <router-link> renders properly
const router = createRouter({
  history: createMemoryHistory(),
  routes: [],
})

describe('PageHeader', () => {
  it('renders a clickable header that links to home', async () => {
    const wrapper = mount(PageHeader, {
      global: { plugins: [router] },
    })

    const link = wrapper.find('a.home-link')
    expect(link.exists()).toBe(true)
    expect(link.text()).toBe('germingi.com')
    expect(link.attributes('href')).toBe('/')
  })
})
