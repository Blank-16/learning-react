function Strings() {
    const name = "Blank"
    const repoCount = 50
    console.log(name, repoCount);
    console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

    const gameName = new String("Super Mario Bros");
    console.log(gameName);
    console.log(gameName.__proto__);

    console.log(gameName.length);
    console.log(gameName.toUpperCase());
    console.log(gameName.toLowerCase());
    console.log(gameName);
    console.log(gameName.normalize);

    const newString = gameName.substring(0, 5);
    console.log(newString);

    const newString2 = gameName.slice(-4);
    console.log(newString2);

    const newString3 = "   Blank    ";
    console.log(newString3.trim());
}

function Num_Maths() {
    const score = 100
    const balance = new Number(400)
    console.log(score, balance);
    console.log(balance.toString())
    balance.toString()
    console.log(typeof (balance))
    console.log(balance.toFixed(2))

    const otherNum = 23.456
    console.log(otherNum.toPrecision(4))

    const hundreads = 10000000
    console.log(hundreads.toLocaleString('en-US'))
}

function Maths_num() {
    console.log("Pi: ", Math.PI)
    console.log("E value: ", Math.E)
    console.log('round ', Math.round(2.4))
    console.log('ceil ', Math.ceil(2.4))
    console.log("floor ", Math.floor(2.8))
    console.log("squre root ", Math.sqrt(64))
    console.log("absolute function ", Math.abs(-3))
    console.log("Power ", Math.pow(8, 2))
    console.log("Minimum function ", Math.min(2, 33, 4, 1, 55, 6, 3))
    console.log("Maximum ", Math.max(2, 33, 4, 1, 55, 6, 3))
    console.log("Radnom function ", Math.random())
    console.log(Math.floor((Math.random() * 100) + 1))
    const min = 10
    const max = 20
    console.log(Math.floor(Math.random() * (max - min + 1) + min))
}

function Date_Time() {
    let myDate = new Date()
    console.log(myDate.toString());
    console.log(myDate.toDateString());
    console.log(myDate.toLocaleDateString());
    let myTimeStamp = Date.now()
    let myCreatedDate = new Date("01-14-2024")
    console.log(myTimeStamp)
    console.log(myCreatedDate.getTime())
}

function Arrays() {
    const arr = [1, 2, 3, 4, 5]
    console.log(arr)
    console.log(arr[0])
    console.log(arr[2])
    console.log(arr.length)
    console.log(arr[arr.length - 1])
    console.log(Array.isArray(arr))
    console.log(arr.indexOf(2))
    console.log(arr.indexOf(6))
    console.log(arr.push(6))
    console.log(arr)
    console.log(arr.pop())
    console.log(arr)
    console.log(arr.unshift(0))
    console.log(arr)
    console.log(arr.shift())
    console.log(arr)
    console.log(arr.concat([7, 8, 9]))
    console.log(arr)
    console.log(arr.slice(1, 4))
    console.log(arr)
    console.log(arr.splice(1, 2))
    console.log(arr)
    console.log(arr.reverse())
    console.log(arr)
    console.log(arr.sort())
    console.log(arr)
    console.log(arr.map(x => x * 2))
    console.log(arr)
    console.log(arr.filter(x => x > 2))
    console.log(arr)
    console.log(arr.reduce((acc, x) => acc + x))
    console.log(arr)
    console.log(arr.join(' - '))
    console.log(arr)
    console.log(arr.toString())
    console.log(arr)
    console.log(arr.includes(2))
    console.log(arr.includes(6))
    console.log(arr.indexOf(2) !== -1)
    console.log(arr.indexOf(6) !== -1)
}

function Arrays1() {
    const arr = [1, 2, 3, 4, 5]
    console.log(arr)
    const myHeros = [
        "Iron man",
        "SpiderMan",
        "Black Panther",
        "Captain America",
        "Thor"
    ]
    console.log(myHeros)
    console.log("Length of Myheroes:", myHeros.length)
    // arr.unshift = add element at the start of the array
    // arr.shift = remove element at the start of the array
    // arr.splice = remove element from the array from element to element including the range of elements 
    // arr.slice = copy of the array from elemeent to element excluding the range of elements
    const myFavHeros = [
        "Iron",
        "Spider",
        "Black",
        "Captain",
        "Thor"
    ]
    const mixture = [...arr, ...myFavHeros, ...myHeros]
    console.table(mixture)
    // flat = flat the array and convert it into single array by concatenating all the elements

    let score1 = 100;
    let score2 = 200;
    let score3 = 400;
    let score4 = 500;
    console.log(Array.of(score1, score2, score3, score4));
}

function Objects() {
    const person = {
        name: "Blank",
        age: 30,
        hobbies: ["Music", "Movies", "Sports"],
        address: {
            street: "50 main st",
            city: "Boston",
            state: "MA"
        }
    }
    console.log(person)
    console.log(person.name)
    console.log(person.hobbies[1])
    console.log(person.address.city)

    const { name, age, address: { city } } = person
    console.log(name, age, city)

    person.email = "Blank@example.com";
    console.log(person.email);
    console.log(person)
}

function Objects1() {
    const mySym = Symbol("key1")

    const jsUser = {
        name: "Blank",
        "full name": "Blank 01g",
        age: 30,
        [mySym]: "Value for Symbol",
        email: "blank_01g@gmail.com",
        location: "Tokyo",
        isLoggedIn: false,
        lastLoginDays: [
            'Monday',
            'Staturday'
        ]
    }
    console.log(jsUser)
    console.log(jsUser["full name"])
    console.log(typeof (jsUser[mySym]))
    console.log(jsUser[mySym])

    jsUser.email = "Blank@yahoo.com"
    console.log(jsUser)

    const important = { "important": "value" }

    // Object.freeze(jsUser)

    jsUser.email = "damedame@gmail.com"
    console.log(jsUser)

    jsUser.greetings = function () {
        console.log("Hello this is greeting jsUser")
    }
    console.log(jsUser.greetings())

    jsUser.greeings2 = () => {
        console.log(`Hello Js user, ${this.name}.`)
    }
    console.log(jsUser.greeings2())
}

function Objects2() {
    const steamUser = {}

    steamUser.id = "Blank01g"
    steamUser.name = "Blank"
    steamUser.isLoggedIn = false

    console.table(steamUser);

    // chaining objects 
    const regularUser = {
        email: "this@gmail.com",
        fullName: {
            userFullname: {
                firstName: "Blank",
                middleName: "the",
                lastName: "Hollow"
            }
        }
    }
    console.log(regularUser.fullName.userFullname.firstName)

    const ob1 = {
        1: "a", 2: "b", 3: "c"
    }
    const ob2 = {
        4: "d", 5: "e", 6: "f"
    }
    const ob3 = { ob1, ob2 };
    const ob4 = { ...ob1, ...ob2 };

    const ob5 = Object.assign({}, ob1, ob2);
    console.log(ob3);
    console.log(ob4);
    console.log(ob5);
}

function arrayObjects() {
    const users = [
        {
            id: "dame1",
            email: "1@gamil.com",
        },
        {
            id: "dame2",
            email: "2@gmail.com",
        }
    ]
    console.log(Object.keys(users));
    console.log(Object.values(users));
    console.log();
    console.log(users);
}

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    destructor() {
        console.log(`Hello my name is ${this.name} and my age is ${this.age}`);
    }
    greetings() {
        console.log(`Hello my name is ${this.name} and my age is ${this.age}`);
    }
}

