<template>
  <div class="card-container">
    
    <h3>{{ card.title }}</h3>
    <p>{{ card.description }}</p>
    <div class="cards-buttons">
    <input type="button" value="delete"  class="btn" v-on:click="deleteTask(card._id)"  />
<button v-on:click="isHidden = !isHidden"   class="btn">update</button >

<UpdateForm v-bind:isHidden="isHidden" v-bind:card="card"  @allData="onUpdaite" ></UpdateForm>
</div>
  </div>

</template>






<script>
import axios from "axios";
import UpdateForm from "./UptadeForm.vue";
export default {
  name: "Card",
  data() {
      return {
          isHidden: true
          
          }
  },
  props: {
    card: Object,
  },
  methods: {
    deleteTask: function (id) {
      console.log(id);
      axios
        .delete(`http://localhost:3030/delete/${id}`)
        .then((res) => {
          this.apiData = res.data;
          // console.log(this.apiData)
         this.onUpdaite()
        })
        .catch((error) => {
          console.log(error);
        });
    },
    hideForm : function (isHid) {
        console.log(isHid)
    },
    onUpdaite : function (allData){
        this.$emit('allData', allData)
    }
  },
  components: {
      UpdateForm, 
  }
};
</script>



<style >

@import url('https://fonts.googleapis.com/css2?family=Inter&family=Roboto+Condensed:wght@700&display=swap');

.btn {
  background-color: #3a281a;
  border: none;
  color: white;
  padding: 5px 7px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

.card-container{
      width: 16rem;
    border: solid;
    margin-top: 1rem;
    
    min-height: 15rem;
    background-image: url(https://png.pngtree.com/background/20210717/original/pngtree-yellow-vintage-note-paper-background-with-stripes-picture-image_1411335.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;
}

.card-container h3{

    margin-top: 2rem;
    background-color: #3f0713c7;
    padding: 8px;
    color: white;
    font-size: 30px;
    font-family: 'Inter', sans-serif;

}

.card-container p{
      margin-top: 1rem;
    font-size: 22px;
    font-family: 'Roboto Condensed', sans-serif;
}
.cards-buttons{
  margin-top: 33%;
}

</style>