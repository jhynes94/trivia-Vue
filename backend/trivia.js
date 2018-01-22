module.exports = function (app) {
    /////////////////////////////trivia requests/////////////////////////////////////

    var questions = [
        "The beaver is the national emblem of which country?",
        "In which movie did Humphrey Bogart play Charlie Allnut?",
        "What is the name of Batman's butler?",
        "Which US state is nearest to the old Soviet Union?"
    ];
    var FakeAnswers = [
        ["USA", "Germany", "France"],
        ["Home Alone", "Ghost Busters", "Saving Private Ryan"],
        ["Huston", "Frank", "Winston"],
        ["Hawaii", "Maine", "Massachusetts"]
    ];
    var TrueAnswer = [
        "Canada",
        "African Queen",
        "Alfred",
        "Alaska",
    ];

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }


    var questionIterator = 0;

    app.get('/qna', function (req, res) {

        var ranAnswers = FakeAnswers[questionIterator].concat(TrueAnswer[questionIterator]);
        ranAnswers = shuffle(ranAnswers);

        var response = {
            "question": questions[questionIterator],
            "answers": ranAnswers
        };
        res.send(response)
    })

    app.post("/submission", function (req, res) {
        var msg = req.body.answer;
        console.log("answered: " + msg);
        if (msg === TrueAnswer[questionIterator]) {
            res.send({ message: true });
            questionIterator++;
            if (questionIterator == (questions.length)) {
                questionIterator = 0;
            }
        }
        else {
            res.send({ message: false });
        }
    });

    app.post("/newQuestion", function (req, res) {
        var msg = req.body.answer;
        console.log("answered: " + msg);
        if (msg === answersData[questionIterator][0]) {
            res.send({ message: true });
            questionIterator++;
            if (questionIterator == (questions.length)) {
                questionIterator = 0;
            }
        }
        else {
            res.send({ message: false });
        }
    });
};