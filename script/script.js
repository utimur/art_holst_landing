const upBtn = document.getElementsByClassName("up-btn")[0]
const anchors = document.getElementsByClassName("header-flex-anchor")

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
