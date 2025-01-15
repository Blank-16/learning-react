const user = {
    username : "Blank",
    price : 100,

    welcomeMessage: function () {
        console.log(`${this.username}, Welcome to your profile!`);
        // we use this to create a reference to the object that is calling the function as in the current context.
        console.log(this);
    }
}

// user.welcomeMessage(); // Blank Welcome to your profile!
// user.username = "John souls";
// user.welcomeMessage(); // John souls Welcome to your profile! 
function damn(){
    console.log(this);
}
// damn();

const chai = () => {
    let username = "blank"
    console.log(this);
}
// chai()

const addTwo = (a, b) => {
    return a+b;
}
// console.log(addTwo(2, 3));

const addTwo_01 = (a, b) => a+b; // if we have only one line of code we can remove the curly braces and the return keyword known as implicit return

