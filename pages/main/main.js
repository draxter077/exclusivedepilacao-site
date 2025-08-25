import head from "./head/main.js"
import brand from "./brand/main.js"
import services from "./services/main.js"
import team from "./team/main.js"
import contact from "./contact/main.js"
import foot from "./foot/main.js"

export default function main(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
            opacity:0;
            transition:opacity 0.5s;
        }`

    const main = cE("div", style)
    main.appendChild(head())
    main.appendChild(brand())
    main.appendChild(services())
    main.appendChild(team())
    main.appendChild(contact())
    main.appendChild(foot())

    window.addEventListener("load", () => main.style.opacity = 1)
    return(main)
}