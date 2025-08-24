import logo from "./logo/main.js"
import slogan from "./slogan/main.js"
import description from "./description/main.js"
import button from "./button/main.js"
import arrow from "./arrow/main.js"

export default function brand(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:space-around;
            width:100%;
            height:100svh;
            background:linear-gradient(var(--colorWhite) 5%, var(--colorOrange));
        }`

    const brand = cE("div", style)
    brand.appendChild(logo())
    brand.appendChild(slogan())
    brand.appendChild(description())
    brand.appendChild(button())
    brand.appendChild(arrow())
    return(brand)
}