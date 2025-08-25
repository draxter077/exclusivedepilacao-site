import img from "./img/main.js"
import text from "./text/main.js"

export default function contact(src, t, url){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            width:90%;
            padding:20px 0px;
            border-bottom:1px solid var(--colorBlack);
            cursor:pointer;
            transition:transform 0.5s;
        }
        :hover{
            transform:translateX(5%);
        }`

    const contact = cE("a", style)
    contact.href = url
    contact.target = "_blank"
    contact.appendChild(img(src))
    contact.appendChild(text(t))
    return(contact)
}