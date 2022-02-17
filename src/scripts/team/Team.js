//This component is to produce html for the teams section

import { teamList } from "./TeamList.js"


export const teamHTML = () => {
    const teamSection = `<section>${teamList()}</section>`
    return teamSection
}

const htmlTarget = document.querySelector(".leaderboard")
htmlTarget.innerHTML = teamHTML()
