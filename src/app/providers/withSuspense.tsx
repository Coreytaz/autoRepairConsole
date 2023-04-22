import { FC, Suspense } from 'react';

import { AppProps } from '../types';

export const withSuspense = (component: Component) => (props: AppProps) => {
    return <Suspense fallback={<Loading />}>{component(props)}</Suspense>;
}


const Loading: FC = () => {
    return (
        <div className="flex h-screen">
            <div
                className="m-auto h-16 w-16 animate-spin rounded-full border-4 border-solid border-current border-r-transparent text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]">
            </div>
        </div>
    )
}
