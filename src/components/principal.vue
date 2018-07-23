<template>
  <div class="hello">
    <input type="text" v-model="nombre" @keyup.enter="busqId">
    <button @click="busqId">Buscar</button>
    <br>
    <br>
    <muestra :object="object" v-for="object in comic"></muestra>
  </div>
</template>

<script>
import axios from 'axios';
import muestra from './muestra';
export default {
  name: 'principal',
  components: {
    muestra
  },
  data () {
    return {
      api_key: "3fa04a78e5aa0797e1b64f256ab0f8a2",
      hash2:"86b465ae9811442221d71a1a9d6ca68b3e2b6632",
      hash:"853b974943ccd94b1b4fcda13d8d35ee",
      ts:1,
      nombre:"",
      comic:[],
      todos:null
    }
  },
  methods: {
    busqId(){
      axios.get("https://gateway.marvel.com/v1/public/characters?name="+this.nombre+"&ts="+this.ts+"&apikey="+this.api_key+"&hash="+this.hash)
        .then( res => { 
          let lista = res.data;
          this.idList(lista);
      });
    },
    comics(id){
      axios.get("https://gateway.marvel.com/v1/public/characters/"+id+"/comics?ts="+this.ts+"&apikey="+this.api_key+"&hash="+this.hash)
        .then( res => {
          this.todos = res.data.data.total;
        this.comic = res.data.data.results
      });
    },
    idList(lista){
      let array=lista.data.results;
      let id=null;
      
      for(let i=0;i<array.length;i++){
        id=array[i].id
      }
      this.comics(id);
    }
  }
}
</script>
