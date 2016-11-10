<template>
  <div>
    <input type="text" v-model="todo" @keyup.enter="add" placeholder="Add an item here">
    <a class="button ok" @click="add()">Add todo</a>
    <a class="button ok" @click="jsonthat()">view archive</a>
    <a class="button danger" @click="reset()">Reset List</a>
  </div>
</template>

<script>
export default {
  name: 'inputBox',
  data () {
    return {
      todo: ''
    }
  },
  methods: {
    add () {
      if (this.todo !== '') {
        this.$parent.items.push({
          label: this.todo,
          edit: false
        })
        this.todo = ''
      } else {
        window.alert('input must not empty!')
      }
    },
    jsonthat () {
      if (this.$parent.items[0] === '') {
        window.alert('theres nothing in there yet')
      } else {
        var jsonThat = JSON.stringify(this.$parent.items)
        console.log(jsonThat)
      }
    },
    reset () {
      this.$parent.items = []
    }
  }
}
</script>
