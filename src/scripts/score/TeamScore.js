//This component is to produce html for the leaderboard
import { teamScoreList } from "./TeamScoreList.js"


export const teamScoreHTML = () => {
    return `<section>${teamScoreList()}</section>`
}

