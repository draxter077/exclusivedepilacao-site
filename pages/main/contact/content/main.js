import contacts from "./contacts/main.js"
import place from "./place/main.js"

export default function content(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            margin:5vh 0px;
            width:95%;
        }
        :responsive{
            flex-direction:column;
        }`

    const content = cE("div", style)
    content.appendChild(contacts())
    content.appendChild(place())
    return(content)
}