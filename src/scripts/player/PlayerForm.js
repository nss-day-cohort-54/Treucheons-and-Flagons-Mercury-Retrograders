//this module will contain a function that produces and input form for new player and assigns the player to a team


//define and export a function called playerForm that has 2 inputs for firstName, lastName, 
export const playerForm = () => {
    //and a drop down to select team, and a button to add player to team
    let html = `
    <div class="newPlayer">
    <label class="label" for="firstName">First Name</label>
    <input type="text" name="firstName" class="input" />
    </div>
    <div class="newPlayer">
    <label class="label" for="lastName">Last Name</label>
    <input type="text" name="lastName" class="input" />
    </div>
    <button class="button" id="newPlayerButton">Add New Player</button>
    `
    return html
}


//create a function that finds new id for the new player
    //looks to last index in the imported players array and adds ++ 

//click event listener for the button 
    //create and empty object 
    //set keys to inputs
    //invoke the function that adds id
    //push object to the json database- invoke the sendPlayer function


