//This component will contain a function that produces the html for new team

import { getTeams } from "./TeamProvider.js";
//import sendTeam function from team provider

export const newTeam = () => {
    let html = `
    <div class="newTeam">
    <label class="label" for="teamName">Team Name</label>
    <input type="text" name="teamName" class="input" />
    </div>
    <button class="button" id="newTeamButton">Create Team</button>`
return html
}
//create a function that displays html for new teams form
    //contains h3 -New Team
    //input box for team name
    //button- create new team

//add event listener- listening for button click
    //create new team object
    //invoke sendTeam function
    //rerender html