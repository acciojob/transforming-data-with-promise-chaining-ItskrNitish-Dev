//your JS code here. If required.
const input = document.getElementById("ip");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

btn.onclick = function(){
	const number = Number(input.value);
	//first promise
	new Promise((resolve) => {
		setTimeOut(() => {
			resolve(number);
		}, 2000);
	})

	//second Promise - multiply by 2
	.then((result) => {
		output.textContent = `Result: ${result}`;

		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(result * 2);
			}, 1000);
		});
	})

	//third Promise - subtract
	.then((result) => {
		output.textContent = `Result: ${result}`;
		
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(result - 3);
			}, 1000);
		});
	})

	//fourth promise - divide by 2
	.then((result) => {
		output.textContent = `Result: ${result}`;

		return new Promise((resolve) ={
			setTimeout(() => {
				resolve(result / 2);
			}, 1000);
		});
	})

	//fifth Promise - add 10
	.then((result) => {
		output.textContent = `Result: ${result}`;

		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(result + 10);
			}, 1000);
		});
	})
	//final result
	.then((result) => {
		output.textContent = `Final Result: ${result}`;
	});
};