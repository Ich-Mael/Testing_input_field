// jshint esversion: 6

const input_1 = document.querySelector("#field_1");
const input_2 = document.querySelector("#field_2");
const submit_1 = document.querySelector(".submit-1");
const submit_2 = document.querySelector(".submit-2");

function tenAlphabetOnly(e){
    var letters = /^[A-Za-z]+$/;

    if((e.match(letters)) && (e.length <= 10))
    {
        return e;
    }
    else
    {
        alert('Please input alphabet characters only. Maximum characters = 10');
        return false;
    }
}

function tenNumericOnly(e){
    var numbers = /^\d+/  ;

    if(!e.match(numbers) || (e.length >10 )){
   
        alert("Please only enter numeric characters! (Allowed input:0-9) Maximum digits = 10 .");
        return false;
    }
    else
    {
        return e;
    }
}


submit_1.addEventListener("click", ()=>{
    tenNumericOnly(input_1.value);
});

submit_2.addEventListener("click", ()=>{
    tenAlphabetOnly(input_2.value); 

});
