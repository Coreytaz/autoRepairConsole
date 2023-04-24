import { FC } from "react"

const Loading: FC = () => {
    return (
        <div className="flex h-screen">
            <div
                className="m-auto h-16 w-16 animate-spin rounded-full border-4 border-solid border-current border-r-transparent text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]">
            </div>
        </div>
    )
}

export { Loading }
