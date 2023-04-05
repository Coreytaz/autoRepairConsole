
import { BrowserRouter } from 'react-router-dom';

import { AppProps } from '../types';

export const withRouter = (component: Component) => (props: AppProps) => {
    return <BrowserRouter>{component(props)}</BrowserRouter>;
};
