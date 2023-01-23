const startWord = () => {
    let myword = document.getElementById("myword").value
    // tag 사이의 내용을 가져와야 하기 때문에 innerText 사용
    let word = document.getElementById("word").innerText

    // 제시어의 마지막 글자를 가져옴
    // word = '코끼리'라면, word.length = 3 이며, -1 을 하면 2가 됨
    // [코끼리]에서, word[2] = "리"를 의미함
    let lastWord = word[word.length - 1]
    let firstWord = myword[0]

    if(lastWord === firstWord){
        // 정답일 때
        document.getElementById("result").innerText = "정답입니다!"
        document.getElementById("word").innerText = myword
        document.getElementById("myword").value = ""
    } else {
        // 오답일 때
        document.getElementById("result").innerText = "땡"
        document.getElementById("myword").value = ""
    }
}


// 랜덤 로또 1
// function randomLotto () {
//     function lottoRender () {
//         return Math.floor((Math.random()*45)+1);
//     }
//     document.getElementById("lotto_num1").innerText = lottoRender();
//     document.getElementById("lotto_num2").innerText = lottoRender();
//     document.getElementById("lotto_num3").innerText = lottoRender();
//     document.getElementById("lotto_num4").innerText = lottoRender();
//     document.getElementById("lotto_num5").innerText = lottoRender();
//     document.getElementById("lotto_num6").innerText = lottoRender();    
//     console.log("눌림")
// }

// 랜덤 로또 2
function randomLotto () {
    let resultHTML =''
    function lottoRender () {
        return Math.floor((Math.random()*45)+1);
    }
    for(i=0;i<6;i++){
        resultHTML += `<div>${lottoRender()}</div>`
    }
    let lottoNum = document.getElementById("lotto_nums");
    lottoNum.innerHTML = resultHTML;
    console.log(resultHTML)
}

