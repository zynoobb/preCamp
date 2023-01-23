const menuHome = () => {
    document.getElementById("contentFrame").setAttribute("src","home.html")
    document.getElementById("menuHome").style = "color:black; backgorund-color:white;"
    document.getElementById("menuJukebox").style = "color:white; backgorund-color:#298eb5;"
    document.getElementById("menuGame").style = "color:white; backgorund-color:#298eb5;"
}
const menuJukebox = () => {
    document.getElementById("contentFrame").setAttribute("src","jukebox.html")
    document.getElementById("menuHome").style = "color:white; backgorund-color:#298eb5;"
    document.getElementById("menuJukebox").style = "color:black; backgorund-color:white;"
    document.getElementById("menuGame").style = "color:white; backgorund-color:#298eb5;"
}
const menuGame = () => {
    document.getElementById("contentFrame").setAttribute("src","game.html")
    document.getElementById("menuHome").style = "color:white; backgorund-color:#298eb5;"
    document.getElementById("menuJukebox").style = "color:white; backgorund-color:#298eb5;"
    document.getElementById("menuGame").style = "color:black; backgorund-color:white;"
}