//purpose of this module is to render HTML for gameplay section


//import teams array that was populated in team select once a 3rd unique team was selected



const gameplayAppState = {
    gameRound = "",

    teamsPlaying: [
        {
            team1Id: "",
            team1Points: "",
        },
        {
            team2Id: "",
            team2Points: "",
        },
        {
            team3Id: "",
            team3Points: "",
        }
    ]
}


//export a set team function that accepts id input of team selected in team select and adds to app state

//create event listener that listens for "teamsSelected" from TeamSelect Module and produces html for gameplay




//this function produces html for the gameplay portion that includes round #, point inputs for 3 teams selected in team select, and button to save round score
    //use map to iterate through imported teams array to create input boxes where user will save points


    //create button element that will be listened for later to save the score of each round







//create event listener that will listen for change in the input boxes
    //check whether points entered is greater than 3
        //if so, create alert window
        //if not, save the point value to the app state of that team



//event listener for button
    //if game round < 3 then we can add to round score and add points to each team
    //else
        //add points to each team
        //determine who has most points
        //declare winner with window alert
        //invoke createNewTeamScoreObject
        //set gameRound to 1
        //dispatch new custom event "gameOver"




//