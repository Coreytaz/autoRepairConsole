

import { StepsProvider } from 'react-step-builder';

import { AppProps } from '../types';

export const withSteps = (component: Component) => (props: AppProps) => {
    return <StepsProvider>{component(props)}</StepsProvider>;
};
