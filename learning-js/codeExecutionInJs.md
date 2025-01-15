# JavaScript Execution Context
{} -> Global Executation context <- [this]; 
    GEC is exceuted in a thread; 
    JS is single threaded. 
`(() => {})()` -> Functional Executation Context

Eval -> eval executation context 

`{}` ->
    1. Memory creation phase 
    2. Execution phase
    
Everytime we exececute a function we create a new `new variable environment` + `execution thread`; 
    it exists just for the function execution. 
    After execution finishes that `variable environment` is now deleted; 


### Call Stack
    It's a mechanism for the interpreter to basically keep track of it's place in a script that calls upon multiple functions. 
