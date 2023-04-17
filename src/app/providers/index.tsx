import compose from 'compose-function';

import { withSuspense } from './withSuspense';
import { withRouter } from './withRouter';
import { withSteps } from './withSteps';

export const withProviders = compose<any>(
    withRouter,
    withSuspense,
    withSteps
);
