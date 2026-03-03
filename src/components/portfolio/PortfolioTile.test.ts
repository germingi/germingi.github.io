import { mount } from '@vue/test-utils'
import PortfolioTile from './PortfolioTile.vue'
import { describe, it, expect } from 'vitest'

describe('PortfolioTile', () => {
  it('renders image src and label text from props', () => {
    const wrapper = mount(PortfolioTile, {
      props: {
        name: 'Vue Project',
        img: '/images/vue-project.png',
      },
    })

    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe('/images/vue-project.png')

    const label = wrapper.find('.label')
    expect(label.exists()).toBe(true)
    expect(label.text()).toBe('Vue Project')
  })
})
