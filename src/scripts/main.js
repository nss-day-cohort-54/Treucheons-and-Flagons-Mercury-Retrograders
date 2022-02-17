import { fetchPlayers } from "./player/PlayerProvider.js"
import { fetchScore } from "./score/TeamScoreProvider.js"
import { TF } from "./T-F.js"
import { fetchTeam } from "./team/TeamProvider.js"


const renderHTML = () => {
    
    fetchPlayers()
    fetchScore()
    fetchTeam().then(
        ()=> {
            document.querySelector(".mainContainer").innerHTML = TF()
            
        })
    
}

renderHTML()