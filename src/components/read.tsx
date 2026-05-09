function GridExample() {
    return (
        <div className="flex flex-col text-white">
            <div className="flex">
                <div className='border-2 border-white p-8 w-25 h-25 flex justify-center items-center'></div>
                <div className='border-2 border-white p-8 w-25 h-25 flex justify-center items-center bg-white text-black'>Alive neighbor</div>
                <div className='border-2 border-white p-8 w-25 h-25 flex justify-center items-center'></div>
            </div>
            <div className="flex">
                <div className='border-2 border-white p-8 w-25 h-25 flex justify-center items-center bg-white text-black'>Alive neighbor</div>
                <div className='border-2 border-white p-8 w-25 h-25 flex justify-center items-center'>Cell</div>
                <div className='border-2 border-white p-8 w-25 h-25 flex justify-center items-center bg-white text-black'>Alive neighbor</div>
            </div><div className="flex">
                <div className='border-2 border-white p-8 w-25 h-25 flex justify-center items-center'></div>
                <div className='border-2 border-white p-8 w-25 h-25 flex justify-center items-center'>Dead neighbor</div>
                <div className='border-2 border-white p-8 w-25 h-25 flex justify-center items-center'></div>
            </div>
        </div>
    )
}

interface LinkProps {
    url: string,
    content: string
}

function Link({ url, content }: LinkProps) {
    return (
        <a
            className="unrderline italic text-blue-400 hover:text-blue-700"
            href={url}
        >
            {content}
        </a>
    )
}

export default function Read() {
    return (
        <div className="flex flex-col p-4 gap-5">
            <h1 className="text-5xl">What is this?</h1>
            <p className="text-m">This is 2d cellular automata. Rules are simple, we have finite grid where every cell has 4 neighbors in cross shape and 2 possible states</p>
            <p>*example state</p>
            <GridExample />
            <p className="text-m">Because of that we have 2^4 possible combinations of neighbors (<Link url="https://en.wikipedia.org/wiki/Elementary_cellular_automaton" content="1D example" />)
            , and then every combination have one of two outcomes, which proceeds in 2^2^4 (2^16) outcomes possible for single rule. </p>

            <h1 className="text-5xl">What is rule?</h1>
            <p>If we take our 16 combinations and each of them can have only 2 states, we can say that we have 16 bits.</p>
            <p>We can also say that all states in the combination correspond to a digit, which represents one of the rule's bits</p>
            <p>combination 0110 -&gt; 6 </p>
            <p>rule 567 -&gt; 0000001000110111 </p>
            <p>So we take 6'th bit in rule and combitanion 0110 evaluates to 1!</p>

            <h1 className="text-5xl">How density works?</h1>
            <p>Chance that cell will be alive at the start of simulation</p>
            <p>(Math.Rand() -&gt; 1-density) =&gt; true = alive else false = dead</p>

        </div>
    )
}