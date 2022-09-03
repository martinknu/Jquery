
// Common datatypes
// const str = "string"; // string 
// const num = 3; // number
// const flt = 3.14; // Float
// const bol = true; // Bolean
// const list = ["item1", 2 , 3, 3.14 ]; // Array
// const thing = null; // has nothing
// const notDefined = undefined;
// const getAge = function() {return 41};
// const obj = {"Name" : "Martin", "Profession":"Automation engineer" }
// const arr = ["Zero", "one", "Two"];

"use strict"


// Random number generator
// const maxValue = 10;
// let randomNumber = Math.floor(Math.random()* maxValue);
// // console.log(`The number is ${randomNumber}`);
// while(true){

//     let guessedNumber = Number(prompt(`The number is between 0 - ${maxValue}, What is your guess?`));
//         if(guessedNumber === randomNumber){
//             break;
//         }
//         console.log("You guessed wrong, try again !!")
// }
// console.log("Good job you guessed right !!")
// console.log(`The number was ${randomNumber}`);



// document.getElementById("btnRandomChar").addEventListener("click", displayDate);
document.getElementById("btnRandomChar").addEventListener("click", function(){
      
    updatePicture("demo");
     
}, false);
// function displayDate() {
//   document.getElementById("demo").innerHTML = Date();
// }

// function randomNumber() {
//     const randomNum = Math.floor(Math.random() * 87);
//     document.getElementById("demo").innerHTML = randomNum;
//   }



function lookupCharacter(textId) { 
    // Declarations
    const randomNum = Math.ceil(Math.random() * 83);
    const queryString = `https://akabab.github.io/starwars-api/api/id/${randomNum}.json` //https://akabab.github.io/starwars-api/api/id/1.json
    const data = 0;

    console.log(randomNum);
    
    // AJAX Fetch
    fetch(queryString)
        .then(response => response.json())
        .then(data => {
            console.log(`Returned from ajax fetch`);
            console.log(data);

            const persData = data;
            const persPicture  = persData.name;
            const persImg = persData.image;
        
            // console.log(`id to update ${idUpdate}`);
            console.log(`Returned Character ${persData}`);
            console.log(`Returned Name ${persPicture}`);    
            console.log(`Returned image ${persImg}`);  

            document.getElementById(textId).innerText = persPicture;
            document.getElementById("charPic").src = persImg;


        })
    return data;
}


function updatePicture(idUpdate) { 
    // Declarations
    
    lookupCharacter(idUpdate);


}





// const num2 = 10;
// try{
//     // num2 = num2 + 10;
//     functionthatdoesnotexist();
 
// } catch(error) {
//     console.warn(`The error is : ` , error);
// } finally{
//     // Do something here

// }


