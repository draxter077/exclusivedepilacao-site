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
    options.appendChild(option("./assets/elements/depilação.png", "Depilação com cera", "Utilizamos uma cera exclusiva, não-alérgica, que não agride a camada protetora da sua pele, garantindo um procedimento suave e eficaz."))
    options.appendChild(option("./assets/elements/cortedecabelo.png", "Hair Styling", "Nossa equipe especializada oferece cortes que realçam sua personalidade, além de procedimentos químicos seguros e de alta qualidade que transformam e cuidam dos seus cabelos."))
    options.appendChild(option("./assets/elements/manicure.png", "Manicure e Pedicure", "Para unhas impecáveis, utilizamos os melhores produtos do mercado, aplicados por profissionais experientes que garantem um acabamento perfeito e duradouro."))
    options.appendChild(option("./assets/elements/estética.png", "Estética Geral", "Oferecemos procedimentos de estética pensados para realçar sua beleza e bem-estar, complementados por massagens que promovem relaxamento profundo e revitalização."))
    options.appendChild(option("./assets/elements/make.png", "Maquiagem", "Seja para festas, casamentos ou debutantes, nossa equipe realça sua beleza de forma única. Também oferecemos opções para o dia a dia, garantindo um visual impecável em qualquer situação."))
    return(options)
}