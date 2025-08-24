export default function title(t){
    let style = `
        {
            font-size:30px;
            color:var(--colorWhite);
            margin:5px 0px;
            text-shadow:0px 0px 10px var(--colorOrange);
        }
        :responsive{
            font-size:16px;
        }`

    const title = cE("div", style)
    title.innerHTML = t
    return(title)
}