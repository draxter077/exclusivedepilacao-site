export default function title(){
    let style = `
        {
            font-size:40px;
            color:var(--colorOrange);
            width:90%;
            text-align:right;
        }
        :responsive{
            font-size:30px;
        }`

    const title = cE("div", style)
    title.innerHTML = "E isso só é possível porque temos os melhores profissionais"
    return(title)
}