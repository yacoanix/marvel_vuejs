<template>
  <div class="hello">
    <input type="text" v-model="nombre" @keyup.enter="busqId">
    <button @click="busqId">Buscar</button>
    <br>
    <br>
    <muestra :object="object" v-for="object in comic"></muestra>
    <ul>
      <lista :todo="todo" v-for="todo in todos" v-on:selected="pages"></lista>
    </ul>
    
  </div>
</template>

<script>
import axios from 'axios';
import muestra from './muestra';
import lista from './lista';
export default {
  name: 'principal',
  components: {
    muestra,
    lista
  },
  data () {
    return {
      api_key2: "3fa04a78e5aa0797e1b64f256ab0f8a2",
      api_key: "304755348ea953537f1dbc384450cb15",
      api_priv:"86b465ae9811442221d71a1a9d6ca68b3e2b6632",
      hash2:"853b974943ccd94b1b4fcda13d8d35ee",
      hash:"fbe531ca62d9af85dd32908fe74ad2cb",
      ts:1,
      nombre:"",
      comic:[],
      todos:null,
      page:1,
      idChar:null
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
    comics(){
      axios.get("https://gateway.marvel.com/v1/public/characters/"+this.idChar+"/comics?limit=10&offset="+this.page+"&ts="+this.ts+"&apikey="+this.api_key+"&hash="+this.hash)
        .then( res => {
          let todos = Math.ceil(res.data.data.total/10);
          this.todos=todos;
          this.comic = res.data.data.results;
      });
    },
    idList(lista){
      let array=lista.data.results;
      let id=null;
      
      for(let i=0;i<array.length;i++){
        id=array[i].id
      }
      this.idChar=id;
      this.comics();
    },
    pages(pagina){
      this.page=pagina;
      this.comics();
    }
  }
}
</script>
<style>
ul li{
  display: inline;
}
</style>