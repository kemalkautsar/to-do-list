<template>
  <ul class="mainList">
    <li class="listItem" v-for="(item, index) in items">
      <span v-if="!item.edit" @dblclick="edit(index)">{{item.label}} </span>
      <input v-if="item.edit" v-model="item.label" @keyup.enter="save(index)">
      <a class="danger button" @click="remove(index)">remove</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'listItem',
  props: {
    items: {
      required: true
    }
  },
  methods: {
    remove (index) {
      this.items.splice(index, 1)
      console.log(index)
    },
    edit (index) {
      this.items[index].edit = true
    },
    save (index) {
      this.items[index].edit = false
    }
  }
}
</script>
