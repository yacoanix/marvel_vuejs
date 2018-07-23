<template>
<router-link :to="{ name: 'comic', params: { comicId: object.id }}">
  <div>
        {{object.title}}
        <br>
        <br>
        <img :src="object.thumbnail.path+`.`+object.thumbnail.extension" alt="comic" height="150px">
        <br>
        <br>
  </div>
</router-link>
</template>
<script>
import axios from 'axios';
export default {
  name: 'muestra',
  props: ['object']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
