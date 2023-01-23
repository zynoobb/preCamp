// 데이터 타입 연산자 실습
// 1+1
// // < 2
// > 1+"만원"
// // < "1만원"
// > 1-"1"
// // < 0
// > "123" == 123
// // true
// > "123" === 123
// // false
// > true && true
// < true
// > false && true
// < false
// > true || false
// < true
// > !false
// < true


const profile = {
    name : "철수",
    age : 12,
    school : "다람쥐 초등학교"
}

if (profile.age>=20) {
    console.log("성인입니다.")
} else if(profile.age>=8){
    console.log("학생입니다.")
} else {
    console.log("어린이입니다.")
}