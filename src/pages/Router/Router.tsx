import { Route, Routes, useLocation } from 'react-router-dom';

import { lazy } from 'react';

import { RoutesUrls } from '~shared/lib/router';
import { BaseLayout } from '~pages/layout';

const IndexPage = lazy(() => import('~pages/IndexPage'));
const HistoryOrderPage = lazy(() => import('~pages/HistoryOrder'));
const EmployeesListPage = lazy(() => import('~pages/employeesList'));
const CreateWorkOrder = lazy(() => import('~pages/createWorkOrder'));

export const Router = () => {
    const location = useLocation();

    return (
        <Routes location={location}>
            <Route path={RoutesUrls.root} element={<BaseLayout />}>
                <Route index element={<IndexPage />} />
                <Route path={RoutesUrls.CreateWorkOrder} element={<CreateWorkOrder />} />
                <Route path={RoutesUrls.Employees} element={<EmployeesListPage />} />
                <Route path={RoutesUrls.OrderStatus} element={<h1>Страница не найдена</h1>} />
                <Route path={RoutesUrls.historyOrder} element={<HistoryOrderPage />} />
            </Route>

            <Route path="*" element={<h1>Страница не найдена</h1>} />
        </Routes>
    );
};
