export default function img(src){
    let style = `
        {
            height:40px;
            margin:0px 15px 0px 0px;
        }
        :responsive{
            height:30px;
        }`

    const img = cE("img", style)
    img.src = src
    return(img)
}