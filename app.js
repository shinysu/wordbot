const natural = require('natural');
const express = require('express');
const cors = require('cors');
const wordnet = new natural.WordNet();
const app = express();
const port = 3000;
app.use(cors());

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/index.html");
});
  
app.get("/wordbot/:word", (request, response) => {
    wordnet.lookup(request.params.word, function(results) {
        var wordMeaning = {};
        wordMeaning.definition =  results[0].def;
        wordMeaning.synonyms =  results[0].synonyms;
        response.send(wordMeaning);
    });
});
  
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});