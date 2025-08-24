import title from "./title/main.js"
import options from "./options/main.js"

export default function team(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
            margin:10vh 0px 0px 0px;
        }`

    const team = cE("div", style)
    team.id = "Equipe"
    team.appendChild(title())
    team.appendChild(options())
    return(team)
}