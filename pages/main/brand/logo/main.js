export default function logo(){
    let style = `
        {
            height:30%;
        }
        :responsive{
            height:20%;
        }`

    const logo = cE("img", style)
    logo.src = "./assets/brand/logoname.png"
    return(logo)
}