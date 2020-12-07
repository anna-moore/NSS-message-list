import { useMessages } from "./MessageProvider.js"
import { Message } from "./Message.js"

const contentTarget = document.querySelector(".messages")
const eventHub = document.querySelector(".container")



    // Color the messages when one of the buttons in the ThemeButtons
    // component is clicked.

eventHub.addEventListener("colorChosen", event => {
    
    const color = event.detail.color
    contentTarget.classList = []
    contentTarget.classList.add(color)
})

/*
    COMPONENT FUNCTION
*/
export const MessageList = () => {
    const allMessages = useMessages()
    render(allMessages)
}

/*
    RENDERING FUNCTION
*/
const render = messageArray => {
    const convertedMessages = messageArray.map(messageObject => {
        const messageHTML = Message(messageObject)
        return messageHTML
    })
    const combinedSections = convertedMessages.join("")
    contentTarget.innerHTML = combinedSections
}

/*
    Color the messages when one of the buttons in the ThemeButtons
    component is clicked.
*/
//event listener is added to this div
// get the id of the button that was clicked on
//e is an object .target and .id are keys of the object
//
// document.querySelector(".themes").addEventListener("click", e => {
//     //provide the id of the element that was clicked on
//     const idOfClickedElement = e.target.id

//     //let us make sure that a button got clicked on 
//     if (idOfClickedElement.startsWith("themeButton--")) {
//         // .split() means make an array out of this string, divide the string at "--" 
//         //array b structure (way of defining variabled within an array)
//         const [prefix, color] = idOfClickedElement.split("--") //["themeButton", "purple"]
//         //reset the classList back to nothing
//         contentTarget.classList = []
//         //after reset add new class
//         contentTarget.classList.add(color)
//     }
// })

