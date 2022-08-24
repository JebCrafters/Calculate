const door = document.getElementById("open_door");
const left_door = document.getElementById("left_door")
const right_door = document.getElementById("right_door")
const gate = document.getElementById("gates")
const btn_off = document.getElementById("OFF")

door.addEventListener('click', function click (){
    door.style.backgroundColor = "rgb(255, 215, 0, 0)";
    door.style.visibility = "hidden";
    door.style.top = "-100px";
    leftdoor();
    rightdoor();
    setTimeout(gates,300)
    setTimeout(btn,800)

});

btn_off.addEventListener('click', function off() {
    btn_off.style.visibility = "hidden"
    gate.style.visibility = 'visible';
    left_door.style.backgroundColor = 'brown';
    right_door.style.backgroundColor = 'brown';
    left_door.style.transform = "perspective(1200px) translateZ(0px) translateX(0px) translateY(0px) rotateY(0deg)";
    right_door.style.transform = "perspective(1200px) translateZ(0px) translateX(0px) translateY(0px) rotateY(0deg)";
    setTimeout(vis_btn_door, 1000)
    
})
function vis_btn_door () {
    door.style.top = "0px";
    door.style.transition = "all 0.5s ease-in";
    door.style.visibility = "visible";
    door.style.backgroundColor = "rgb(255, 215, 0, 1)";
    
}

function leftdoor () {
    left_door.style.transition = "all 1s ease-in-out";
    left_door.style.transform = "perspective(1200px) translateZ(0px) translateX(0px) translateY(0px) rotateY(-155deg)";
}
function rightdoor () {
    right_door.style.transition = "all 1s ease-in-out";
    right_door.style.transform = "perspective(1200px) translateZ(0px) translateX(0px) translateY(0px) rotateY(155deg)";

}
function gates (){
    left_door.style.backgroundColor = 'aqua';
    right_door.style.backgroundColor = 'aqua';
    gate.style.visibility = 'hidden';
    
}

function btn () {
    btn_off.style.visibility = "visible";
    btn_off.style.backgroundColor = "rgb(255, 0, 0, 1)";
    btn_off.style.transition = "all 0.4s ease-in-out";
    btn_off.style.border = '0.1vw solid white';
}
