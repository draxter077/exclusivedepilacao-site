export default function text(t){
    let style = `
        {
            font-size:20px;
            color:var(--colorBlack);
        }
        :responsive{
            font-size:15px;
        }`

    const text = cE("div", style)
    text.innerHTML = t
    return(text)
}