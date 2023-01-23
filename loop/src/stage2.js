import students from '../data/data.js';
import { calculateAverage } from './stage1.js';
// ! 위의 코드는 수정하지 마세요 ! //

// Stage 2

// designateGrade 함수에서는 students라는 매개변수로 data.js 파일 안에 있는 배열 데이터를 그대로 받아오게 됩니다.
// 이후 calculateAverage(stage1.js)의 전달인자로 해당 데이터를 넘겨준 뒤, 그 리턴값을 score라는 상수 변수에 담게 됩니다.

// 완성된 calculateAverage 함수에서 건네준 각 학생의 평균 점수를 기반으로
// 모든 학생에게 알맞은 등급을 지정 후 return 하도록 함수를 완성해 주세요.

// return 되는 데이터는 반드시 아래와 같은 키, 형태를 가진 배열이어야 합니다.
// return => [ { name: "이정훈", grade: "B" }, ..., { name: "최다슬", grade: "C" } ]
// return된 데이터는 render.js 파일로 전달되며 화면에 뿌려집니다.
// 작성된 로직에 정상적으로 적용될 수 있도록 각 객체의 key를 반드시 위와 같이 맞춰주세요.

// 등급 기준 ( 'A' : 100 ~ 91, 'B' : 90 ~ 81, 'C' : 80 ~ 71, 'D' : 70 ~ 61, 'F' : 60 ~ )

export const designateGrade = function (students) {
    // 여기에서 작업하세요.
    const score = calculateAverage(students);
    // 점수 매기기
    console.log(score, "score")
    let rank = []
    for(let i = 0; i<score.length; i++){
        if(score[i].score >= 91){
            rank.push("A")
        } else if(score[i].score >= 81){
            rank.push("B")
        } else if(score[i].score >= 71){
            rank.push("C")
        } else if(score[i].score >= 61){
            rank.push("D")
        } else {
            rank.push("F")
        }
    }
    console.log(rank, "rank")

    let result = []
    for(let i=0;i<score.length;i++){
        result[i] = {name : score[i].name, grade : rank[i]}
    }
    console.log(result, "result")
return result
    
    
};


