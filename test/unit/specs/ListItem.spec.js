import Vue from 'vue'
import ListItem from 'src/components/ListItem'

describe('ListItem.vue', () => {
  it('should render list item', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(ListItem)
    })
    expect(vm.$el.querySelector('ul.todos'))
      .to.exist
  })
})
