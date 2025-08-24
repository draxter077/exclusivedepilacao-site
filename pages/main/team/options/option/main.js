import img from "./img/main.js"
import content from "./content/main.js"

export default function option(i, t, d){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            width:23%;
            margin:10px 5px;
        }
        :responsive{
            width:45%;
        }`

    const option = cE("div", style)
    option.appendChild(img(i))
    option.appendChild(content(t, d))
    return(option)
}