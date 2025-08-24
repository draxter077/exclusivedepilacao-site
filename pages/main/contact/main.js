import schedule from "./schedule/main.js"

export default function contact(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:90%;
            margin:10vh 0px 0px 0px;
        }`

    const contact = cE("div", style)
    contact.appendChild(schedule())
    return(contact)
}