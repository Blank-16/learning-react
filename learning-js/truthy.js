const userEmail = "Blank@com.ai";

if(userEmail)
{
    console.log("Email is valid", userEmail);
} else {
    console.log("Email is not valid", userEmail);    
}

const FalsyValues = {
    0: false,
    1: null,
    2: undefined,
    3: '',
    4: NaN,
    5: -0,
    6: 0,
    7: 0n,
    8: ""
}

const TruthyValues = {
    0: "0",
    1: 'false',
    2: " ",
    3: [],
    4: {},
    5: function() {}, // empty function   
}

const emptyObject = {};
if(Object.keys(emptyObject).length)
{
    console.log("Object is not empty", emptyObject);
} else {
    console.log("Object is empty", emptyObject);
} 

// false == 0 > true
// false == "" > true
// 0 == '' > true