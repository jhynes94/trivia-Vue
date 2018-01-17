<template>
<div class="container">
      <!-- SPACER ROW -->
      <div class="row">
        <div class="col-lg-12">
          <h1 style="text-align: center;" class="my-4"></h1>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12 col-sm-6 text-center mb-4">
          <h1 style="height: 20px"></h1>
          <h5>{{ question }}</h5>
        </div>
      </div>

      <div class="row" v-for="product in answers">
        <div class="col-lg-12 col-sm-6 text-center mb-4">
          <button type="button" class="btn btn-primary" @click="selected(product)">{{ product }}</button>
        </div>
      </div>

      <div v-if="Correct != ''" class="alert alert-success" role="alert">
        {{ Correct }}
      </div>
      <div v-if="Incorrect != ''" class="alert alert-danger" role="alert">
        {{ Incorrect }}
      </div>

    </div>
</template>

<script>
export default {
  name: "TriviaQuestion",
  data() {
    return {
      questions: [
        "The beaver is the national emblem of which country?",
        "In which movie did Humphrey Bogart play Charlie Allnut?",
        "What is the name of Batman's butler?",
        "Which US state is nearest to the old Soviet Union?"
      ],
      answersData: [
        ["Canada", "USA", "Germany", "France"],
        ["African Queen", "Home Alone", "Ghost Busters", "Saving Private Ryan"],
        ["Alfred", "Huston", "Frank", "Winston"],
        ["Alaska", "Hawaii", "Maine", "Massachusetts"]
      ],
      question: "",
      answers: "",
      Incorrect: "",
      Correct: "",
      randomQuestion: 1
    };
  },
  methods: {
    selected: function(input) {
      if (input === this.answersData[this.randomQuestion][0]) {
        console.log("CORRECT!")
        this.Correct = "Nice! It was " + input;
        this.Incorrect = "";
      } else {  
        console.log("INCORRECT!");
        this.Correct = "";
        this.Incorrect = "Nope! It was " + this.answersData[this.randomQuestion][0];
      }
    }
  },
  created: function() {
    var randomQuestion = Math.floor(Math.random() * this.questions.length);
    this.question = this.questions[randomQuestion];
    this.answers = this.answersData[randomQuestion];

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
