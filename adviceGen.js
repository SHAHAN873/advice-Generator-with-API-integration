let adviceNum = document.querySelector("#adviceIdNo")
let adviceBody = document.querySelector("#advice")
let btn = document.querySelector("#btn")
let btnDiv = document.querySelector("#btnDiv")
function randomGen(){
    fetch("https://api.adviceslip.com/advice").then(
        response => {
             response.json()
        }
    ).then(
        advicedata =>{
            const adviceId = advicedata.slip.id
            const advice = advicedata.slip.advice
            adviceNum.innerHTML = adviceId
            adviceBody.innerHTML = `<p>"${advice}"</p>`
        }
    ).catch(err=>{
        console.log("error")
    })
}
btnDiv.addEventListener("click",()=>{
    randomGen()
})