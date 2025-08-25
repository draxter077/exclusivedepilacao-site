import logo from "./logo/main.js"
import links from "./links/main.js"

export default function head(){
    let style = `
        {
            position:sticky;
            top:0%;
            left:0%;

            display:flex;
            flex-direction:row;
            justify-content:space-around;
            align-items:center;
            width:100%;
            padding:10px;
            background:var(--colorWhite);
            z-index:1;
            box-shadow:0px 0px 2px 0px var(--colorOrange);
        }
        :responsive{
            flex-direction:column;
        }`

    const head = cE("div", style)
    head.appendChild(logo())
    head.appendChild(links())
    return(head)
}