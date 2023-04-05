import { Route, Routes, useLocation } from 'react-router-dom';

import IndexPage from '../IndexPage';

export const Router = () => {
    const location = useLocation();

    return (
        <Routes location={location}>
            <Route path="/" element={<IndexPage />} />
        </Routes>
    );
};
