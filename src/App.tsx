import React, { useState, type SetStateAction } from "react"
import Fireflies from "./components/fireflies"
import Input from "./components/input";
import Select, { type Preset } from "./components/select";
import { interesting_presets } from "./consts/presets";

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

  function selectPreset(e: Preset) {
    setRuleNumber(e.rule)
    setDensity(e.density)
  }

  return (
    <div className="relative w-dvw h-dvh">

      <div className="text-gray-50">
        <label>
          Select rule:{" "}
          <Input placeHolder="Rule number" onChange={setFun(setRuleNumber)} value={ruleNumber.toString()} />
        </label>

        <label>
          Cell size: {pixelSize}{" "}
          <Input placeHolder="Pixel size" onChange={setFun(setPixelSize)} value={pixelSize.toString()} type='range' min={4} max={100} step={1} />
        </label>

        <label>
          Density:{density}{" "}
          <Input placeHolder="Density" onChange={setFun(setDensity)} value={density.toString()} type='range' min={0} max={1} step={0.05} />
        </label>

        <label>
          Try preset:{" "}
          <Select options={interesting_presets} onSelect={selectPreset} name="presets" />
        </label>
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
