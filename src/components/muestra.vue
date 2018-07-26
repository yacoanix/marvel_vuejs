<template>
<router-link class="cosas" :to="{ name: 'comic', params: { comicId: object.id }}">
  <div class="comic">
    <div class="img_comic">
    <img :src="object.thumbnail.path+`.`+object.thumbnail.extension" alt="comic" height="190px">
    </div>
  <div class="comic_text">
    {{object.title}}
  </div>

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
<style>
  .comic {
    color: white;
    height: 300px;
    display: grid;
    grid-template-rows: 190px 1fr;
    grid-gap: 20px;
    border-radius: 12px 12px 12px 12px;
    -moz-border-radius: 12px 12px 12px 12px;
    -webkit-border-radius: 12px 12px 12px 12px;
    border: 1px solid #000000;
    background-color:rgb(233, 197, 197);
  }

  .img_comic{
    border-radius: 12px 12px 0 0;
    -moz-border-radius: 12px 12px 0 0;
    -webkit-border-radius: 12px 12px 0 0;
    /* background-color:rgb(233, 197, 197); */
    padding-top: 7px;
    line-height: 150px;
    text-align: center;
     overflow:hidden; 
  }

  .comic_text{
    text-align: center;
    padding: 17px 12px 0 12px;
    background-color: #EC1D24;
    border-radius: 0 0 12px 12px;
    -moz-border-radius: 0 0 12px 12px;
    -webkit-border-radius: 0 0 12px 12px;
  }

  .cosas { 
    text-decoration:none; 
  }

  img {
    /* margin-bottom: 5px; */
  }
</style>
