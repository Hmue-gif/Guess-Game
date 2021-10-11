
var m1 = document.getElementById("mes-1");
var m2 = document.getElementById("mes-2");
var m3 = document.getElementById("mes-3");

var ans = Math.floor(Math.random()*50)+1;
var no_of_guess = 0;
var guess_number = [];

function play(){
    var user_guess =document.getElementById("guess_value").value;

    if(user_guess < 1 || user_guess > 20){
        alert("Enter the number between 1 and 20")
    }
    else{
        guess_number.push(user_guess);
        no_of_guess+=1;

            if(user_guess < ans){
                m1.textContent = "Guess number is low";
                m2.textContent = "No of Guess :" + no_of_guess;
                m3.textContent = "Guessed numbers are: " + guess_number;
            }
            else if(user_guess > ans){
                m1.textContent = "Guess number is high";
                m2.textContent = "No of Guess :" + no_of_guess;
                m3.textContent = "Guessed numbers are: " + guess_number;
            }
            else if(user_guess = ans){
                m1.textContent = "Congratulation You Win!!";
                m2.textContent = "The number was :" + ans;
                m3.textContent = "You guessed it in " + guess_number + " guesses";
            }
        }
    }