import title from "./title/main.js"
import description from "./description/main.js"

export default function content(t, d){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
            padding:10px 15px;
            border-radius:10px;
            box-shadow:0px -50px 0px 0px var(--colorOrange);
            background:var(--colorOrange);
            z-index:-1;
        }`

    const content = cE("div", style)
    content.appendChild(title(t))
    content.appendChild(description(d))
    return(content)
}