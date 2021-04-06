// load previous answers from server
let $questions = $(".question");
// first question
$questions[0].children[2].children[0].children[0].checked = true; // love it
$questions[0].children[3].children[1].value = "MMM-MMM-YUMMY! Gotta have me some PINEAPPLE ON PIZZA! 🍕🍍🍕🍍🍕🍍";
// second question
$questions[1].children[2].children[1].children[0].checked = true; // hate it
$questions[1].children[3].children[1].value = "80% canned laughter, 20% unfunny jokes. No thank you!";
// third question
$questions[2].children[2].children[2].children[0].checked = true; // what's that?
$questions[2].children[3].children[1].value = "I don't know what the debate around the Oxford comma is but I'm happy to listen and learn about this sensitive issue.";
// fourth question
$questions[3].children[2].children[0].children[0].checked = true; // love it
$questions[3].children[3].children[1].value = "Possibly the greatest song to ever grace the ears of the Internet.";
// fifth question
$questions[4].children[2].children[1].children[0].checked = true; // hate it
$questions[4].children[3].children[1].value = "What's that? You want to make eye contact? Sorry, I'm waiting for marriage 😎";

// deleting previous answers
$(".close-question").click( // set click event for each of the close buttons to the following
    function(event){
        let $question = $(event.target.parentNode);
        $question.slideUp(); // closing animation
        $question.addClass("toRemove"); // it's still there but with the tag "to remove" to tell the server to remove it
    }
);

// profile pic upload changes with selected file
let $pfpImg = $("#pfp");
let fr = new FileReader();
fr.onload = function(){ $pfpImg.attr("src",this.result) }
$("#pfpInput").change(function(event){
    fr.readAsDataURL(event.target.files[0]);
})