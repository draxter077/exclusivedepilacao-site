export default function logo(){
    let style = `
        {
            height:60px;
        }
        :responsive{
            height:40px;
        }`

    const logo = cE("img", style)
    logo.src = "./assets/brand/logo.png"
    return(logo)
}