let classmates = [
    { name: "철수", age: 13, school: "다람쥐초등학교"},
    { name: "영희", age: 8, school: "공룡초등학교"},
    { name: "훈이", age: 11, school: "거북이초등학교"},
];

// console.log(classmates.length);
// console.log(classmates[0].school);
// console.log(classmates[0].age);

let forMoon = () => {
    let nameArray = []
    nameArray;
    for(let i=0;i<classmates.length;i++){
        nameArray.push(classmates[i].name)
    }
    console.log("for문",nameArray)
}
forMoon()

let mapFn = classmates.map((value,index,array)=>`서울 ${value.school}`)
console.log("map",mapFn)
console.log(``)
let mapFn1 = classmates.map((value,index,array)=> value.name)
console.log("map1",mapFn1)


console.log(mapFn1[2])