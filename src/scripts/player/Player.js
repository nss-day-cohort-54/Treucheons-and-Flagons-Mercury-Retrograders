//This component is to produce html for the new player section

import { playersList } from "./PlayerList.js"

//Header of "New Player"
//This will be a form with three input fields and a button


//class="newPlayer"


export const playerHTML = () => {
    return `<section>${playersList()}` 
}


