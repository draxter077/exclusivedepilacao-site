import slogan from "./slogan/main.js"
import description from "./description/main.js"
import button from "./button/main.js"
import carrouseel from "./carroussel/main.js"

export default function brand(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
            background:var(--colorOrange);
            padding:7.5svh 0px;
        }
        :responsive{
        }`

    const brand = cE("div", style)
    brand.appendChild(slogan())
    brand.appendChild(description())
    brand.appendChild(button())
    brand.appendChild(carrouseel())
    return(brand)
}