export default function title(){
    let style = `
        {
            font-size:40px;
            color:var(--colorOrange);
            width:90%;
            text-align:left;
        }
        :responsive{
            font-size:30px;
        }`

    const title = cE("div", style)
    title.innerHTML = "Somos o lugar completo para a beleza feminina e masculina"
    return(title)
}