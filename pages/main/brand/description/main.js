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
    description.innerHTML = "Qualidade dos serviços. Equipe profissional. Ambiente agradável. Preço justo. Compromisso e profissionalismo."
    return(description)
}