$(document).ready(function() {

console.log("Hello");
//alert("your computer has a virus");
console.log(43 * 78);

var name = "Naeem";

console.log(name);

var lucky = 12;

console.log("twelve times nine is...")
console.log(lucky * 45);

if (1 + 1 === 2) {
	console.log("maths works");
}

if (1 + 2 === 1000) {
	console.log("oh dear");
}

var name = "Naeem"

if (name === "ash") {
	console.log("your name is ash")
}else {
	console.log("nope, you dont have that clapped name")
}


});

function checkPassword(){
var enteredText = $("#password").val();

if (enteredText === "ashisclapped") {
	$(document.body).append("that was the password");
} else {
	$(document.body).append("thats wrong");
}

}





