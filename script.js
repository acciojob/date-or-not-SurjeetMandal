var isDate = function (input) {
  //   write your code here
	let res = !isNaN(Date.parse(input));
	return res;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
