export default function place(){
    let style = `
        {
            width:100%;
            height:50svh;
            box-shadow:0px 0px 2px 0px var(--colorBlack);
            border-radius:10px;
        }
        :responsive{
            width:100%;
            margin:20px 0px 0px 0px;
        }`

    const place = cE("iframe", style)
    place.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14413.467788141174!2d-49.26344171779785!3d-25.425992850160092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce47129276ebb%3A0xdb4ec9cb785825a8!2sExclusive%20Depila%C3%A7%C3%A3o%20e%20Sal%C3%A3o%20de%20beleza!5e0!3m2!1spt-BR!2sbr!4v1756136265637!5m2!1spt-BR!2sbr"
    place.allowfullscreen=""
    place.loading="lazy" 
    place.referrerpolicy="no-referrer-when-downgrade"
    return(place)
}