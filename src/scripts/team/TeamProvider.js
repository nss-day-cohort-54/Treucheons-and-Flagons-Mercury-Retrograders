//Fetch calls for teams

//Contain local application state

const API = "http://localhost:8088"

const applicationStateTeam = []

export const fetchTeam = () => {
    //Get team array from within json file
    return fetch(`${API}/teams`)
    //Converts from json to js array
    .then(response => response.json())
    //Stores external data in application state
    .then(
        //teamArray is converted js object
        (teamArray) => {
        applicationStateTeam = teamArray
    })
}

export const getTeams = () => {
    const listArray = applicationStateTeam.map(team => ({...team}))
    return listArray
}
