//Fetch calls for scores

//Contain local application state

const API = "http://localhost:8088"

const applicationStateTeamScore = []

export const fetchScore = () => {
    //Get score array from within json file
    return fetch(`${API}/teamScores`)
    //Converts from json to js array
    .then(response => response.json())
    //Stores external data in application state
    .then(
        //scoreArray is converted js object
        (teamScoreArray) => {
            applicationStateTeamScore = teamScoreArray
    })
}

export const getTeamScores = () => {
    const listArray = applicationStateTeamScore.map(score => ({...score}))
    return listArray
}
