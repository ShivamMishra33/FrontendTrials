

document.getElementById("submit").onclick = function(){
    
    const numberFact = document.getElementById("number-fact")
    const number = document.getElementById("number").value 
    const baseURL = "http://numbersapi.com/"
    numberFact.innerHTML = "Just a sec loading a fact for you....."
    fetch(baseURL+number)
    .then(response => response.text())
    .then(text => numberFact.innerHTML = text)
    

}

