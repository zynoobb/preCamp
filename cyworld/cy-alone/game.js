function enterKey() {
    if(window.event.keyCode === 13){
        console.log("엔터키")
        wordAction()
    }
}
function wordAction() {
    const inputText = document.querySelector("#input_text").value
    const orderText = document.querySelector("#order_text").innerText
    const wordResult = document.querySelector('#word_result')

    const firstWord = inputText[0]
    const lastWord = orderText[orderText.length -1]
    
    if (firstWord == lastWord){
        wordResult.textContent = "정답입니다."
        document.querySelector("#order_text").textContent = inputText
        document.querySelector("#input_text").value = ""
    } else if (inputText == ""){
        wordResult.textContent = "단어를 입력해주세요."
        wordResult.style = "color : red"
    } else {
        wordResult.textContent = "오답입니다."
        wordResult.style = "color : red"
        document.querySelector("#input_text").value = ""
    }
}

function lottoAction() {
    const lottoArr = []
    function lottoRender () {
        for(let i = 0 ; i < 6 ; i++){
            const lottoNum =  String(Math.floor((Math.random()*45)+1)).padStart(2,"0")
            if(lottoArr.includes(lottoNum) == false){
                lottoArr.push(lottoNum)
            } else {
                console.log("중복값 생성되었음")
                i--
            }
        }
    }
    lottoRender()
    
    lottoArr.sort(function(a,b) {
        return a-b;
    })
    // lottoArr.sort((a,b) => a-b)
    const lottoOutput = document.querySelector('#lotto_output')
    const lottoStr = lottoArr.toString()
    const result = lottoStr.replaceAll(",","  ")
    // let result = lottoArr
    lottoOutput.textContent = result
}

