let count = 0;
let btnInc = document.getElementById('btn-inc');
let btnDec = document.getElementById('btn-dec');
let btnRes = document.getElementById('btn-res');
let display = document.getElementById('display');
let incValue = document.getElementById('inc-value');
let inc = 1;





incValue.innerHTML = inc;

display.innerHTML = count;



btnInc.addEventListener('click', function(){

    display.innerHTML = count += inc;
   
});



btnDec.addEventListener('click', function(){

    // prevent the counter going in negative value
    if(inc <= count) {
        display.innerHTML = count -= inc;
    }
    
});


btnRes.addEventListener('click', function(){
    display.innerHTML = 0;
    count = 0;
});



var slider = document.getElementById("myRange");
var output = document.getElementById("demo");



slider.oninput = function() {
    inc = parseInt(this.value);
    incValue.innerHTML = this.value;
}