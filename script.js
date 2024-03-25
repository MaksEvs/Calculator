"use strict";
const display = document.querySelector(".display");

function appendToDisplay(value) {
	let operands = display.value.split(/[-+*/]/);
	let lastChar = display.value.slice(-1);

	if (display.value === "" && value === ".") {
		return;
	}

	if (isNaN(value) && value !== ".") {
		calculate();
	}

	if (typeof Number(lastChar) !== "number" && value === ".") {
		return;
	}

	if (typeof Number(lastChar) === "number" && value === ".") {
		if (operands[operands.length - 1].includes(".")) {
			return;
		}
	}

	display.value += value;
}

function clearDisplay() {
	display.value = "";
}

function deleteChar() {
	display.value = display.value.slice(0, -1);
}

function calculate() {
	let expression = display.value;

	if (expression.includes("%")) {
		calculatePercentage(expression);
	} else {
		let result = eval(expression);
		display.value = result;
	}
}
function calculatePercentage(expression) {
	let parts = expression.split("-");
	let number = parseFloat(parts[0]);
	let percentage = parseFloat(parts[1].replace("%", ""));
	let result = number - number * (percentage / 100);
	display.value = result;
}
