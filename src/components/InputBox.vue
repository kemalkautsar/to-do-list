<template>
  <div>
    <input type="text" v-model="todo">
    <button @click="add()">Add todo</button>
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
      this.$parent.items.push(this.todo)
      this.todo = ''
    }
  }
}
</script>
