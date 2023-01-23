// 이메일을 마스킹하는 과정
const email = "codecamp@gmail.com"

email.includes("@")
// @를 기준으로 이메일을 쪼갬
email.split("@")
// ["codecamp","gmail.com"]

// 각 영역에 따라 정의
let userMail = email.split("@")[0]
// "codecamp"
let comany = email.split("@")[1]
// "gmail.com"

// 빈 배열 설정 = 마스킹하지 않을 영역을 가져오기 위함
let maskingMail = []
maskingMail.push(userMail.slice(0,4))

// maskingMail = ["c","o","d","e"]
console.log(maskingMail)

// maskingMail = ["c","o","d","e","*","*","*","*"]
maskingMail.push("****")

console.log(maskingMail)

// 여기서 join은 요소를 분리함 
let result = maskingMail.join("") + "@" + comany

// 마스킹된 이메일을 얻을 수 있음 result = code****@gmail.com
console.log(result)