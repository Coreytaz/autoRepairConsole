import { Route, Routes, useLocation } from 'react-router-dom';

import { lazy } from 'react';

import { RoutesUrls } from '~shared/lib/router';
import { BaseLayout } from '~pages/layout';

const IndexPage = lazy(() => import('~pages/IndexPage'));

export const Router = () => {
    const location = useLocation();

    return (
        <Routes location={location}>
            <Route path={RoutesUrls.root} element={<BaseLayout />}>
                <Route index element={<IndexPage />} />
            </Route>
        </Routes>
    );
};
