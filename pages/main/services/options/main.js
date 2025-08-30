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
    options.appendChild(option("./assets/elements/depilação.png", "Depilação com cera", "Cera própria, não-alérgica, não agride a camada protetora da pele. Profissionais especialistas."))
    options.appendChild(option("./assets/elements/cortedecabelo.png", "Hair Styling", "Corte. Procedimentos químicos."))
    options.appendChild(option("./assets/elements/manicure.png", "Manicure e Pedicure", "Melhores produtos. Melhores profissionais."))
    options.appendChild(option("./assets/elements/estética.png", "Estética Geral", "Procedimentos. Massagem."))
    options.appendChild(option("./assets/elements/make.png", "Maquiagem", "Festivas. Debutantes. Casamentos. Dia a dia."))
    return(options)
}