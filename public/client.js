const app = new Vue({
    el: '#app',
    data: {
      questions: [
        'The beaver is the national emblem of which country?',
        'In which movie did Humphrey Bogart play Charlie Allnut?',
        'What is the name of Batman\'s butler?',
        'Which US state is nearest to the old Soviet Union?'
      ],
      answersData: [
        ['Canada', 'USA', 'Germany', 'France'],
        ['African Queen', 'Home Alone', 'Ghost Busters', 'Saving Private Ryan'],
        ['Alfred', 'Huston', 'Frank', 'Winston'],
        ['Alaska', 'Hawaii', 'Maine', 'Massachusetts']
      ],
      question: '',
      answers: '',
      Incorrect: '',
      Correct: ''
    }

  })
  var randomQuestion = Math.floor(Math.random() * app.questions.length);
  app.question = app.questions[randomQuestion];
  app.answers = app.answersData[randomQuestion];

  function selected(input) {
    if (input === app.answersData[randomQuestion][0]) {
      //console.log("CORRECT!")
      app.Correct = 'Nice! It was ' + input;
      app.Incorrect = '';
    }
    else {
        //console.log("INCORRECT!");
        app.Correct = '';
        app.Incorrect = 'Nope! It was ' + app.answersData[randomQuestion][0];
    }
    //console.log(input)


  }
