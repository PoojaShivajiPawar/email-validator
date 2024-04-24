Submit.addEventListener("click", async (e) => {
e.preventDefault();
console.log("clicked");

resultContainer.innerHTML = `<h3>Loading....</h3>`

let key = "ema_live_XYlsFccIeRBQdgNWXuZ58FU3FI0mbTXshfK7cyaw";
let email = document.getElementById("email").value
let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`

let res = await fetch(url)
let result = await res.json()
let str = `<h2>Your Results</h2><br/>`
for (key of Object.keys(result)){
    if(result[key] !== ""&& result[key] !== " " ){
        str = str  + 
        `<div>${key} : ${result[key]}</div>`
    }
}
 console.log(str);
 resultContainer.innerHTML = str;

})