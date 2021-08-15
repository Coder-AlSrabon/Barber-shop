var menuBtn = document.getElementById("menuBtn")
var sideNav = document.getElementById("sideNav")
var menu = document.getElementById("menu")
menuBtn.onclick = function(){
    if(sideNav.style.right == "-240px"){
    sideNav.style.right = "0";
    menu.src ="images/close.png";
    }
    else{
        sideNav.style.right = "-240px";
        menu.src = "images/menu.png";
    }
}
var scroll = new SmoothScroll('a[href*="#"]', {
speed: 1000,
speedAsDuration: true
});