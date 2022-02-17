//Displays list on DOM

import { getPlayers } from "./PlayerProvider.js";


//Define variable to store html ul
export const playersList = () => {
    const Players = getPlayers()
    let html = "<ul>"
    const listArray = Players.map(player => {
        return `<li>${player.id}</li>`
    })
    html += listArray.join("")
    html += "</ul>"
    return html
}