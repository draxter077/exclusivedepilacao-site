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
    options.appendChild(option("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROYIxfO0el9_f17_msy47K6rpofzEQfA8Dvg&s", "Nome Completo", "Cargo. Cargo."))
    options.appendChild(option("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROYIxfO0el9_f17_msy47K6rpofzEQfA8Dvg&s", "Nome Completo", "Cargo. Cargo."))
    options.appendChild(option("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROYIxfO0el9_f17_msy47K6rpofzEQfA8Dvg&s", "Nome Completo", "Cargo. Cargo."))
    options.appendChild(option("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROYIxfO0el9_f17_msy47K6rpofzEQfA8Dvg&s", "Nome Completo", "Cargo. Cargo."))
    options.appendChild(option("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROYIxfO0el9_f17_msy47K6rpofzEQfA8Dvg&s", "Nome Completo", "Cargo. Cargo."))
    options.appendChild(option("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROYIxfO0el9_f17_msy47K6rpofzEQfA8Dvg&s", "Nome Completo", "Cargo. Cargo."))
    options.appendChild(option("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROYIxfO0el9_f17_msy47K6rpofzEQfA8Dvg&s", "Nome Completo", "Cargo. Cargo."))
    options.appendChild(option("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROYIxfO0el9_f17_msy47K6rpofzEQfA8Dvg&s", "Nome Completo", "Cargo. Cargo."))
    options.appendChild(option("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROYIxfO0el9_f17_msy47K6rpofzEQfA8Dvg&s", "Nome Completo", "Cargo. Cargo."))
    options.appendChild(option("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROYIxfO0el9_f17_msy47K6rpofzEQfA8Dvg&s", "Nome Completo", "Cargo. Cargo."))
    options.appendChild(option("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROYIxfO0el9_f17_msy47K6rpofzEQfA8Dvg&s", "Nome Completo", "Cargo. Cargo."))
    options.appendChild(option("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROYIxfO0el9_f17_msy47K6rpofzEQfA8Dvg&s", "Nome Completo", "Cargo. Cargo."))
    return(options)
}