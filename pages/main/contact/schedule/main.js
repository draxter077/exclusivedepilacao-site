export default function schedule(){
    let style = `
        {
            font-size:28px;
            color:var(--colorWhite);
            background:var(--colorBlue);
            padding:10px 20px 7px;
            border-radius:20px;
            box-shadow:0px 0px 3px 0px var(--colorBlue);
            cursor:pointer;
            transition:transform 0.5s;
        }
        :hover{
            transform:scale(1.1);
        }
        :responsive{
            font-size:18px;
        }`

    const schedule = cE("a", style)
    schedule.innerHTML = "Faça seu agendamento agora"
    schedule.href = "https://agendamento.avec.beauty/?slug=exclusivedepilacao#/app/widget/exclusivedepilacao"
    schedule.target = "_blank"
    return(schedule)
}