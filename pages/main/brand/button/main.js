export default function button(){
    let style = `
        {
            font-size:22px;
            background:var(--colorWhite);
            color:var(--colorBlue);
            padding:10px 20px 7px;
            margin:20px 0px 0px 0px;
            border-radius:50px;
            cursor:pointer;
            transition:transform 0.5s;
        }
        :hover{
            transform:scale(1.1);
        }
        :responsive{
            font-size:20px;
        }`

    const button = cE("a", style)
    button.innerHTML = "Faça seu agendamento agora"
    button.href = "https://agendamento.avec.beauty/?slug=exclusivedepilacao#/app/widget/exclusivedepilacao"
    button.target = "_blank"
    return(button)
}