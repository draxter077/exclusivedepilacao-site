import photo from "./photo/main.js"

export default function scroller(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            width:fit-content;
            height:25svh;
            padding:2px 0px;
            transform:translateX(0px);
            transition:transform 0.5s;
        }
        :responsive{
            height:20svh;
        }`

    const scroller = cE("div", style)
    scroller.appendChild(photo("./assets/visual/drone_estabelecimento.jpg"))
    scroller.appendChild(photo("./assets/visual/cabelo.jpg"))
    scroller.appendChild(photo("./assets/visual/depil.jpg"))
    scroller.appendChild(photo("./assets/visual/rosto.jpg"))
    scroller.appendChild(photo("./assets/visual/make.jpg"))

    window.addEventListener(
        "load",
        async () => {
            let i = 0
            let t = 0
            while(true){
                await new Promise(resolve => setTimeout(resolve, 3500))
                let c = scroller.children[i]
                let p = photo(c.src)
                t += c.width + 2*(0.025*window.innerWidth)
                scroller.style.transform = `translateX(-${t}px)`
                scroller.appendChild(p)
                i += 1
            }
        }
    )
    return(scroller)
}