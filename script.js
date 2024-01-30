const TEXT_AREA = document.querySelector("#text-area");

let timer;

/*************************************************************************
 onloadHandler fucntion will check if we have stored any data in the local storage and if we have it will put the data inside the text area

 @return none
***************************************************************************/

function onloadHandler(){

    if(localStorage.getItem("savedText")){
        TEXT_AREA.value = localStorage.getItem("savedText");
    }

}

/**************************************************************************
 saveData function will save the text written in the text area to the local storage 

 @return none
***************************************************************************/

function saveData(){

    localStorage.setItem("savedText",TEXT_AREA.value);
}

document.addEventListener("DOMContentLoaded",onloadHandler);
TEXT_AREA.addEventListener("keyup",saveData);