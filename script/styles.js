const leftBtn = document.getElementById("style-left")
const rightBtn = document.getElementById("style-right")
const styleImg = document.getElementsByClassName("styles-flex-img")[0]

const gtaBtn = document.getElementById("gta-btn")
const dreamBtn = document.getElementById("dream-btn")
const loveBtn = document.getElementById("love-btn")
const instaBtn = document.getElementById("insta-btn")

const gtaImgCount = 4
const dreamCount = 3
const loveCount = 2
const instaCount = 2


changeStyleImg(leftBtn,rightBtn,styleImg,gtaImgCount,'gta')
gtaBtn.style.backgroundColor = "#f046e7"

gtaBtn.onclick = () => {
    styleImg.style.backgroundImage = `url('img/gta1.jpg')`
    changeStyleImg(leftBtn,rightBtn,styleImg,gtaImgCount,'gta')
    gtaBtn.style.backgroundColor = "#f046e7"
}

dreamBtn.onclick = () => {
    styleImg.style.backgroundImage = `url('img/dream1.jpg')`
    changeStyleImg(leftBtn,rightBtn,styleImg,dreamCount,'dream')
    gtaBtn.style.backgroundColor = "black"
}
loveBtn.onclick = () => {
    styleImg.style.backgroundImage = `url('img/love1.jpg')`
    changeStyleImg(leftBtn,rightBtn,styleImg,loveCount,'love')
    gtaBtn.style.backgroundColor = "black"
}
instaBtn.onclick = () => {
    styleImg.style.backgroundImage = `url('img/insta1.jpg')`
    changeStyleImg(leftBtn,rightBtn,styleImg,instaCount,'insta')
    gtaBtn.style.backgroundColor = "black"
}


function changeStyleImg(left,right,img,count,fileName){
    let clickCount = 1;
    rightBtn.disabled = false
    rightBtn.style.visibility = "visible"
    if(clickCount == 1)
    {
        left.disabled = true;
        left.style.visibility = "hidden";
    }
    left.onclick = () => {
        clickCount--
        right.disabled = false
        right.style.visibility = "visible";
        img.style.backgroundImage = `url('img/${fileName}${clickCount}.jpg')`
        if(clickCount==1){
            left.disabled = true
            left.style.visibility = "hidden";
        }
        console.log(clickCount)
    }
    right.onclick = () =>{
        clickCount++
        left.disabled = false
        left.style.visibility = "visible";
        img.style.backgroundImage = `url('img/${fileName}${clickCount}.jpg')`
        if(clickCount==count){
            right.disabled = true
            right.style.visibility = "hidden";
        }
        console.log(clickCount)
    }
}

