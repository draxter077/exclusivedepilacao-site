import photo from "./photo/main.js"

export default function photos(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-around;
            flex-wrap:wrap;
            width:95%;
            margin:50px 0px 0px 0px;
        }`

    const photos = cE("div", style)
    photos.appendChild(photo("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1T_cLOzD5VLFYRZiqYDPHNTHSvS550hbs-Q&s"))
    photos.appendChild(photo("https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:eco/blog/wordpress/prod/sites/7/2023/08/23134321/shutterstock_1825933745.jpg"))
    photos.appendChild(photo("https://www.coloramaesmaltes.com.br/-/media/Project/Loreal/Brand-Sites/Essie/MASTER/DMI/articles/tips_trends/Como-ser-uma-manicure-de-sucesso-Confira-dicas/manicure-de-sucesso.jpg?h=600&w=600&la=en&hash=87FFF505A9D06ABBE500C0DCC43916FB6B05D577"))
    photos.appendChild(photo("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR104C9kQus6wPvE-_etxRXZKB5HFk3ikLLPQ&s"))
    photos.appendChild(photo("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkkJLr8Pg3hpzcnEyRqImV6YHJ7O6UZtBlXg&s"))
    return(photos)
}