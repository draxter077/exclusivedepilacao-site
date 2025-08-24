export default function button(){
    let style = `
        {
            font-size:22px;
            background:var(--colorWhite);
            color:var(--colorBlue);
            padding:10px 20px 7px;
            border-radius:50px;
            box-shadow:0px 0px 10px 0px var(--colorOrange);
            transition:transform 0.5s;
        }
        :hover{
            transform:scale(1.1);
        }
        :responsive{
            font-size:20px;
        }`

    const button = cE("button", style)
    button.innerHTML = "Faça seu agendamento agora"
    return(button)
}