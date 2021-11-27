<template>
  <div class="form-div">
    <form form v-on:submit.prevent="onIput" class="new-item-form">
    <h1>Add New Note</h1>
      <div class="inputs">
      <input
        type="text"
        name="title"
        placeholder="Add The Title .... "
        v-model="form.title"
      />
      <br />
      <br />
      <input
        type="text"
        name="description"
        placeholder="Add The Description"
        v-model="form.description"
      />

      </div>
      <input
        class="submit-btn"
        type="submit"
        name="submit"
        value="submit"
        v-on:submit.prevent="onIput"
      />
    </form>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import axios from "axios";

export default {
  name: "Form",
  data() {
    return {
      form: {
        title: "",
        description: "",
      },
    };
  },

  methods: {
    onIput: function () {

console.log(this.form)
axios.post('http://localhost:3030/create/', this.form)
                 .then((res) => {
                   this.$emit('creatTask')
                   console.log(res)
                 })
                 .catch((error) => {
                   console.log(error)
                 })
},

  },
};
</script>

<style>
.form-div input[type=text] {
  width: 50%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}

.form-div{
  background-image: url(https://png.pngtree.com/thumb_back/fh260/background/20201109/pngtree-abstract-sticky-note-mokeup-with-plant-shadow-background-image_466346.jpg) ;

      height: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;

}

.new-item-form{
      border: solid;
    width: 45%;
    height: 15rem;
    background-color: #fff9b2a6;
}

.new-item-form h1{
  color: #3F0713;

    font-size: 45px;
    text-align: center;
}

.inputs{
      margin-top: 5%;
    /* left: auto; */
    width: 100%;
    margin-left: 8rem;
}

.submit-btn{
  margin-left: 35%;
    margin-top: 3%;
    background-color: #3F0713;
    color: white;
    width: 10rem;
    height: 2rem;
}


</style>