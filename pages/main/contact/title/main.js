export default function title(){
    let style = `
        {
            font-size:40px;
            color:var(--colorOrange);
            width:90%;
            text-align:center;
            margin:15vh 0px 0px 0px;
        }
        :responsive{
            font-size:30px;
        }`

    const title = cE("div", style)
    title.innerHTML = "Estamos perto de você"
    return(title)
}