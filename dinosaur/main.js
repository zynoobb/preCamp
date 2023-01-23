let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
let catchMe = document.querySelector('#catch_me_if_you_can')
canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

// image
let hurdleImg = new Image()
hurdleImg.src = './images/hurdle.png'
let personImg = new Image()
personImg.src = './images/person.png'

let person = {
    // 공룡등장 좌표
    x: 10,
    y: 200,
    width: 50,
    height: 50,
    draw() {
        ctx.fillStyle = "green";
        // 10px 10px 위치 // 100 * 100 사이즈
        // ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(personImg, this.x, this.y , this.width, this.height)
    },
};

let line = {
    x : 0,
    y : 250,
    width : 10000,
    height : 2,
    draw() {
        ctx.fillStyle = 'black';
        ctx.fillRect(this.x, this.y, this.width, this.height);   
    }
}

class Hurdle {
    constructor() {
        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
    draw() {
        ctx.fillStyle = "red";
        // ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(hurdleImg, this.x, this.y, this.width, this.height)
    }
}

let timer = 0;
let hurdleArr = [];
let animation;


let jumping = false;
document.addEventListener('keydown',function(e){
    if(e.keyCode === 90){
        jumping = true
    }
})

// 충돌 확인
function accident (person, hurdle){
    let xDiffer = hurdle.x - (person.x + person.width)
    let yDiffer = hurdle.y - (person.y + person.height)
    if(xDiffer < -20 && yDiffer < -20) {
        ctx.clearRect(0,0, canvas.width, canvas.height)
        cancelAnimationFrame(animation)
    }
}

let jumpTimer = 0;

function render() {
    animation = requestAnimationFrame(render);
    timer++;
    // 지우기
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (timer % 200 == 0) {
        let hurdle = new Hurdle();
        hurdleArr.push(hurdle);
    }
    hurdleArr.forEach((a, i, o) => {
        // x좌표가 0 미만이면 제거
        if(a.x < 0){
            o.splice(i,1)
            catchMe.textContent++
        }
        a.x-= 1.5;

        accident(person, a)

        a.draw()
    })

    if(jumping == true){
        person.y--;
        jumpTimer++;
    }
    // y좌표 200미만시 내려가지 않음
    if (jumping == false){
        if(person.y < 200)
        person.y++
    }
    if(jumpTimer > 100){
        jumping = false
        jumpTimer = 0
    }
    line.draw()
    person.draw();
}

render();

const reGameStart = function () {
    hurdleArr = []
    window.requestAnimationFrame(render)
}
