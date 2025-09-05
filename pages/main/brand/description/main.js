export default function description(){
    let style = `
        {
            font-size:22px;
            color:var(--colorWhite);
            text-align:center;
            max-width:90%;
        }
        :responsive{
            font-size:18px;
        }`

    const description = cE("div", style)
    description.innerHTML = "Oferecemos serviços de alta qualidade e um ambiente acolhedor, onde nossa equipe profissional e dedicada garante o compromisso e o profissionalismo em cada atendimento."
    return(description)
}