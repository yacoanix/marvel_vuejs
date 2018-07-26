<template>
  <div class="hello">
    <nav>
      <div class="wrapper">
        <div class="busq">
          <span>
          <input type="search" v-model="nombre" @keyup.enter="busqId" placeholder="Buscar">
          </span>
          <span class="imagen">
          <img src="../../build/Marvel.png" alt="marvel" height="40px">
          </span>
        </div>
      <!-- <button @click="busqId">Buscar</button> -->
      </div>
    </nav>  
    <br>
    <br>
    <div class="wrapper">
    <div class="comics">
    <muestra :object="object" v-for="object in comic"></muestra>
    </div>
    <br>
    <ul>
      <lista :todo="todo" v-for="todo in todos" v-on:selected="pages"></lista>
    </ul>
    </div>
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
      this.page=(pagina-1) *10;
      this.comics();
    }
  }
}
</script>

<style>
  
.comics {
    height: 600px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows:  repeat(2, 1fr);
    grid-gap: 15px;
}

.wrapper {
    margin: 0 auto;
    width: 1170px;
}

nav {
  background-color: #EC1D24;
  margin: 0;
  height: 100px;
}

input[type="search"]{
  margin-top: 30px;
    width: 45px; /*ancho por defecto*/
    background: #ededed url('../../build/search.png') no-repeat 9px center; /*icono lupa*/
    padding: 9px 10px 9px 32px;
    border-radius: 15em;
    -webkit-transition: all .5s; /* transición de .5seg a todos los elementos para chrome*/
    -moz-transition: all .5s; /* transición de .5seg a todos los elementos para mozilla*/
    -o-transition: all .5s; /* transición de .5seg a todos los elementos para ophera*/
    transition: all .5s; /* transición de .5seg a todos los elementos*/
    outline: none; /* ocultar el fucos automático de los input */
}
input[type="search"]:focus{
  margin-top: 30px;
    width: 130px; /*tamaño del boton buscar al hacer click*/
    padding-left: 32px; /*espacio entre el icono lupa y el placeholder*/
    color: #000;
    background-color: #FFF;
}

.imagen {
  float: right;
  margin-top: 30px
}

</style>
