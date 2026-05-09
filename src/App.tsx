import Fireflies from "./components/fireflies"

function App() {

  return (
    <div className="relative w-dvw h-dvh">

      <div className="text-gray-50">
        Controls are gonna be here ^^
      </div>

      <Fireflies
      pixel_size={10}
      rule_number={1592}
      className="absolute top-0 left-0 w-full h-full z-[-1]"/>   
    </div>
  )
}

export default App
