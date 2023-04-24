import { Suspense } from 'react';

import { Loading } from '~shared/ui';

import { AppProps } from '../types';

export const withSuspense = (component: Component) => (props: AppProps) => {
    return <Suspense fallback={<Loading />}>{component(props)}</Suspense>;
}
