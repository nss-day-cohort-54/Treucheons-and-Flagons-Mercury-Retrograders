//List the number of the team, score, and date of the score

import { getTeamScores } from "./TeamScoreProvider.js";


//Define variable to store html ul
export const teamScoreList = () => {
    const Score = getTeamScores()
    let html = "<ul>"
    const listArray = Score.map(score => {
        return `<li>${score.id}</li>`
    })
    html += listArray.join("")
    html += "</ul>"
    return html
}