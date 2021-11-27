<template>
  <div class="container">
    <div class="header">
    <h1>
      To do app
    </h1>
    </div>
  </div>
  <Form @creatTask="onUpdaite"></Form>
  <Cards v-bind:apiData="apiData"  @allData="onUpdaite">  </Cards>
 
</template>

<script>
import axios from "axios";
  
import Form from "./components/Form.vue";
import Cards from "./components/Cards.vue";

export default {
  name: "App",
  data() {
  return {
  apiData:[],
  evenCheck:false
}},

  components: {
    Form,
    Cards,
  },
  created() {
    this.getTasks()
  },
  methods: {
    getTasks: function () {
      axios
        .get("http://localhost:3030/")
        .then((res) => {
          this.apiData = res.data;
          // console.log(this.apiData)
        })
        .catch((error) => {
          console.log(error);
        });
    },
    onUpdaite : function (allData){
        console.log(allData, 'appppp')
        this.getTasks()
    }
  },
};
</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap');
.header{
    background-color: #ECAC5D;
    width: 100%;
    height: 4rem;
    color: white;
    font-size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto Condensed', sans-serif;
    
    }

</style>
