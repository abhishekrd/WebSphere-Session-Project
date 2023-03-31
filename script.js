var msg_one = document.getElementById("msg_one");
var msg_two = document.getElementById("msg_two");
var count = 0;
var ans =  Math.floor(Math.random()*100)

function decider(){
    var inputNum = document.getElementById("inputNum").value;
    
    count = count + 1;

    if(inputNum == ans){
        window.alert("CONGRATULATIONS!! You guessed it RIGHT✅");
        msg_one.textContent = "You guessed it rightly after : " + count + " guesses";
        msg_two.textContent = "Congratulations, you have guessed it right!"
    }
    else if(inputNum < ans){
        msg_one.textContent = "Number of guesses : " + count;
        msg_two.textContent = "Please enter a larger Number";
    }
    else{
        msg_one.textContent = "Number of guesses : " + count; 
        msg_two.textContent = "Please enter a smaller number";
    }
}