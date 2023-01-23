const contentFrame = document.querySelector('#contentFrame')
const menuHome = document.querySelector('#menuHome')
const menuGame = document.querySelector('#menuGame')
const menuJukeBox = document.querySelector('#menuJukebox')
const naviOn = "background-color : white ; color : black"
const naviOff = "background-color : #298EB5 ; color : white"

function naviHome() {
    contentFrame.setAttribute('src','home.html')
    menuHome.style = naviOn
    menuGame.style = naviOff
    menuJukeBox.style = naviOff
}
function naviGame() {
    contentFrame.setAttribute('src','game.html')
    menuGame.style = naviOn
    menuHome.style = naviOff
    menuJukeBox.style = naviOff
}

function naviJukeBox() {
    contentFrame.setAttribute('src','jukebox.html')
    menuJukeBox.style = naviOn
    menuHome.style = naviOff
    menuGame.style = naviOff
}