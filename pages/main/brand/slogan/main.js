export default function slogan(){
    let style = `
        {
            font-size:35px;
            color:var(--colorWhite);
            margin:0px 0px 20px 0px;
            text-align:center;
            max-width:90%;
        }
        :responsive{
            font-size:28px;
        }`

    const slogan = cE("div", style)
    slogan.innerHTML = "Há mais de 20 anos, especialista em beleza feminina e masculina"
    return(slogan)
}