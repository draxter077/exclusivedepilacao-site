import title from "./title/main.js"
import options from "./options/main.js"

export default function services(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
            margin:10vh 0px 0px 0px;
        }`

    const services = cE("div", style)
    services.id = "Serviços"
    services.appendChild(title())
    services.appendChild(options())
    return(services)
}