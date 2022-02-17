//This component is to produce html for the leaderboard
import { teamScoreList } from "./TeamScoreList.js"


export const teamScoreHTML = () => {
    const teamScoreSection = `<section>${teamScoreList()}</section>`
    const htmlTarget = document.querySelector(".currentGame")
    htmlTarget.innerHTML = teamScoreSection
}

