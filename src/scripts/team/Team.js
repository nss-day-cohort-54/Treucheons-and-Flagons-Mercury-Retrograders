//This component is to produce html for the teams section

import { teamList } from "./TeamList.js"


export const teamHTML = () => {
    return `<section>${teamList()}</section>`
}


