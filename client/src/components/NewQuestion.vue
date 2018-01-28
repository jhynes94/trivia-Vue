<template>
<div class="container">
  <div id="nav">
    <nav class="navbar navbar-default navbar-static-top">
      <div class="container">
         <div class="navbar-header">
            <a class="navbar-brand">Bar trivia v0.1</a>
            <router-link class="navbar-brand" to="/NewQuestion"><a>New Question</a></router-link>
            <router-link class="navbar-brand" to="/question"><a>Trivia</a></router-link>
         </div>
      </div>
    </nav>
  </div>
    <input type="text" v-model="formQuestion" class="form-control" placeholder="Question" aria-label="Username" aria-describedby="basic-addon1">
    <h1></h1>
    <input type="text" v-model="formAnswer" class="form-control" placeholder="Answer" aria-label="Username" aria-describedby="basic-addon1">
    <h1></h1>
    <input type="text" v-model="fromFAnswer1" class="form-control" placeholder="Fake Answer" aria-label="Username" aria-describedby="basic-addon1">
    <h1></h1>
    <input type="text" v-model="fromFAnswer2" class="form-control" placeholder="Fake Answer" aria-label="Username" aria-describedby="basic-addon1">
    <h1></h1>
    <input type="text" v-model="fromFAnswer3" class="form-control" placeholder="Fake Answer" aria-label="Username" aria-describedby="basic-addon1">
    <h1></h1>
    <div class="row">
        <div class="col-lg-12 col-sm-6 text-center mb-4">
            <h3><button type="button" class="btn btn-primary" style="margin: 10px" @click="newQuestionSubmission()"><h3 style="margin: 10px">Submit</h3></button></h3>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: "NewQuestion",
  data() {
    return {
      formQuestion: "",
      formAnswer: "",
      fromFAnswer1: "",
      fromFAnswer2: "",
      fromFAnswer3: ""
    };
  },
  methods: {
      newQuestionSubmission: function(){
        console.log("Submission")
        var fakeAnswers = [this.fromFAnswer1, this.fromFAnswer2, this.fromFAnswer3]
        this.$http
        .post("http://localhost:3000/newQuestion", {question: this.formQuestion, fakeAnswer: fakeAnswers, trueAnswer: this.formAnswer})
        .then(function(response) {
          console.log("Sent!");
          this.$router.push('/question') 
        });
      }
  },
  created: function() {
    //this.getData();
  }
};
</script>
