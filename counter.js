let count = document.getElementById("count");
let counter = 0;
function increase(){
    counter++;
    count.textContent = counter;
    check();
}

function reset(){
    counter = 0;
    count.textContent = counter;
    check();
}


function decrease(){
    counter--;
    count.textContent = counter;
    check();
}

function check(){
    if(counter > 0){
        count.style.color = "green";
    }
    else if(counter === 0){
        count.style.color = "black";
    }
    else{
        count.style.color = "red";
    }
}