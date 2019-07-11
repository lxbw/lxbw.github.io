<template>
  <div id="app">
    <h1>在线翻译</h1>
    <h5 class="text-muted">简单 / 易用 / 便捷</h5>
    <translateForm v-on:formSubmit="translateText"></translateForm>
    <translateOutput v-text="translatedText"></translateOutput>
  </div>
</template>

<script>

import TranslateForm from './components/TranslateForm'
import TranslateOutput from './components/TranslateOutput'
export default {
  name: 'App',
  data:function(){
    return{
      translatedText:""
    }
  },
  components: {
    TranslateForm,TranslateOutput
  },
  methods:{
    translateText:function(text,langguage){
      this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key='
     +'trnsl.1.1.20190327T161059Z.3a62193db01f1186.91c1a79ac25d89b46f2ca09ed9d9c28289a3c2c3&lang='+langguage+'&text='+text)
      .then((response)=>{
        // console.log(response.body.text[0]);
        this.translatedText =response.body.text[0];
      })
    
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
</style>
