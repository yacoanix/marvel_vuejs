<template>
<router-link :to="{ name: 'comic', params: { comicId: object.id }}">
  <div>
    <img :src="object.thumbnail.path+`.`+object.thumbnail.extension" alt="comic" height="150px">
    <br>
    <br>
    {{object.title}}
    <br>
    <br>
  </div>
</router-link>
</template>
<script>
import axios from "axios";
export default {
  name: "muestra",
  props: ["object"]
};
</script>>
