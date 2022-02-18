//purpose of module is to produce skeleton HTML for main.js

import { playerHTML } from "./player/Player.js"
import { teamScoreHTML } from "./score/TeamScore.js"
import { teamHTML } from "./team/Team.js"

export const TF = () => {
    return `<article class = "contentContainer">
        <section class = "statsContainer">
            <div class = "newTeam">
                <h4>New Team</h4>
                ${teamHTML()}

            </div>
            <div class = "newPlayer">
                <h4>New Player</h4>
                ${playerHTML()}

            </div>
            <div class = "currentGame">
                <h4>Current Game</h4>
                ${teamScoreHTML()}

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