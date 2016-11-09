<template>
  <ul>
    <li v-for="(item, index) in items">{{item}} <a class="remove" @click="remove(index)">remove</a></li>
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
    }
  }
}
</script>