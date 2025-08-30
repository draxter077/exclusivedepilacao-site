export default function photo(src){
    let style = `
        {
            height:100%;
            border-radius:5px;
            margin:0px 2.5svw;
            box-shadow:0px 0px 2px 0px var(--colorBlack);
        }`

    const photo = cE("img", style)
    photo.src = src
    return(photo)
}