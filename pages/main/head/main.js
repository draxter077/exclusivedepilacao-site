import logo from "./logo/main.js"
import links from "./links/main.js"

export default function head(){
    let style = `
        {
            position:fixed;
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
            transform:translateY(-100%);

            animation:downing 1s linear 0s 1 forwards;
            animation-timeline:scroll();
            animation-range-start:50svh;
            animation-range-end:100svh;
        }
        @keyframes downing{
            0%[transform:translateY(-100%)]
            100%[transform:translateY(0%)]
        }
        :responsive{
            flex-direction:column;
        }`

    const head = cE("div", style)
    head.appendChild(logo())
    head.appendChild(links())
    return(head)
}