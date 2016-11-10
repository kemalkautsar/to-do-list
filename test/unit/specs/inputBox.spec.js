import Vue from 'vue'
import InputBox from 'src/components/InputBox'

describe('InputBox.vue', () => {
  it('should render input box', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(InputBox)
    })
    expect(vm.$el.querySelector('.input-box'))
      .to.exist
  })
  it('should render add button', () => {
  	const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(InputBox)
    })
    expect(vm.$el.querySelector('.add-button'))
      .to.exist
  })
  it('should have a method called "add"', () =>{
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(InputBox)
    })
    expect(vm.add).to.be.a('function')
  })
})
