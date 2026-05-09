import { useState } from "react"
import Fireflies from "./components/fireflies"
import Input from "./components/input";

function App() {

  const [ruleNumber, setRuleNumber] = useState<number>(9150);
  const [pixelSize, setPixelSize] = useState<number>(10);

  function setRule(input:string){
    setRuleNumber(Number(input))
  }

  function setSize(input:string){
    setPixelSize(Number(input));
  }

  const interesting_rules = [9150,6]

  return (
    <div className="relative w-dvw h-dvh">

      <div className="text-gray-50">
        <Input placeHolder="Rule number" onChange={setRule} value={ruleNumber.toString()}/>
        <Input placeHolder="Pixel size" onChange={setSize} value={pixelSize.toString()} type='range' min={5} max={100} step={1}/>
        <p>current rule:{ruleNumber}</p>
        <p>cell size:{pixelSize}</p>
      </div>

      <Fireflies
      pixel_size={pixelSize}
      rule_number={ruleNumber}
      className="absolute top-0 left-0 w-full h-full z-[-1]"/>   
    </div >
  )
}

export default App
