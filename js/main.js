let header_page = document.getElementById('header-page')

window.onscroll =() =>{
    if(window.scrollY > 0){
        header_page.style.backgroundColor = 'black'
    }else{
        header_page.style.backgroundColor = 'black'
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
if(window.innerWidth > 720){
    header_bar.style.display = "flex"
}

let about_button1 = document.getElementById("about-button1")
let about_popup1 = document.querySelector('.about-popup1')
let details_container1 = document.querySelector('.details-container1 ')
let details_container_btn = document.querySelector('.details-container-wrong')


about_button1.onclick = () =>{
    about_popup1.style.display = 'flex'
    setTimeout(()=>{
        details_container1.style.transform = 'translateY(0%)'
        details_container1.style.transition = '1s ease;'
    }, 200)
}
details_container_btn.onclick = () =>{
    details_container1.style.transform = 'translateY(-200%)'
    details_container1.style.transition = '1s ease;'
    setTimeout(()=>{
        about_popup1.style.display = 'none'
    }, 600)
}

let about_button2 = document.getElementById("about-button2")
let about_popup2 = document.querySelector('.about-popup2')
let details_container2 = document.querySelector('.details-container2')
let details_container_btn1 = document.querySelector('.details-container-wrong1')


about_button2.onclick = () =>{
    about_popup2.style.display = 'flex'
    setTimeout(()=>{
        details_container2.style.transform = 'translateY(0%)'
        details_container2.style.transition = '1s ease;'
    }, 200)
}
details_container_btn1.onclick = () =>{
    details_container2.style.transform = 'translateY(-200%)'
    details_container2.style.transition = '1s ease;'
    setTimeout(()=>{
        about_popup2.style.display = 'none'
    }, 600)
}
let listDoc = [
    document.querySelector('.intertain'),
    document.querySelector('#home-page'),
    document.querySelector('#services'),
    document.querySelector('#expertise-page'),
    document.querySelector("#about-page")

]
let oberserve = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            const section = entry.target
            const id = section.id
            history.replaceState(null, null, `#${id}`)

            if(id === "about-page"){
                document.querySelector('#about-content-clark').style.transform  = 'translateX(0%)'
                document.querySelector('#about-content-venes').style.transform  = 'translateX(0%)'
            }else if(id === "intertain"){
                document.querySelector(".brief-introduction div").style.transform = 'translateX(0%)'
                document.querySelector(".brief-introduction img").style.transform = 'translateX(0%)'
            }
            else{
                document.querySelector('#about-content-clark').style.transform  = 'translateX(-200%)'
                document.querySelector('#about-content-venes').style.transform  = 'translateX(200%)'
                document.querySelector(".brief-introduction div").style.transform = 'translateX(-200%)'
                document.querySelector(".brief-introduction img").style.transform = 'translateX(200%)'
            }
        }
    })
}, {
    root: null,
    rootMargin: '0px 0px -30% 0px',
    threshold: 0.3

})
listDoc.forEach((element)=>{
    oberserve.observe(element)
})