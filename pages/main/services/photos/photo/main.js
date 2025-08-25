export default function photo(src){
    let style = `
        {
            width:15%;
            aspect-ratio:1;
            border-radius:5px;
            box-shadow:0px 0px 2px 2px var(--colorOrange);
        }
        :responsive{
            width:30%;
            margin:10px 0px 0px 0px;
            box-shadow:0px 0px 1px 1px var(--colorOrange);
        }`

    const photo = cE("img", style)
    photo.src = src
    return(photo)
}