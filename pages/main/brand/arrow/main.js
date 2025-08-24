export default function arrow(){
    let style = `
        {
            height:20px;
        }`

    const arrow = cE("img", style)
    arrow.src = "./assets/elements/arrow.png"
    return(arrow)
}