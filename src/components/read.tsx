function GridExample() {
    return (
        <div className="flex flex-col text-white">
            <div className="flex">
                <div className='border-2 border-white p-8 w-25 h-25 flex justify-center items-center'></div>
                <div className='border-2 border-white p-8 w-25 h-25 flex justify-center items-center bg-white text-black'>Alive neighbour</div>
                <div className='border-2 border-white p-8 w-25 h-25 flex justify-center items-center'></div>
            </div>
            <div className="flex">
                <div className='border-2 border-white p-8 w-25 h-25 flex justify-center items-center bg-white text-black'>Alive neighbour</div>
                <div className='border-2 border-white p-8 w-25 h-25 flex justify-center items-center'>Cell</div>
                <div className='border-2 border-white p-8 w-25 h-25 flex justify-center items-center bg-white text-black'>Alive neighbour</div>
            </div><div className="flex">
                <div className='border-2 border-white p-8 w-25 h-25 flex justify-center items-center'></div>
                <div className='border-2 border-white p-8 w-25 h-25 flex justify-center items-center'>Dead neighbour</div>
                <div className='border-2 border-white p-8 w-25 h-25 flex justify-center items-center'></div>
            </div>
        </div>
    )
}

export default function Read() {
    return (
        <div className="flex flex-col p-4 gap-5">
            <h1 className="text-5xl">What is this?</h1>
            <p>This is 2d cellular automata. Rules are simple, we have finite grid where every cell has 4 neighbours in cross form and 2 states</p>
            <p>example state</p>
            <GridExample />
        </div>
    )
}