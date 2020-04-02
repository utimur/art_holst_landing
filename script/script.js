const upBtn = document.getElementsByClassName("up-btn")[0]
const anchors = document.getElementsByClassName("header-flex-anchor")
const menuBtn = document.getElementById("header-btn")
const menu = document.getElementById("menu")
var menuBtnClickCount  = 1

menuBtn.onclick = () => {
    menuBtnClickCount++
    if(menuBtnClickCount % 2 == 0) {
        menu.style.transform = "translateX(0%)"
    } else {
        menu.style.transform = "translateX(-100%)"
    }
}

upBtn.onclick = () => {
    // window.scrollTo(0,0)
    document.getElementById("header").scrollIntoView({
        behavior: "smooth",
        block:    "start"
    })
}

for (let i = 0; i < anchors.length ; i++) {
   anchors[i].onclick = (e) => {
       e.preventDefault()
       document.getElementById(anchors[i].getAttribute("href").replace("#","")).scrollIntoView({
           behavior: "smooth",
           block:    "start"
       })
   }
}

upBtn.style.opacity = 0
window.onscroll = () => {
        if(pageYOffset < 100){
            upBtn.style.opacity = 0
        }
        else{
            upBtn.style.opacity = 1
        }
}
