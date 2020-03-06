// Create Q&A Object

var currentQuestion = 0;

	var objQA = [
	{question: "What is the difference between == and === ?",
		choices: ["1. == compares both type and values and === only compares values", "2. == only compares values and === compare both values and type", "3. They're both the same"],
		correctAnswer: "2. '== only compares values and === compare both values and type' ",
	},

	{question: "How can you add one new element at end of an array in javascript?",
		choices: ["1. The pop method adds one or more elements to the end of an array", "2. The splice method adds one or more elements to the end of an array", "3. The push method adds one or more elements to the end of an array"], 
		correctAnswer: "3. 'The push method adds one or more elements to the end of an array' ",
	},

	{question: "Does the concat method modify the original array or return a new array?",
		choices: ["1. The concat method modifies the original array", "2. The concat method returns a new array", "3. Neither"], 
		correctAnswer: "2. 'The concat method returns a new array' ",
	}
];


// create start button (HTML)
// attach click event

$(document).ready(function() {

	$("#button-start").on("click", function() {

	// hide start button (change class)
	$("#button-start").addClass("hide");
	// display first question + answer choices
	displayQuestion(currentQuestion);
	// start timer
	startCountDown();


	});

});

// create function to display questions & answer choices
function displayQuestion(questionNumber) {

	// add question header div, class and content
	var cardHeader = $("#question-area").append("<div>")
		.addClass("card-header")
		.text(objQA[questionNumber].question);

	// add answer choices div and class
	var cardBody = $("#answer-choices").append("<div>")
		.addClass("card");


	// iterate through objQA[questionNumber].choices array
	var choicesArray = objQA[questionNumber].choices;
		choicesArray.forEach(element => {

			// generate button for answer choices
			var answerChoiceDiv = cardBody.append("<button>"+ element + "</button>");
			// add formatting for buttons 
			$("#answer-choices :button").addClass("btn btn-primary answer-button")
			
		});	
};


// // create function to indicate answer choice clicked
// 	 $(".answer-button").on("click"(function() {

// 	 	// stop timer
// 	 	// if((objQA[questionNumber].choices) == (objQA[questionNumber].correctAnswer))
// 	 	// then correct answer chosen (add points)
// 	 	// else incorrect answer (deduct points)


// 	});
	

// add Next button 
$("#button-next-div").on("click", function() {

	// clear 'answer-choices' div
	$("#answer-choices").empty();
	// display new question + answer choices
	displayQuestion(++currentQuestion);
	// re-start timer
	startCountDown();

});


//  start timer countdown (setInterval method recommended)

var timeCount = $("#display-countdown");

function startCountDown () {
	var secondsRemaining = 30;

	var interval = setInterval(() => {
		secondsRemaining--;

	// display seconds remaining
	timeCount.text("Time remaining: " + secondsRemaining);

		if(secondsRemaining === 0) {
			clearInterval(interval);
			timeCount.text("Time's up!");
		};

		}, 1000);
	
};



// create a stopCountDown function that stops the timer  



// is user finished?

// if finished:
	// generate form for user
	// save score to local storage
	// clear and show scores
		