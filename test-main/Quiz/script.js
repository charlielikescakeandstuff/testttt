const quizData = [
    {question: "what was sonic's most popular game",
     options:["Sonic the Hedgehog","Sonic Dash","Sonic 2","Sonic 3 & Knuckles","Sonic Jump"],
     answer:"Sonic the Hedgehog"
    },
    {
        question:"what is earthbound",
        options:["a fighting game","a clicker game","an rpg game","a puzzle game"],
        answer:"an rpg game"
    },
    {
        question:"pacman's most popular game?",
        options:["pacman 1982","Pac-Man Plus","Namco All-Stars: Pac-Man","Pac-Man 2002"],
        answer:"pacman 1982"
    }
    ,{
        question:["who is the true villain in undertale?"],
        options:["Chara","Player","Frisk","WD gaster"],
        answer:"Player"
    }
    ,
    {
        question:["When did Fran bow become popular?"],
        options:["2015","2017","2018","2019"],
        answer:["2015"]

    }
    ,
    {
        question:["Who won 2022's most popular game"],
        options:["Fortine","Minecraft","StardewValley","Roblox"],
        answer:["Minecraft"]
    } ]//These are the questions that will be asked to the user
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const submitButton = document.getElementById("submit");
    
    let currentQuestion = 0;
    let score = 0;
    
    function showQuestion() {
      const question = quizData[currentQuestion];
      questionElement.innerText = question.question;
    
      optionsElement.innerHTML = "";
      question.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        optionsElement.appendChild(button);
        button.addEventListener("click", selectAnswer);
      });
    }
    function resetAnimation() {
      animation.restart();
      animation.pause();
  }
    
    function selectAnswer(e) {
      const selectedButton = e.target;
      const answer = quizData[currentQuestion].answer;
    
      if (selectedButton.innerText === answer) {
        score++;
      }
    
      currentQuestion++;
    
      if (currentQuestion < quizData.length) {
        showQuestion();
      } else {
        showResult();
      }
    }
    
    function showResult() {
      quiz.innerHTML = `
        <h1 style=" text-align:center; color: white ; font-size: 70px" class="title2">Quiz Completed!</h1>
        <p style="text-align:center; font-size:50px; color:white" class="title3">Your score: ${score}/${quizData.length}</p>
        <image src="omori-kel.gif" style=" display: block;margin-left: auto;margin-right: auto;width: 35%;">
        `;
    }
    showQuestion();
