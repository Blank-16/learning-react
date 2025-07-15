
learningKeypressDetection();
LearningAboutAnimation();
Stopwatch();


// learning about fetching api and fetch 
async function fetchData(){
    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();


        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Could not fetch error!");
        }
        const data = await response.json();

        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }
    catch(error){
        console.error(data);
    }
}


function Stopwatch(){
    const timeDisplay = document.querySelector("#timeDisplay");
    const startBtn = document.querySelector("#startBtn");
    const pauseBtn = document.querySelector("#pauseBtn");
    const resetBtn = document.querySelector("#resetBtn");

    let startTime = 0;
    let elapsedTime = 0;
    let currentTime = 0;
    let paused = true;
    let intervalId;
    let hrs =0 ;
    let mins = 0;
    let secs = 0;

    startBtn.addEventListener("click", () => {
        if(paused){
            paused = false;
            startTime = Date.now(); - elapsedTime;
            intervalId = setInterval(updateTime, 100);
        }
    });

    pauseBtn.addEventListener("click", () => {
        if(!paused){
            paused = true;
            elapsedTime = Date.now() - startTime;
            clearInterval(intervalId);
        }
    });

    resetBtn.addEventListener("click", () => {
        paused = true;
        startTime = 0;
        elapsedTime = 0;
        hrs =0 ;
        mins = 0;
        secs = 0;
        timeDisplay.textContent = "00:00:00"

    });

    function updateTime(){
        elapsedTime = Date.now() - startTime;

        secs = Math.floor((elapsedTime / 1000) % 60);
        mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
        hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);
         
        secs = pad(secs);
        mins = pad(mins);
        hrs = pad(mins);

        timeDisplay.textContent = `${hrs}:${mins}:${secs}`;

        

        function pad(unit){
            return (("0") + unit).length > 2 ? unit : "0" + unit;
        }
    }
}





let search;
document.getElementById("search").onclick = function() {
    search = document.getElementById("searchText").value;
    //placeholder for searching input from website

}

document.getElementById("login").onclick = function() {
    window.prompt("Enter your username: ")
}

//testing and learning  of variables and math with functions in javascript
function circle(){
let radius;
let circumference;
let area;
const pi = 3.14;

radius = window.prompt("Enter the radius of the circle: ");
radius = Number(radius);
circumference = 2 * pi * radius;
area = pi * radius * radius;
console.log("The circumference of the circle is: " , circumference);
console.log("The area of the circle is: " , area);
console.log("The radius of the circle is: " , radius);
}

let counterValuepresent = 0;

document.getElementById("increaseCounter").onclick = function() {
    counterValuepresent += 1;
    document.getElementById("counterValue").innerHTML = counterValuepresent;
    Audio.play();
}

document.getElementById("decreaseCounter").onclick = function() {
    counterValuepresent -= 1;
    document.getElementById("counterValue").innerHTML = counterValuepresent;
}

document.getElementById("resetCounter").onclick = function() {
    counterValuepresent = 0;
    document.getElementById("counterValue").innerHTML = counterValuepresent;
}


document.getElementById("Submit").onclick = function() {
    let value;
    value = document.getElementById("Temperature").value;
    
    if(document.getElementById("Celsius").checked == true){
        value = (value - 32) * 5/9;
        document.getElementById("result").innerHTML = value;
    }
    else if(document.getElementById("Fahrenheit").checked == true){
        value = (value * 9/5) + 32;
        document.getElementById("result").innerHTML = value;
    }
    else{
        document.getElementById("result").innerHTML = "Please select a unit. ";
    } 
}

//learning about arrow function 

let grades = [100, 39, 89, 90, 88, 44];

grades.sort((x,y) => x - y);
grades.forEach((elements) => console.log(elements));

// shuffling an array using cards

function shuffleArray(){
    let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
    shuffle(cards);

    // console.log(cards);

    cards.forEach(card => console.log(card));

    function shuffle(array){
        let currentIndex = array.length;
        
        while(currentIndex != 0)
            {
                let randomIndex = Math.floor(Math.random() * array.length);
                currentIndex -=1;
                let temp = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temp;
            }
            return array;
    }
}

// learning about classes 

class Player{
    score = 0;
    
    pause(){
        console.log("You paused the game");
    }
    exit(){
        console.log("You exited the game");
    }
}

const player1 = new Player();
const player2 = new Player();
player1.score += 1;
console.log(player1.score);
player1.pause;
player1.exit;

class Student{
    constructor(name, age, gpa, major){
        this.name = name;
        this.age = age;
        this.gpa = gpa;
        this.major = major;
    }
    study(){
        console.log(`${this.name} is studying ${this.major} with a gpa of ${this.gpa}`);
    }
}
const student1 = new Student("Spongebob", 20, 4.9, "Medical");
const student2 = new Student("Patrick", 21, 1.4, "Biohazard");
const student3 = new Student("Sandy", 30, 4.0, "Aerospace");

console.log(student1.name);
console.log(student2.name);
console.log(student3.name);


// what the fuck is static = belongs to the class not the objects
// properties: useful for caches, fixed-configuration 
// methods: utility methods

class Car{
    
    static numberOfCars = 0;
    constructor(model)
    {
        this.model = model;
        this.numberOfCars += 1;
    }

    static startRace(){
        console.log("3..2....1...GO!");
    }
}
const car1 = new Car("Mustang");
const car2 = new Car("Corvette");
const car3 = new Car("Buggati");

console.log(Car.numberOfCars);


// Inheritance in classes works by using the "extend" keyword for example 

class AnimalKingdom{
    alive = true;

    eat(){
        console.log(`This ${this.nname} is eating to stay alive.`);
    }
    
    sleep(){
        console.log(`This ${this.name} is sleeping.`);
    }
    constructor(species){
        this.species = species;
    }
}

class Fish extends AnimalKingdom{
    name = "Fish"
    swim()
    {
        console.log(`This ${this.name} is drowning.`);
    }
}

class Rabbit extends AnimalKingdom{
    name = "Rabbit";

    run(){
        console.log(`This ${this.name} is hopping and running`);
    }
}

class hawk extends AnimalKingdom{
    name = "Hawk";
    fly(){
        console.log(`This ${this.name} is flying at the moment about to dive`);
    }
}
const rabbit = new Rabbit();
const fish = new Fish();
// const hawk = new hawk();

console.log(fish.alive);
fish.eat();
fish.swim();
// hawk.fly();
// hawk.eat();


// super keyword is commonly used to invoke a constructor of the parent class 

class human extends AnimalKingdom{
    name = "Human";
    living(){
        console.log(`${this.name} are still at the top of the food chain in this God forsaken world.`);
    }
    constructor(iq){
        super(species);
        this.iq = iq;
    }
}

// get == binds an object property to a function when that property is accessed 

// set == binds an object property to a fucntion when that property is assigned a value 

class carsss{
    constructor(power){
        this._power = power;  // _power that _ is used to specify that we are using a """protected property""" which shouldnt be messed with.. 
        this._gas = 25;
    }
    get power(){
        return `${this._power}hp`;
    }
    get gas(){
        return `${this._gas}L (${this._gas / 50 * 100}%)`;
    }
    set gas(value){
        if(value > 50){
            value = 50;
        }
        else if(value < 0)
            {
                value = 0;
            }
        this._gas = value;
    }

    // array of obects starts here with a constructor;

    // constructor(model, year, color){
    //     this.model = model;                  // a class can have only one constructor 
    //     this.year = year;
    //     this.color = color;
    // }
    drive(){
        console.log(`You drive the ${this.model}`);
    }


}
let car = new carsss(400);
car.gas = 48;
console.log(car.power);
console.log(car.gas);

//array of objects 
const cars1 = new carsss("Mustang", 2023, "Red");
const cars2 = new carsss("Corvette", 2024, "Blue");
const cars3 = new carsss("Tesla", 2022, "Black");
const cars4 = new carsss("Lambo", 2020, "Yellow");

const cars = [cars1, cars2, cars3, cars4];

console.log(cars[0].model);
console.log(cars[1].model);
console.log(cars[2].model);

cars[0].drive(); // invoking methods from arrays 

function startRace(cars){
    for(const carsss of cars){
        car.drive();
    }
}

// anonymous objects = object without a name not directly referenced 
// involves less syntax and no need for unique names 


// error and throw 

function LearngingError(){
    try
    {
    let x = window.prompt("Enter a No.#");
    x = Number(x);
    
    if(isNaN(x)) throw "That wasn't a number!";
    if(x == "") throw "That was empty";

    console.log(`${x} is a number`);
    }
    catch(error)
    {
        console.log(error);
    }
    finally{
        // usually really good cleanups and always executes at the end 
        console.log("finally{} always exectues...");
    }
}

// we use setTImeout(function, seconds in ms); it just spams messages at them lmao 

// for example 

function learningSetTimeout(){
    setTimeout(firstMsg, 4000);
    setTimeout(secondMsg, 4000);

    function firstMsg(){
        alert(`Buy this course for 500$!`);
    }
    function secondMsg(){
        alert("This is defintiely not a scam please do it!");
    }
    
    // we can use clearTimeout method to clear any setTimeout 's ....... 
}

// setInterval() invokes a fucntion repetedly after set interval of times 

function LeaningSetInterval(){
    let count = 0;
    let max = window.prompt("count up to what #?");
    max = Number(max);
    const myTimer = setInterval(countUp, 1000);
    function countUp(){
        count += 1;
        console.log(count);
        if(count >= max){
            clearInterval(myTimer);
        }
    }
}

// date object 

function LearningDateObject(){
    let date = new Date(); // we start the argument of year then month (occurs from 0 as jan and so on - day - hour -  minutes - seconds - ms
    // can also be done in string format such as Date("January 1, 2023. 00:00:00)")
    // sunday is 0 and so on 
    date = date.toLocaleDateString;
    document.getElementById("Ddate").innerHTML = date;
    // we also have getFullYear();
    // getDate getDay getMonth getHours getMonths getMinutes getSeconds getMilliseconds 
    // and set date as well with setDate and so on for others
    //pretty handy aint it now 
    function formatDate(date){
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();

        return `${month}/${day}/${year}`;
    }
    function formatTime(date)
    {
        let hours  = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let amORpm = hours >= 12 ? "pm" : "am";

        hours = (hours % 12) || 12;

        return `${hours}/${minutes}/${seconds} ${amORpm}`;
    }

    document.getElementById("DDdate").innerHTML = formatDate();
}
LearningDateObject();


function LearningPromises1(){
    // promises : objects that encapsulates the result of an asynchronous operation
    // let asynochronous methods returns values like synchronous methods 

    // learning promise 

    // promises have a state that is 'pending' then 
    // 'fulfilled' or 'rejected' 
    //the result is what can be returned 
    // 2 parts producing & consuming 

    const promise = new Promise((resolve , reject)=> {
        let fileLoaded = true;

        if(fileLoaded){
            resolve("File loaded");
        }
        else{
            reject("File NOT loaded");
        }
    })

    promise.then(value => console.log(value)).catch(error => console.log(error));
// can be function , function expression or => function expression 
}

function LearningPromises2(){
    const wait = time => new Promise( resolve => {
        setTimeout(resolve, time);
    });
    wait(3000).then(() => console.log("Thanks for waiting"));
}

// async = makes a function return a promise 

function LearningAsyncFunction(){
    async function loadFile(){
        let fileLoaded = true;

        if(fileLoaded){
            return "File Loaded";
        }
        else{
            throw "File NoT Loaded";
        }
    }
    loadFile().then(value => console.log(value))
              .catch(error => console.log(error));
}

// await == makes an async function wait for a promise 


function LearningAwait(){
    async function loadFile(){
        let fileLoaded = true;

        if(fileLoaded){
            return "File Loaded";
        }
        else{
            throw "File NoT Loaded";
        }
    }
    // let message = await loadFile(); 
    // await can only be used under a async function 
    async function startProcess(){
        try{
            let  message = await loadFile();
        console.log(message)
        }
        catch(error){
            console.log(error);
        }
        
    }
    startProcess();
}

function justMousethings(){
    element.onclick;            //how mouse input takes up or whatever like that 
    element.onload;         //how mouse input takes up or whatever like that 
    element.onchange;           //how mouse input takes up or whatever like that 
    element.onmouseover;         //how mouse input takes up or whatever like that 
    element.onmouseout;         //how mouse input takes up or whatever like that 
    element.onmousedown;         //how mouse input takes up or whatever like that 
    element.onmouseup;          //how mouse input takes up or whatever like that 
}

function learningKeypressDetection(){
    const myDiv = document.getElementById("myDiv");
    window.addEventListener("keydown", move);
    let x = 0;
    let y = 0;

    function move(event){
        switch(event.key){
            case "ArrowDown":
                y+=5;
                myDiv.style.top = y + "px";
                break;
            case "ArrowRight":
                x+=5;
                myDiv.style.left = x + "px";
                break;
            case "ArrowUp":
                y-=5;
                myDiv.style.top = y + "px";
                break;
            case "ArrowLeft":
                x-=5;
                myDiv.style.left = x + "px";
                break;
            default:
                break;
        }
    }
}

function LearningAboutAnimation(){
    const myButton = document.getElementById("AnimatedDiv");
    myButton.addEventListener("click", begin);
    function begin() {
        let timerId = null;
        let degrees = 0;
    
        timerId = setInterval(frame, 5);
    
        function frame(){
            if(degrees >= 360){
                clearInterval(timerId);
            }
            else{
                degrees += 1;
                myAnimation.style.transform = "rotateZ("+degrees+"deg)";
            }
        }
    }
}

function LearningAboutCanvas(){
    let canvas = document.getElementById("mycanvas");
    let context = canvas.getContext("2d");

    // triangle ☺️😎

    context.beginPath();
    context.strokeStyle = "gray";
    context.fillStyle = "lime";
    context.moveTo(250, 0);
    context.lineTo(0,250);
    context.lineTo(500, 250);
    context.lineTo(250, 0);
    context.stroke();
    context.fill();

    // circle 

    context.beginPath();
    context.fillStyle = "lightblue";
    context.arc(
        /* x, y, z, starting angle, ending angle in rad , counterclockwise */
        250,250, 200, 0 , 1, 2 * Math.PI
    );
    context.fill();

    // drawing text
    context.font = "50px MV Boli";
    context.fillStyle = "grey";
    context.textAlign = "center";

    context.fillText(
        "Nah I'D WIN", canvas.width / 2, canvas.width / 2
    );
}

// learning aboutcookies 

function LearningAboutCookies(){

    setCookie("firstName", "SpongeBob", 365);
    setCookie("lastName", "SqaurePants", 365);
    console.log(getCookie("firstName"));
    console.log(getCookie("lastName"));

    function setCookie(name , value, daysToLive){
        const date = new Date();
        date.setTime(date.getTime() + (daysToLive * 24 * 60));
        let expires = "expires=" + date.toUTCString();
        document.cookie = `${name}=${value}; ${expires}; path=/`;
    }

    function deleteCookie(name){
        setCookie(name, null, null);
    }
    function getCookie(name){
        const  cDecoded = decodeURIComponent(document.cookie);
        const cArray = cDecoded.split("; ");
        let result = null;
        cArray.forEach(element => {
            if(element.indexOf(name) == 0){
                result = element.substring(name.length + 1);
            }
        })
        return result;
    }
}