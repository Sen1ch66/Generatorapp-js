const genBtn = document.querySelector(".generate");
const mainSec = document.querySelector(".mainContainer-passwordArea")
genBtn.addEventListener("click", gen);
function gen() {
    try {
        const inputVal = document.querySelector("#password").value;
        let highReg = document.querySelector("#highReg").checked;
        let LowReg = document.querySelector("#LowReg").checked;
        let nums = document.querySelector("#nums").checked;
        nums ? nums = 'on' : nums = 'off';
        LowReg ? LowReg = 'on' : LowReg = 'off';
        highReg ? highReg = 'on' : highReg = 'off';
        if (inputVal < 5 || inputVal > 20) {
            alert("Недоступна Довжина")
        } else if (!highReg && !LowReg && !nums) {
            alert("Виберіть регістр")
        } else {
            fetch(`https://www.random.org/strings/?num=1&len=${inputVal}&digits=${nums}&upperalpha=${highReg}&loweralpha=${LowReg}&unique=on&format=plain&rnd=new`)
                .then(response => response.text())
                .then(response => {
                    const showResult = document.createElement("p")
                    showResult.textContent = 'Пароль: ' + response;
                    showResult.classList.add("fetchPassword")
                    mainSec.appendChild(showResult);
                });
        }
    }
    catch(e){
        console.log(e)
    }
}
