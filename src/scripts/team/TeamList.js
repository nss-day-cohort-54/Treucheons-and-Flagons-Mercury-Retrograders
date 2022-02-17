//This component will provide a list of teams

import { getTeams } from "./TeamProvider.js";


//Define variable to store html ul
export const teamList = () => {
    const Teams = getTeams()
    let html = "<ul>"
    const listArray = Teams.map(team => {
        return `<li>${team.name}</li>`
    })
    html += listArray.join("")
    html += "</ul>"
    return html
}