import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import PortfolioTile from './PortfolioTile.vue'
import { describe, it, expect } from 'vitest'

// set up a simple router for the link component
const router = createRouter({
  history: createMemoryHistory(),
  routes: [],
})

describe('PortfolioTile', () => {
  it('renders image src and label text from props', async () => {
    const wrapper = mount(PortfolioTile, {
      global: {
        plugins: [router],
      },
      props: {
        name: 'Vue Project',
        img: '/images/vue-project.png',
        to: '/vue3-video-player',
      },
    })

    // router-link should render an anchor with correct href
    const link = wrapper.find('a')
    expect(link.exists()).toBe(true)
    expect(link.attributes('href')).toBe('/vue3-video-player')

    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe('/images/vue-project.png')

    const label = wrapper.find('.label')
    expect(label.exists()).toBe(true)
    expect(label.text()).toBe('Vue Project')
  })
})
