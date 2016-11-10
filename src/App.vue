<template>
  <div id="app">
    <list-item :items="items"/>
    <input-box/>
  </div>
</template>

<script>
import inputBox from './components/InputBox.vue'
import listItem from './components/ListItem.vue'
export default {
  name: 'app',
  components: {
    inputBox,
    listItem
  },
  data () {
    return {
      items: []
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

//for list styles
  ul.mainList{
    padding: 0!important;
  }
  li.listItem{
    padding: 20px 0;
    list-style-type: none; 
  }
  li:nth-child(odd) {
    background-color: #b9b9b9;
  }
  li:nth-child(even) {
    background-color: #dcdcdc;
  }
  a.button{
    padding: 5px 10px;
    border-radius: 3px;
    cursor: pointer;
  }
  a.danger{
    background: #ff8f8f;
    box-shadow: 0 5px 0 rgb(255, 123, 123);
  }
  a.danger:hover{
    background: #ff4c4c;
    box-shadow: 0 5px 0 rgb(210, 52, 52);
  }
  a.ok{
    background: #99ff8f;
    box-shadow: 0 5px 0 rgb(117, 251, 104);
  }
  a.ok:hover{
    background: #20f90b;
    box-shadow: 0 5px 0 rgb(57, 191, 44);
  }
</style>
