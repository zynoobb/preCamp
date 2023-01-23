import {students} from './data.js'
console.log(students)

let memberList = document.querySelector("#member_list");
let arr = new Array();
class member {
    constructor(name, korean, math, english) {
        this.name = name;
        this.korean = korean;
        this.math = math; 
        this.english = english 
    }
}

for(let i = 0; i<arr.length ; i++){

}

let orangutan = new member('오랑우탄', 33, '90')

arr.push(orangutan)
arr.push(new member("이지놓", "90", "90", "90"));
arr.push(new member("이진호", "90", "90", "90"));
arr.push(new member("이감자", "90", "90", "90"));
arr.push(new member("이고구마", "90", "90", "90"));
arr.push(new member("이호박", "90", "90", "90"));
arr.push(new member("이메주", "90", "90", "90"));

const render = function (students) {
    if(students) {
        for(let i=0; i<students.length ; i++){
            arr.push(students[i])
        }
    }

    for (let i = 0; i < arr.length; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add('form')
        let nameSpan = document.createElement("span");
        let mathSpan = document.createElement("span");
        let english = document.createElement("span");
        
        nameSpan.textContent = `이름 : ${arr[i].name}`
        mathSpan.textContent = `국어 : ${arr[i].korean}`
        english.textContent = `수학 : ${arr[i].math}`

        // append는 appendChild와 달리 여러 요소를 한번에 넣을 수 있음 
        // append는 리턴값 X, appendChild는 리턴값 O
        newDiv.append(nameSpan,mathSpan,english)
        // newDiv.append(nameSpan)
        // newDiv.appendChild(mathSpan)
        // newDiv.appendChild(english)
        memberList.appendChild(newDiv)
    }
};

render(students)