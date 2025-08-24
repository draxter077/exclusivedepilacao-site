export default function link(t){
    let style = `
        {
            font-size:20px;
            color:var(--colorBlue);
            padding:5px 10px 2px;
            margin:0px 10px;
            border-radius:5px;
            cursor:pointer;
            transition:transform 0.5s;
        }
        :hover{
            transform:translateY(10%);
        }
        :responsive{
            font-size:16px;
        }`

    const link = cE("div", style)
    link.innerHTML = t
    link.addEventListener("click", () => document.getElementById(t).scrollIntoView({behavior:"smooth"}))
    return(link)
}