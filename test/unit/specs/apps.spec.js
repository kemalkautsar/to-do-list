import Vue from 'vue'
import App from 'src/App'

describe('App.vue', () => {
 it('should have #app element', (done) => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(App),
      ready: () => {
    	expect(document.querySelector('#app')).to.exist
    	done()
      }
    })
      
  })
  /*it('should render list item', () => {
    const vm = new Vue({
	  el: '#app',
	  template: '<App/>',
	  components: { App }
	})
    expect(vm.$el.querySelector('div'))
      .to.exist
  })*/
})
