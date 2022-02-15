// random pin number find;
function getPin(){
    let pin = Math.round(Math.random()*10000);
    pin = pin + "";
    if(pin.length == 4){
        return pin;
    }
    else{
        return getPin()
    }
}

document.getElementById("generate-btn").addEventListener("click",function(){
    getPin();
    document.getElementById("pin-input").value = getPin();  
});
// key pad value to input;
document.getElementById("key-pad").addEventListener("click",function(e){
    const number = e.target.innerText;
    const typeNumbers = document.getElementById("typed-numbers");
    if(isNaN(number)){
        if(number == "C"){
            typeNumbers.value = "";
        }
        else if(number == "<"){
            typeNumbers.value = typeNumbers.value.slice(0,-1)
        }
    }
    else{
        typeNumbers.value = typeNumbers.value + number;
    }
})
// return to match and unmatching number output;
function verifyPin(){
    const pin = document.getElementById("pin-input").value;
    const typedNumber = document.getElementById("typed-numbers").value;
    const agree = document.getElementById("agree");
    const disAgree = document.getElementById("disagree")
    if(pin == typedNumber){
        if(pin == "" && typedNumber == ""){
            disAgree.style.display = "block";
            disAgree.innerText = "Your value is blank"
            agree.style.display = 'none';
        }else{
            agree.style.display = 'block';
            disAgree.style.display = 'none';
        }
    }else{
        disAgree.style.display = 'block';
        agree.style.display = 'none';
        disAgree.innerText = "❌ Pin Didn't Match, Please try again"
    }
}