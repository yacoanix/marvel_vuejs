<template>
<div>
    <ul>
      <li> <a href="#" @click="$emit('selected',todo)> {{todo}}</a> </li>
    </ul>
</div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'lista',
  props:['todo']
}
</script>>