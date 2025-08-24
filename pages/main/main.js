import head from "./head/main.js"
import brand from "./brand/main.js"
import services from "./services/main.js"
import team from "./team/main.js"
import contact from "./contact/main.js"

export default function main(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
        }`

    const main = cE("div", style)
    main.appendChild(head())
    main.appendChild(brand())
    main.appendChild(services())
    main.appendChild(team())
    main.appendChild(contact())
    return(main)
}