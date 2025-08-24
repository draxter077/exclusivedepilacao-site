export default function title(t){
    let style = `
        {
            font-size:30px;
            color:var(--colorWhite);
            text-align:justify;
            margin:5px 0px;
        }
        :responsive{
            font-size:22px;
        }`

    const title = cE("div", style)
    title.innerHTML = t
    return(title)
}