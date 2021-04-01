// https://stackoverflow.com/questions/14129953/how-to-encode-a-string-in-javascript-for-displaying-in-html/14130005
function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function show_chat_message(sender, message, side) {
    message = htmlEntities(message);
    var convoContent = $("#convo-content")
    var history = convoContent.html();
    history += "<p class=\"" + side + "-chat\"><b>" + sender + ":</b> " + message + "</p>";
    convoContent.html(history);
    convoContent.scrollTop(convoContent[0].scrollHeight);
}

function recieve_message() {
    var messages = [
        "Yes",
        "No",
        "How fun!",
        "Ew.",
        "Oh my",
        "Wowzers",
        "Haha I think I've heard of that before",
        "Cool, anyways, could you tell I've been a bot this whole time? The turing test has nothing on me!"
    ]

    var message = messages[Math.floor(Math.random() * messages.length)];
    show_chat_message("Peter", message, "left");
    setTimeout(recieve_message, Math.floor(Math.random() * 10000));
}

function on_ice_breaker_click() {
    var ice_breakers = [
        "How 'bout them patriots?",
        "I use VIM",
        "What is love?",
        "Why do you think plants are green and not black to absorb more light?",
        "Why can't animals talk?",
        "Where did you find this website?",
        "How much wood could a woodchuck chuck if a woodchuck had a pnumatic arm capable of lobbing 75kg projectiles 200m?",
        "That's not a woodchuck that's a trebuchet! Sorry what were we talking about?",
        "Tell me a joke!",
        "Are you a UMass student?",
    ];

    var ice_breaker = ice_breakers[Math.floor(Math.random() * ice_breakers.length)];
    show_chat_message("Me", ice_breaker, "right")

}

function on_send_click() {
    var comment = $.trim($("#comment").val());
    if (comment.length > 0) {
        show_chat_message("Me", comment, "right");
        $("#comment").val("");
    }
}

$(function() {
    $("#send").click(on_send_click);
    $("#comment").keypress(function(event) {
        if (event.keyCode == 13 && !event.shiftKey) {
            on_send_click();
            return false;
        }
    });

    $("#ice-breaker").click(on_ice_breaker_click);
    setTimeout(recieve_message, Math.floor(Math.random() * 10000));
});