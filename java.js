'use strict';
const url='https://api.funtranslations.com/translate/emoji.json';
var answer= document.getElementById("output");
var userText = document.getElementById("inputarea").value ;

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
    answer.innerHTML = result.contents.translated;
  }
  

function display(){   

      translate(userText);
}