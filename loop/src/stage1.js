/*
 * index.html 페이지가 result.png와 같이 출력되도록
 * data.js 파일 내에 담긴 데이터들을 기반으로
 * stage1.js => stage2.js 순으로 파일을 완성해 주세요.
 */

// Stage 1

// calculateAverage 함수는 designateGrade(stage2.js) 내부에서 전달인자로 넘겨준 데이터를 students라는 매개변수로 받아옵니다.
// students 매개변수는 data.js 안에 있는 배열 데이터를 그대로 받아오게 됩니다.
// 해당 데이터를 기반으로 각 학생의 평균 점수를 구해주세요. 시험을 치룬 과목의 수는 모든 학생이 동일하게 4 과목입니다.

// scoreAverage 배열에 담기는 객체는 각 학생의 이름, 각 학생의 평균 점수를 값으로 가져야 합니다.
// ex) scoreAverage = [ { name : "이정훈", score : 70.5 }, ... ]
// 모든 학생의 정보를 담은 scoreAverage 배열을 return 해주세요. return된 데이터는 stage2.js 파일로 전달됩니다.

export const calculateAverage = function (students) {
    // 여기에서 작업하세요.
    const scoreAverage = [];
    const subject = []
    for(let i = 0 ; i < Object.keys(students[0]).length; i ++){
        subject.push(Object.keys(students[0])[i])
    }
    console.log(subject, 'subject')

    for(let i = 0 ; i < students.length ; i++){
        let sum = []

        for(let key in students[i]){
            if(key !== 'name'){
                sum.push(students[i][key])
            }
        }
        scoreAverage.push({name : students[i].name, score : sum[i]/subject })
    }
    return scoreAverage
};

    // 과목 갯수 가져오기
    // subject = ['korean', 'math', 'english', 'science']
// const subject = [];
//     for (let i = 1; i < Object.keys(students[0]).length; i++) {
//         subject.push(Object.keys(students[0])[i]);
//     }
//     console.log(subject, "subject");

//     // 각 학생들의 합계 구하기
//     let totalArr = [];
//     for(let i=0; i<students.length; i++){
//         let total = 0
//         for(let j=0;j<subject.length; j++){
//             total += students[i][subject[j]]
//         }
//         totalArr.push(total)
//     }
//     console.log(totalArr, "totalArr")

//     let averageArr = []
//     for(let i=0; i<students.length;i++){
//         averageArr.push(totalArr[i] / subject.length)
//         scoreAverage[i] = {name : students[i].name, score : averageArr[i]}
//     }
//     console.log(averageArr, "averageArr")
//     console.log(scoreAverage, "scoreAverage")
    
//     return scoreAverage;