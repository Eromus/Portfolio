import Vue from 'vue'
import HelloWorld from '@/components/Home'

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.home').textContent)
      .toEqual('test')
  })
})