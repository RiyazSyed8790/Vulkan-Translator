'use strict';
const url='https://api.funtranslations.com/translate/vulcan.json';



/*
let translate = async function(text){
 var data = await fetch(getTranslatedurl(text));
 console.log(data);
 let result = await data.json();
  answer.innerText = result.contents.translated;
}
*/
//a new code:

async function translate(text) {
    const data = await fetch(`${url}?text=${text}`);
    
    const result = await data.json();
    console.log(result);
    var answer= document.getElementById("output");
    answer.innerHTML = result.contents.translated;
  }
  

function display(){   
    var userText = document.getElementById("inputarea").value ;
      translate(userText);
}