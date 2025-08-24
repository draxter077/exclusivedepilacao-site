export default function schedule(){
    let style = `
        {
            font-size:28px;
            color:var(--colorWhite);
            background:var(--colorBlue);
            padding:10px 20px 7px;
            border-radius:20px;
            box-shadow:0px 0px 3px 0px var(--colorBlue);
            transition:transform 0.5s;
        }
        :hover{
            transform:scale(1.1);
        }
        :responsive{
            font-size:18px;
        }`

    const schedule = cE("button", style)
    schedule.innerHTML = "Faça seu agendamento agora mesmo"
    return(schedule)
}