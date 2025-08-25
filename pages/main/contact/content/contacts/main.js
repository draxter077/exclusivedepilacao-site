import contact from "./contact/main.js"

export default function contacts(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:flex-start;
            width:95%;
        }
        :responsive{
            align-items:center;
        }`

    const contacts = cE("div", style)
    contacts.appendChild(contact("https://www.ph.net.br/assets/instagram.png", "@ExclusiveDepilacao", "https://www.instagram.com/exclusivedepilacao/"))
    contacts.appendChild(contact("https://www.ph.net.br/assets/whatsapp.png", "(41) 99838-0515", "https://wa.me/5541998380515"))
    contacts.appendChild(contact("./assets/elements/facebook.png", "Exclusive Depilação", "https://www.facebook.com/exclusivedepilacao"))
    return(contacts)
}