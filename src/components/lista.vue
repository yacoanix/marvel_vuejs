<template>
      <li> / <a href="#" @click="$emit('selected',todo)"> {{todo}}</a> </li>
</template>
<script>
import axios from 'axios';
export default {
  name: 'lista',
  props:['todo']
}
</script>>
<style>
ul li{
  display: inline;
}
</style>