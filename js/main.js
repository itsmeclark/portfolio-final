let header_page = document.getElementById('header-page')

window.onscroll =() =>{
    if(window.scrollY > 0){
        header_page.style.backgroundColor = 'black'
    }else{
        header_page.style.backgroundColor = 'transparent'
    }
}


let typeAnimation = document.querySelector('#home-page h1 strong')
let changes_char = [
    "Solutions",
    "Maintainance",
]
// let emptyText = ""
// let index = 0
// let insideIndex = 0;
// function textType(){
//     let text = changes_char[index]
//     if(insideIndex >= text.length && index != 2){
//         console.log(index)
//         index++
//         insideIndex = 0;
//         emptyText = ""
//     }else if(index > 1){
//         index = 0;
//         insideIndex = 0;
//         emptyText = ""
//     }
//     else{
//         emptyText += text[insideIndex]
//         typeAnimation.textContent = emptyText;
//         insideIndex++
//     }
// }
// setInterval(()=>{
//     textType()
// }, 300)

let nav_bar = document.querySelector('.responsive-bar')
let header_bar = document.querySelector('#header-page')
let side_bar = document.querySelector('.side-bar')
let btn_side = document.querySelector('.btn-sidebar')

nav_bar.onclick = () => {
    // side_bar.style.transform = 'translateX(0%)'
    // side_bar.style.transition = '0.3s ease'
    side_bar.style.display = 'flex'
    header_bar.style.display = "none"
}
btn_side.onclick = () =>{
    side_bar.style.display = 'none'
    header_bar.style.display = "flex"
}