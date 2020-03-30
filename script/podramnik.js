const galeryBtn = document.getElementById("galery-btn")
const standartBtn = document.getElementById("standart-btn")
const podramnikImg = document.getElementsByClassName("podramnik-flex-img")[0]


function changeImg(btn, btn2, img, fileName) {
    btn.onclick = ()=>{
        console.log(btn)
        img.style.backgroundImage = `url('../img/${fileName}.jpg'`
        btn.style.backgroundColor = "white"
        btn.style.color = "black"
        btn2.style.backgroundColor = "black"
        btn2.style.color = "white"

    }
}

changeImg(galeryBtn,standartBtn, podramnikImg, "galery")
changeImg(standartBtn,galeryBtn, podramnikImg, "standart")