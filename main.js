canvas = document.getElementById('myCanvas')
ctx = canvas.getContext("2d")
roverwidth = 100
roverheight = 90
roverx = 10
rovery = 10
backgoundImg = "mars.jpg"
roverImage = "rover.png"

function add(){
    backgoundImageTag = new Image()
    backgoundImageTag.onload = uploadBackGround
    backgoundImageTag.src = backgoundImg 

    roverImgTag = new Image()
    roverImgTag.onload = uploadrover
    roverImgTag.src = roverImage
}

function uploadBackGround(){
    ctx.drawImage(backgoundImageTag,0,0,canvas.width,canvas.height)

}
function uploadrover(){
    ctx.drawImage (roverImgTag,roverx,rovery,roverwidth,roverheight)
}

window.addEventListener("keydown",mykeydow)

function mykeydow(e){
    keypressed = e.keycode 
    if (keypressed == "38"){
        up()
        
    }
    if (keypressed == "40"){
        down()
    }

    if (keypressed == "37"){
        left()
    }

    if (keypressed == "39"){
        right()
     }
 }

    function up(){
        if (rovery >= 0 ){
            rovery = rovery-10
            uploadBackGround()
            uploadrover()
        }
    }
    function down(){
        if (rovery <= 500 ){
            rovery = rovery+10
            uploadBackGround()
            uploadrover()
        }
    }
    function left(){
        if (roverx >= 0 ){
            roverx = roverx-10
            uploadBackGround()
            uploadrover()
        }
    }
    function right(){
        if (roverx <= 700 ){
            roverx = roverx+10
            uploadBackGround()
            uploadrover()
        }
    }


   
