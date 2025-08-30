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
    scroller.appendChild(photo("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1T_cLOzD5VLFYRZiqYDPHNTHSvS550hbs-Q&s"))
    scroller.appendChild(photo("https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:eco/blog/wordpress/prod/sites/7/2023/08/23134321/shutterstock_1825933745.jpg"))
    scroller.appendChild(photo("https://www.coloramaesmaltes.com.br/-/media/Project/Loreal/Brand-Sites/Essie/MASTER/DMI/articles/tips_trends/Como-ser-uma-manicure-de-sucesso-Confira-dicas/manicure-de-sucesso.jpg?h=600&w=600&la=en&hash=87FFF505A9D06ABBE500C0DCC43916FB6B05D577"))
    scroller.appendChild(photo("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR104C9kQus6wPvE-_etxRXZKB5HFk3ikLLPQ&s"))
    scroller.appendChild(photo("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkkJLr8Pg3hpzcnEyRqImV6YHJ7O6UZtBlXg&s"))
    scroller.appendChild(photo("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1T_cLOzD5VLFYRZiqYDPHNTHSvS550hbs-Q&s"))
    scroller.appendChild(photo("https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:eco/blog/wordpress/prod/sites/7/2023/08/23134321/shutterstock_1825933745.jpg"))
    scroller.appendChild(photo("https://www.coloramaesmaltes.com.br/-/media/Project/Loreal/Brand-Sites/Essie/MASTER/DMI/articles/tips_trends/Como-ser-uma-manicure-de-sucesso-Confira-dicas/manicure-de-sucesso.jpg?h=600&w=600&la=en&hash=87FFF505A9D06ABBE500C0DCC43916FB6B05D577"))
    scroller.appendChild(photo("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR104C9kQus6wPvE-_etxRXZKB5HFk3ikLLPQ&s"))
    
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