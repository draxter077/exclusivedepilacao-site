import scroller from "./scroller/main.js"

export default function carroussel(){
    let style = `
        {
            width:100%;
            margin:5svh 0px 0px 0px;
            overflow:hidden;
        }`

    const carroussel = cE("div", style)
    carroussel.appendChild(scroller())
    return(carroussel)
}