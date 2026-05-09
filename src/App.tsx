import { useState, type SetStateAction } from "react"
import Fireflies from "./components/fireflies"
import Input from "./components/input";

function App() {

  const [ruleNumber, setRuleNumber] = useState<number>(12634);
  const [pixelSize, setPixelSize] = useState<number>(10);
  const [density, setDensity] = useState<number>(0.5);

  function setFun(
    setState: React.Dispatch<SetStateAction<number>>
  ) {
    return (input: string) => {
      setState(Number(input));
    };
  }

  const interesting_presets = [
    {
      rule: 9150,
      density: 0.5
    },
    {
      rule: 6,
      density: 0.5
    },
    {
      rule: 12634,
      density: 1
    },
    {
      rule: 41401,
      density: 0.5
    },
    {
      rule: 19907,
      density: 1
    },
    {
      rule: 18523,
      density: 0.5
    },
    {
      rule: 33112,
      density: 0.5,
    },
    {
      rule:  63157,
      density: 0.5
    },
    {
      rule:50587,
      density: 1,
    },
    {
      rule: 47460,
      density: 0.5
    },
    {
      rule: 47464,
      density: 0.5
    },
    {
      rule: 47512,
      density: 0.9
    }
  ]

  return (
    <div className="relative w-dvw h-dvh">

      <div className="text-gray-50">
        <Input placeHolder="Rule number" onChange={setFun(setRuleNumber)} value={ruleNumber.toString()} />
        <Input placeHolder="Pixel size" onChange={setFun(setPixelSize)} value={pixelSize.toString()} type='range' min={4} max={100} step={1} />
        <Input placeHolder="Pixel size" onChange={setFun(setDensity)} value={density.toString()} type='range' min={0} max={1} step={0.05} />
        <p>current rule:{ruleNumber}</p>
        <p>cell size:{pixelSize}</p>
        <p>density:{density}</p>
      </div>

      <Fireflies
        pixel_size={pixelSize}
        rule_number={ruleNumber}
        density={density}
        className="absolute top-0 left-0 w-full h-full z-[-1]" />
    </div >
  )
}

export default App
