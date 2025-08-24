export default function description(d){
    let style = `
        {
            font-size:18px;
            color:var(--colorWhite);
            text-align:justify;
        }
        :responsive{
            font-size:12px;
        }`

    const description = cE("div", style)
    description.innerHTML = d
    return(description)
}