var friendArray = require("../data/friends.js");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
      res.json(friendArray);
    });

    app.post("/api/friends", function(req, res) {

         let bestScore = 45;

          for( let i = 0; i < friendArray.length; i++){

              let newScore = compareArrey(req.body.scores, friendArray[i].scores);

            if ( newScore < bestScore) {
                bestScore = newScore ;
                 YourFriend = friendArray[i]
            }
          }

          friendArray.push(req.body);
          res.send(YourFriend);
    });
      
    function compareArrey(reqBodyScores, friendArray) {
        let rawScore = 0;
        for (let i = 0 ; i < friendArray.length; i++){
        rawScore += Math.abs(reqBodyScores[i] - friendArray[i])
        } return rawScore;
    }
}