const Questions = [
	{
		id: 0,
		q: "Which one of these models is made by Chevrolet?",
		a: [
			{ text: "Challenger", isCorrect: false },
			{ text: "Acadia", isCorrect: false },
			{ text: "Astro", isCorrect: true },
			{ text: "Expedition", isCorrect: false },
		],
	},
	{
		id: 1,
		q: "Which one of these manufacture's did Toyota own?",
		a: [
			{ text: "Lincoln", isCorrect: false },
			{ text: "Ram", isCorrect: false },
			{ text: "Pontiac", isCorrect: false },
			{ text: "Lexus", isCorrect: true },
		],
	},
	{
		id: 2,
		q: "What model name did GM bring back that has already been used as a model name?",
		a: [
			{ text: "Aura", isCorrect: false },
			{ text: "Escape", isCorrect: false },
			{ text: "Hummer", isCorrect: true },
			{ text: "Corvette", isCorrect: false },
		],
	},
];

var start = true;

function iterate(id) {
	var result = document.getElementsByClassName("result");
	result[0].innerText = "";

	const question = document.getElementById("question");

	question.innerText = Questions[id].q;

	const op1 = document.getElementById("op1");
	const op2 = document.getElementById("op2");
	const op3 = document.getElementById("op3");
	const op4 = document.getElementById("op4");

	op1.innerText = Questions[id].a[0].text;
	op2.innerText = Questions[id].a[1].text;
	op3.innerText = Questions[id].a[2].text;
	op4.innerText = Questions[id].a[3].text;

	op1.value = Questions[id].a[0].isCorrect;
	op2.value = Questions[id].a[1].isCorrect;
	op3.value = Questions[id].a[2].isCorrect;
	op4.value = Questions[id].a[3].isCorrect;

	var selected = "";

	op1.addEventListener("click", () => {
		op1.style.backgroundColor = "rgba(178, 34, 34, 0.713)";
		op2.style.backgroundColor = "darkgrey";
		op3.style.backgroundColor = "darkgrey";
		op4.style.backgroundColor = "darkgrey";
		selected = op1.value;
	});

	op2.addEventListener("click", () => {
		op1.style.backgroundColor = "darkgrey";
		op2.style.backgroundColor = "rgba(178, 34, 34, 0.713)";
		op3.style.backgroundColor = "darkgrey";
		op4.style.backgroundColor = "darkgrey";
		selected = op2.value;
	});

	op3.addEventListener("click", () => {
		op1.style.backgroundColor = "darkgrey";
		op2.style.backgroundColor = "darkgrey";
		op3.style.backgroundColor = "rgba(178, 34, 34, 0.713)";
		op4.style.backgroundColor = "darkgrey";
		selected = op3.value;
	});

	op4.addEventListener("click", () => {
		op1.style.backgroundColor = "darkgrey";
		op2.style.backgroundColor = "darkgrey";
		op3.style.backgroundColor = "darkgrey";
		op4.style.backgroundColor = "rgba(178, 34, 34, 0.713)";
		selected = op4.value;
	});

	const evaluate = document.getElementsByClassName("evaluate");

	evaluate[0].addEventListener("click", () => {
		if (selected == "true") {
			result[0].innerHTML = "True";
			result[0].style.color = "green";
		} else {
			result[0].innerHTML = "False";
			result[0].style.color = "red";
		}
	});
}

if (start) {
	iterate("0");
}

const next = document.getElementsByClassName("next")[0];
var id = 0;

next.addEventListener("click", () => {
	start = false;
	if (id < 2) {
		id++;
		iterate(id);
	}
});
