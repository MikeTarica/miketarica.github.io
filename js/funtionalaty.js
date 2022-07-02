// pop up box
window.alert("sometext");
console.log(message)

let person = prompt("Please enter your name", "Harry Potter");
let text;
if (person == null || person == "") {
    text = "User cancelled the prompt.";
} else {
    text = "Hello " + person + "! How are you today?";
}
console.log(message)