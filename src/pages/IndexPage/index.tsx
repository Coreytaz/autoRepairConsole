import { FC, useState } from "react";

import viteLogo from '~assets/vite.svg'
import reactLogo from '~assets/react.svg'





const IndexPage: FC = () => {
    const [count, setCount] = useState(0)

    return (
        <div className="container mx-auto">
            <div>
                <h1 className="bg-green-100">
                    Hello world!
                </h1>
                <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank" rel="noreferrer">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>

           
        </div>
    )
}

export default IndexPage
