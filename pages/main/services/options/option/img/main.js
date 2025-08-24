export default function img(i){
    let style = `
        {
            width:30%;
            filter:invert(1);
        }
        :responsive{
            width:50%;
        }`

    const img = cE("img", style)
    img.src = i
    return(img)
}