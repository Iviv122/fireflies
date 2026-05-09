import React, { useState, type SetStateAction } from "react"
import Fireflies from "./components/fireflies"
import Input from "./components/input";
import Select, { type Preset } from "./components/select";
import { interesting_presets } from "./consts/presets";
import { BiSpreadsheet } from "react-icons/bi";

function App() {

  const [isReading, setIsReading] = useState<boolean>(false);

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

  if (isReading) {
    return (
      <div>
        Read here
        <button
          onClick={() => setIsReading(!isReading)}
          className="
      absolute top-0 right-0 z-20 text-gray-50 p-2 text-4xl hover:scale-125
      hover:text-green-500
      transition-all
      duration-100
      ease-in-out"
        >
          <BiSpreadsheet />
        </button>
      </div>

    )

  }

  return (
    <div className="relative w-dvw h-dvh">

      <div className="flex gap-5 text-gray-50">
        <label>
          Select rule:{" "}
          <Input placeHolder="Rule number" onChange={setFun(setRuleNumber)} value={ruleNumber.toString()} />
        </label>

        <label className="flex items-center gap-2">
          <span>Cell size:</span>
          <span className="inline-block w-12 text-right tabular-nums">
            {pixelSize}
          </span>
          <Input
            placeHolder="Pixel size"
            onChange={setFun(setPixelSize)}
            value={pixelSize.toString()}
            type='range'
            min={4}
            max={100}
            step={1}
          />
        </label>
        <label className="flex items-center gap-2">
          <span>Density:</span>
          <span className="inline-block w-16 text-right tabular-nums">
            {density}
          </span>
          <Input
            placeHolder="Density"
            onChange={setFun(setDensity)}
            value={density.toString()}
            type='range'
            min={0}
            max={1}
            step={0.05}
          />
        </label>
        <Select options={interesting_presets} onSelect={selectPreset} name="Interesting samples" />
      </div>

      <button
        onClick={() => setIsReading(!isReading)}
        className="
      absolute top-0 right-0 z-20 text-gray-50 p-2 text-4xl hover:scale-125
      hover:text-green-500
      transition-all
      duration-100
      ease-in-out"
      >
        <BiSpreadsheet />
      </button>


      <Fireflies
        pixel_size={pixelSize}
        rule_number={ruleNumber}
        density={density}
        className="absolute top-0 left-0 w-full h-full z-[-1]" />
    </div >
  )
}

export default App
