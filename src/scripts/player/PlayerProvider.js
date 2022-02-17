//Fetch calls for players

//Contain local application state

const API = "http://localhost:8088"

const applicationStatePlayers = []

export const fetchPlayers = () => {
    //Get players array from within json file
    return fetch(`${API}/players`)
    //Converts from json to js array
    .then(response => response.json())
    //Stores external data in application state
    .then(
        //playerArray is converted js object
        (playerArray) => {
        applicationStatePlayers = playerArray
    })
}

export const getPlayers = () => {
    const listArray = applicationStatePlayers.map(player => ({...player}))
    return listArray
}