const mainDiv = document.querySelector("#container")
try {
    const startBtn = document.querySelector(".generate")
    startBtn.addEventListener("click", generate)
}
catch(e){
    console.log(`Помилка ${e.name} бо ${e.message}`)
}
function generate() {
    try {
        const numOfMembers = document.querySelector("#num").value;
        const numOfWinners = document.querySelector("#num2").value;
        fetch(`http://www.random.org/integers/?num=${numOfWinners}&min=${numOfWinners}&max=${numOfMembers}&col=1&base=10&format=plain&rnd=yes`)
        .then(res => res.text())
        .then(res => {
            console.log(res)
            const winRes = document.createElement("p");
            winRes.classList.add("fetchPassword");
            winRes.textContent = "Номера переможців: " + res;
            mainDiv.appendChild(winRes)
        })
    }
    catch (e) {
        console.log(e)
    }
}


