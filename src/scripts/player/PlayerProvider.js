//Fetch calls for players

//Contain local application state

const API = "http://localhost:8088"

let applicationStatePlayers = []

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

//create and export sendPlayer function to send the player object to json