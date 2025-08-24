import link from "./link/main.js"

export default function links(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
        }
        :responsive{
            margin:10px 0px 0px 0px;
        }`

    const links = cE("div", style)
    links.appendChild(link("Serviços"))
    links.appendChild(link("Equipe"))
    links.appendChild(link("Contato"))
    return(links)
}