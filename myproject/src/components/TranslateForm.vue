<template>
  <div id="translateForm">
    
    <form v-on:submit="formSubmit">
        <input type="text" v-model="TextToTranslate" placeholder="输入需要翻译的内容">
        <select v-model="langguage">
            <option value="en">English</option>
            <option value="ru">Russian</option>
            <option value="ko">Korean</option>
             <option value="ja">Janpenese</option> 
        </select>
        <input type="submit" value="翻译">
    </form>
  </div>
</template>

<script>


export default {
  name: 'translateForm',
  data:function(){
      return{
          TextToTranslate:"",langguage:""
          

      }
  },
  methods:{
      formSubmit:function(e){
        //  alert(this.TextToTranslate);
        this.$emit("formSubmit",this.TextToTranslate,this.langguage)
          e.preventDefault();
  
      }
  }
}
</script>

<style>

</style>
