
// enviar método de questionário
	function submitQuiz() {
		console.log('submitted');
		

	// obtenha cada pontuação de respostas
		function answerScore (qName) {
			var radiosNo = document.getElementsByName(qName);

			for (var i = 0, length = radiosNo.length; i < length; i++) {
   				if (radiosNo[i].checked) {
			// do something with radiosNo
					var answerValue = Number(radiosNo[i].value);
				}
			}
			// alterar NaNs para zero
			if (isNaN(answerValue)) {
				answerValue = 0;
			}
			return answerValue;
		}

	// pontuação de cálculo com função answerScore
		var calcScore = (answerScore('q1') + answerScore('q2') + answerScore('q3') + answerScore('q4'));
		console.log("CalcScore: " + calcScore); // it works!

	//função para retornar string de resposta correta
		function correctAnswer (correctStringNo, qNumber) {
			console.log("qNumber: " + qNumber);  // logs 1,2,3,4 after called below
			return ("A resposta correta para a pergunta #" + qNumber + ": &nbsp;<strong>" +
				(document.getElementById(correctStringNo).innerHTML) + "</strong>");
			}

	// imprimir respostas corretas apenas se estiverem erradas (chama a função correctAnswer)
		if (answerScore('q1') === 0) {
			document.getElementById('correctAnswer1').innerHTML = correctAnswer('correctString1', 1);
			document.getElementById('correctAnswer1').classList.add("addPadding");
		}
		if (answerScore('q2') === 0) {
			document.getElementById('correctAnswer2').innerHTML = correctAnswer('correctString2', 2);
			document.getElementById('correctAnswer2').classList.add("addPadding");
		}
		if (answerScore('q3') === 0) {
			document.getElementById('correctAnswer3').innerHTML = correctAnswer('correctString3', 3);
			document.getElementById('correctAnswer3').classList.add("addPadding");
		}
		if (answerScore('q4') === 0) {
			document.getElementById('correctAnswer4').innerHTML = correctAnswer('correctString4', 4);
			document.getElementById('correctAnswer4').classList.add("addPadding");
		}

	// calcular o número inteiro de "pontuação possível"
		var questionCountArray = document.getElementsByClassName('question');

		var questionCounter = 0;
		for (var i = 0, length = questionCountArray.length; i < length; i++) {
			questionCounter++;
		}

	// mostrar pontuação como "pontuação / pontuação possível"
		var showScore = "Total Acertos: " + calcScore +"/" + questionCounter + " ";

	// if 4/4, "Pontuação perfeita!"
		if (calcScore === questionCounter) {
			showScore = showScore + " Pontuação perfeita " + " ";
		};
		document.getElementById('userScore').innerHTML = showScore;
	}







