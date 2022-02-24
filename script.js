const human_div = `<div class="human">`;
const bot_div = `<div class="bot">`;
const close_div = `</div>`;

$("#form").submit(function(e) {
  e.preventDefault();
  var input = $("#user_input").val();
  $("#messages").append(human_div + input + close_div);
  $("#user_input").val("");
  make_request(input);
});

function make_request(message) {
  var url = "http://localhost:3000/wordbot/"+message;
  $.getJSON(url, function(data) {
    return bot_reply(data);
  });
}

function bot_reply(data) {
  reply = "Meaning: " + data.definition + "\n" + "Synonyms: " + data.synonyms;
  $("#messages").append(bot_div + reply + close_div);
}