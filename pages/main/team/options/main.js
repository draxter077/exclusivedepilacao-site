import option from "./option/main.js"

export default function options(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-around;
            flex-wrap:wrap;
            width:90%;
            margin:50px 0px 0px 0px;
        }`

    const options = cE("div", style)
    options.appendChild(option("./assets/visual/elis.jpg", "Elis", "Responsável Administrativa"))
    options.appendChild(option("./assets/visual/eli.jpg", "Eli", "Responsável Administrativo"))
    options.appendChild(option("./assets/visual/maria.jpg", "Nome Completo", "Cargo. Cargo."))
    options.appendChild(option("./assets/visual/maria2.jpg", "Nome Completo", "Cargo. Cargo."))
    options.appendChild(option("./assets/visual/maria.jpg", "Nome Completo", "Cargo. Cargo."))
    options.appendChild(option("./assets/visual/maria2.jpg", "Nome Completo", "Cargo. Cargo."))
    options.appendChild(option("./assets/visual/maria.jpg", "Nome Completo", "Cargo. Cargo."))
    options.appendChild(option("./assets/visual/maria2.jpg", "Nome Completo", "Cargo. Cargo."))
    options.appendChild(option("./assets/visual/maria.jpg", "Nome Completo", "Cargo. Cargo."))
    options.appendChild(option("./assets/visual/maria2.jpg", "Nome Completo", "Cargo. Cargo."))
    return(options)
}