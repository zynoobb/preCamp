// 최댓값
Math.max()
// 최솟값
Math.min()
// 0~1 사이 랜덤수
Math.random
// 반올림 = 3
Math.round(3.14)
// 올림 = 4
Math.ceil(3.14)
// 버림 = 3 
Math.floor(3.14)


// 랜덤수 만드는 과정
// padStart = 자릿수가 6자리가 아니라면 0을 추가하라는 의미
String (Math.floor(Math.random()*1000000)).padStart(6,"0")