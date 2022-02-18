//purpose of module is to produce skeleton HTML for main.js

import { playerForm } from "./player/PlayerList.js"
import { currentGame } from "./score/CurrentGame.js"
import { newTeam } from "./team/TeamForm.js"

export const TF = () => {
    return `<article class = "contentContainer">
        <section class = "statsContainer">
            <div class = "newTeam">
                <h4>New Team</h4>
                ${newTeam()}

            </div>
            <div class = "newPlayer">
                <h4>New Player</h4>
                ${playerForm()}

            </div>
            <div class = "currentGame">
                <h4>Current Game</h4>
                ${currentGame()}

            </div>
            <div class = "leaderboard">
                <h4>Leaderboard</h4>
            
            </div>
        </section>
        <section class = "gamePlay">
            <h1>Trungeons and Flagons</h1>
            <div class = "gamePlayContent">
                <button id = "startGame">Start Game</button>

            </div>
        </section>
    </article>`
}


//create event listener for "gameOver" to rerender this page