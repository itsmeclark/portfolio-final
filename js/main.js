let header_page = document.getElementById('header-page')

window.onscroll =() =>{
    if(window.scrollY > 0){
        header_page.style.backgroundColor = 'black'
    }else{
        header_page.style.backgroundColor = 'transparent'
    }
}

// let typeAnimation = document.querySelector('#home-page h1 strong')
// let changes_char = [
//     "Solutions",
//     "Maintainance",
// ]
// let emptyText = ""
// let index = 0
// let insideIndex = 0;
// function textType(){
//     let text = changes_char[index]
//     if(insideIndex >= text.length){
//         index++
//         insideIndex = 0;
//         emptyText = ""
//     }else if(index >= 1){
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