<template>
  <div >
    <div v-for="comic in title">
      <h1>{{comic.title}}</h1>
      <img :src="comic.thumbnail.path+`.`+comic.thumbnail.extension" alt="comic" height="500px">
      <p>
      <b>Description: </b>{{comic.description}}
      </p>
      <div>
        <b>Precio:</b>
        <span v-for="prices in comic.prices">{{prices.price}} $<br></span>
      </div>
      <br>
      <div>
        <b>Characters:</b>
        <br>
        <span v-for="charact in comic.characters.items"><br>{{charact.name}} </span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'comic',
  data () {
    return {
      api_key: "3fa04a78e5aa0797e1b64f256ab0f8a2",
      hash2:"86b465ae9811442221d71a1a9d6ca68b3e2b6632",
      hash:"853b974943ccd94b1b4fcda13d8d35ee",
      ts:1,
      title:[]
    }
  },
  created (){
    this.busqComicId()
  },
  methods:{
    busqComicId(){
      axios.get("https://gateway.marvel.com:443/v1/public/comics/"+this.$route.params.comicId+"?ts="+this.ts+"&apikey="+this.api_key+"&hash="+this.hash)
        .then( res => { 
          this.title = res.data.data.results;
      });
    },

  }
}
</script>

