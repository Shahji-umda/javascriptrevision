const max = prompt("Enter the max No.");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number");

while (true) {
    if (guess == "quit") {
        console.log("user quit");
        break;
    }
    if (guess == random) {
        console.log("you are right!!!! congrates!!!! random number was", random);
        break;
    }
    else if (guess <= random) {
        guess = prompt("your guess was too small !! please try again!! ");
    }
    else {
        guess = prompt("your guess was too large !! please try again!!!");
    }

}
