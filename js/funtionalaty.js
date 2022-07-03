// pop up box
// window.alert("sometext");
// console.log(message)

let person = prompt("Please enter your name so we can make it a personal experince for you", "your name");
let text;
if (person == null || person == "") {
    text = "User cancelled the prompt.";
} else {
    text = "Hello " + person + "! How are you today?";
}
Console.log(person);
// Pop up disclaimor box
// $(function () {
//             var overlay = $('<div id="overlay"></div>');
//             overlay.show();
//             overlay.appendTo(document.body);
//             $('.popup').show();
//             $('.close').click(function () {
//                 $('.popup').hide();
//                 overlay.appendTo(document.body).remove();
//                 return false;
//             });


//     $('.x').click(function () {
//     $('.popup').hide();
//     overlay.appendTo(document.body).remove();
//     return false;
//     });
//     });