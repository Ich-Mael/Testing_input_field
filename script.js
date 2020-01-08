// jshint esversion: 6

const input_1 = document.querySelector("#field_1");
const input_2 = document.querySelector("#field_2");
const submit_1 = document.querySelector(".submit-1");
const submit_2 = document.querySelector(".submit-2");

function tenAlphabetOnly(e){
    var letters = /^[A-Za-z]+$/;

    if((e.value.match(letters)) && (e.value.length <= 10))
    {
        alert('Your name have accepted : you can try another');
        return true;
    }
    else
    {
        alert('Please input alphabet characters only. Maximum characters = 10');
        return false;
    }
}

function tenNumericOnly(e){
    var numbers = /^\d+/  ;

    if(!e.value.match(numbers) || (e.value.length >10 )){
   
        alert("Please only enter numeric characters! (Allowed input:0-9) Maximum digits = 10 .");
    }
}


submit_1.addEventListener("click", ()=>{
    tenNumericOnly(input_1);
});

submit_2.addEventListener("click", ()=>{
    tenAlphabetOnly(input_2); 

});
