let nav_bar = document.querySelector('.responsive-bar')
let header_bar = document.querySelector('#header-page')
let side_bar = document.querySelector('.side-bar')
let btn_side = document.querySelector('.btn-sidebar')
nav_bar.onclick = () => {
    side_bar.style.transform = 'translateX(0%)'
    side_bar.style.transition = '0.3s ease'
    side_bar.style.display = 'flex'
    header_bar.style.display = "none"
}
btn_side.onclick = () =>{
    side_bar.style.transform = 'translateX(200%)'
    side_bar.style.transition = '0.5s ease'
    side_bar.style.display = 'flex'
    header_bar.style.display = "flex"
}