export default function foot(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:center;
            width:100%;
            color:var(--colorBlack);
            padding:10px 0px;
            font-size:17px;
        }
        >a{
            transition:transform 0.5s;
        }
        >a:hover{
            transform:scale(1.1);
        }
        >a>img{
            height:28px;
            margin:0px 0px 0px 10px;
            border-radius:5px;
        }
        :responsive{
            font-size:14px;
        }`

    const foot = cE("div", style)
    foot.innerHTML = "Desenvolvido por <a target='_blank' href='https://www.ph.net.br'><img src='https://www.ph.net.br/assets/logo.jpg' /></a>"
    return(foot)
}