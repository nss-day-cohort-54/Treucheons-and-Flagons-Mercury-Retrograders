//purpose of this module is to render HTML for gameplay section


//import teams array that was populated in team select once a 3rd unique team was selected



const gameplayAppState = {
    gameRound = "",

    teamsPlaying: [
        {
            "id": 1,
            "teamId": "",
            "score": "",
            "gameDate": ""
        },
        {
            "id": 2,
            "teamId": "",
            "score": "",
            "gameDate": ""
        },
        {
            "id": 3,
            "teamId": "",
            "score": "",
            "gameDate": ""
        },
    ]
}

newTeamObject = {
    1: 7,
    3: 4,
    6: 4,

}


//create event listener that listens for "teamsSelected" from TeamSelect Module and produces html for gameplay




//this function produces html for the gameplay portion that includes round #, point inputs for 3 teams selected in team select, and button to save round score
    //use map to iterate through imported teams array to create input boxes where user will save points


    //create button element that will be listened for later to save the score of each round







//create event listener that will listen for change in the input boxes
    //check whether points entered is greater than 3
        //if so, create alert window- yoou cant assign more than 3 points a round
        //if less than 3, create alert window that says- must record 3 points
        //if === 3, save the point value to the app state of that team



//event listener for button
    //if game round < 3 then we can add to round score and add points to each team, rerender the html w/new round # displayed
    //else
        //add points to each team
        //determine who has most points
        //declare winner with window alert
        //invoke createNewTeamScoreObject function- push temp state to the json data
        //set gameRound to 1
        //dispatch new custom event "gameOver"




//