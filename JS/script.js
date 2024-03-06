const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet= "1234567890";
const symbolSet= "`!@#$%^&*()_+=/><.,";

// Selectors

const passbox= document.getElementById("pass-box");
const totalchar= document.getElementById("total-char");
const upperInput= document.getElementById("upper-case");
const lowerInput= document.getElementById("lower-case");
const numberInput= document.getElementById("numbers");
const symbolInput= document.getElementById("symbols");

const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)];
}

const generatePassword = (password = "") => {
    if(upperInput.checked){
        password += getRandomData(upperSet);
    }
    if(lowerInput.checked){
        password += getRandomData(lowerSet);
    }
    if(numberInput.checked){
        password += getRandomData(numberSet);
    }
    if(symbolInput.checked){
        password += getRandomData(symbolSet);
    }
    console.log(password);
    if(password.length < totalchar.value){
        return generatePassword(password);
    }
    passbox.innerText  = truncateString(password, totalchar.value);
}



document.getElementById("btn").addEventListener("click", function() {
    generatePassword();
});
// generatePassword();


function truncateString(str, num){
    if(str.length > num){
        let subStr = str.substring(0, num);
        return subStr;
    }else{
        return str;
    }
}