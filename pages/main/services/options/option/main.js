import img from "./img/main.js"
import title from "./title/main.js"
import description from "./description/main.js"

export default function option(i, t, d){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            width:23%;
            margin:10px 5px;
            background:var(--colorBlue);
            padding:10px 15px;
            border-radius:10px;
        }
        :responsive{
            width:45%;
        }`

    const option = cE("div", style)
    option.appendChild(img(i))
    option.appendChild(title(t))
    option.appendChild(description(d))
    return(option)
}