export default function img(i){
    let style = `
        {
            width:70%;
            border-radius:5px;
            box-shadow:0px 0px 2px 0px var(--colorBlack);
        }`

    const img = cE("img", style)
    img.src = i
    return(img)
}