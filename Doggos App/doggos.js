// const BREEDS_URL =  "https://dog.ceo/api/breeds/image/random";


// function addDoggo(){

//     fetch(BREEDS_URL)
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(data){
//         console.log(data);
//         const img = document.createElement('img');
//         img.src = data.message;
//         img.alt = "Cute Doggo";


//         document.querySelector(".doggos")
//         .appendChild(img);
//     })

// }

// document.querySelector('.add-doggo').addEventListener("click",addDoggo);

const DOG_BREEDS_URL = "https://dog.ceo/api/breeds/list/all";
const select = document.querySelector(".breeds");

fetch(DOG_BREEDS_URL)
.then(function(response){
    return response.json();
})
.then(function(data){
    const breedsObj = data.message;
    const breedsArray = Object.keys(breedsObj);

    
    for (let index = 0; index < breedsArray.length; index++) {
        const option = document.createElement("option");
        option.value = breedsArray[index];
        option.innerText = breedsArray[index];
        select.appendChild(option);
        
    }
})


select.addEventListener("change",function(event){
    let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`

    getDoggo(url);
})


const img = document.querySelector(".dog-img");
const spinner = document.querySelector(".spinner")

function getDoggo(url){
    spinner.classList.add("show");
    img.classList.remove("show")
    fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            img.src = data.message;
            
        })
}


img.addEventListener("load",function(){
    spinner.classList.remove("show");
            img.classList.add("show");
})