function chai()
{
    console.log("DB connected");
}
chai();

// Immediately Invoked Function Expression (IIFE)

(function iife()
{
    // named iife function
    console.log("Life aint a stable situation to be in... but we move on");
})();

// IIFE is a function that is executed immediately after it is created. It is a design pattern which is also known as a Self-Executing Anonymous Function;

// Sometimes we have problem in our code when we have a lot of global variables and we want to avoid that. We can use IIFE to avoid that.

(() => {
    let username = {
        name: "John Doe",
        age: 25,
        country: "Alabasta"
    }
    console.log(username);
}) ();