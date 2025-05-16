import { useState } from "react";
import MyButton from "./components/MyButton";

export default function App() {
  const [color, setColor] = useState("aquamarine");

  return (
    <>

      <div className="w-full min-h-screen duration-200" style={{ backgroundColor: color }}>

        <div className="flex flex-wrap fixed justify-center bottom-12 inset-x-0 px-4 ">

          <div className="flex flex-wrap justify-center gap-3 shadow-lg rounded-2xl px-3 py-2" style={{ backgroundColor: "white" }}>

            <MyButton
              label="BLUE"
              onClick={() => setColor("blue")}
            />

            <MyButton 
            label="RED"
            onClick={() => setColor("red")}
            />

            <MyButton 
            label="BLACK"
            onClick={() => setColor("black")}
            />


            <MyButton 
            label="YELLOW"
            onClick={() => setColor("yellow")}
            />

            <MyButton 
            label="ORANGE"
            onClick={() => setColor("orange")}
            />

          </div>

        </div>

      </div>

    </>
  )
}
