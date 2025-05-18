import { useState, useCallback, useRef, useEffect } from "react"

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  // useRef react;
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*_~+-=|;:',.?";

    for (let i = 1; i <= length; i++) {

      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  const copyPasswordToClipboard = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current.focus();
      passwordRef.current.select();
      passwordRef.current.setSelectionRange(0, password.length);
    }
    window.navigator.clipboard.writeText(password);
  }, [password])

  return (
    <>
      <div className="w-full max-w-lg  mx-auto shadow-md rounded-xl px-4 my-8  bg-gray-900 text-2xl">
        <h1 className="text-white text-3xl text-center">Password Generator</h1>
        <div className="flex overflow-hidden rounded-lg mb-4">
          <input type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-white font-mono text-orange-700 my-3 rounded-xl rounded-r-none"
            placeholder="Password"
            readOnly
            ref={passwordRef}

          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-300 text-white px-3 py-1 shrink-0 font-bold  rounded-xl rounded-l-none my-3  "
          >
            copy
          </button>
        </div>

        <div className="flex flex-col md:flex-row text-xl italic gap-x-2 text-amber-700">
          <div className="flex items-center gap-x-1 ">
            <input type="range"
              min={6}
              max={24}
              value={length}
              className="cursor-pointer"
              onChange={(e) => { setLength(e.target.value) }}

            />

            <label htmlFor="length">Length: {length}</label>

          </div>

          <div className="flex items-center gap-x-1 ">

            <input type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);

              }}
            />
            <label htmlFor="numberInput">Numbers</label>

          </div>

          <div className="flex items-center gap-x-1 ">

            <input type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Character</label>

          </div>
        </div>

      </div>
    </>
  )
}

export default App
