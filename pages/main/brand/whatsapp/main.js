export default function whatsapp(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            font-size:22px;
            background:green;
            color:var(--colorWhite);
            padding:10px 20px 7px;
            margin:20px 0px 0px 0px;
            border-radius:50px;
            cursor:pointer;
            transition:transform 0.5s;
        }
        >img{
            height:18px;
            margin:0px 0px 0px 10px;
            filter:invert(1);
        }
        :hover{
            transform:scale(1.1);
        }
        :responsive{
            font-size:20px;
        }`

    const whatsapp = cE("a", style)
    whatsapp.innerHTML = "Entre em contato <img src='https://ph.net.br/assets/whatsapp.png'/>"
    whatsapp.href = "https://wa.me/5541998380515"
    whatsapp.target = "_blank"
    return(whatsapp)
}