//This purpose of this module is 

//attach to element in the DOM
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".themes")

// Listen for browser generated click event in this component
eventHub.addEventListener("click", clickEvent => {

    // Make sure it was one of the color buttons
    if (clickEvent.target.id.startsWith("btnTheme--")) {

        // Get the chosen color     //array destructing
        const [prefix, chosenColor] = clickEvent.target.id.split("--")

        /*
            Create a new custom event, with a good name, and
            add a property to the `detail` object that specifies
            which color was chosen
        */
       //object that is created with event happens that conveys information about the event 
       //name the event in the string
       //the the variable chosenColor defined above the info that needs to be sent
       //use must new keyword
       //expecting two arguments can be anything
       //is there is data to be send use detail key
       //the key in detail, color, can be anything
        const colorChosenEvent = new CustomEvent("colorChosen", {
            detail: {
                color: chosenColor
            }
        })
        //send the event broadcast the event 
        eventHub.dispatchEvent(colorChosenEvent)
    }
})

export const ThemeButtons = () => {
    contentTarget.innerHTML = `
        <button class="btnTheme" id="btnTheme--red">Red</button>
        <button class="btnTheme" id="btnTheme--purple">Purple</button>
        <button class="btnTheme" id="btnTheme--blue">Blue</button>
        <button class="btnTheme" id="btnTheme--green">Green</button>
    `
}