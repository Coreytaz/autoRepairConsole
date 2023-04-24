/* eslint-disable react-hooks/rules-of-hooks */
import { Route, Routes, useLocation } from 'react-router-dom';

import { lazy, useEffect, useMemo } from 'react';

import { RoutesUrls } from '~shared/lib/router';
import { BaseLayout } from '~pages/layout';
import { RequireAuth, useAuthHeader, useAuthUser, useIsAuthenticated } from '~shared/lib/auth';
import { setViewer } from '~entities/viewer';

const IndexPage = lazy(() => import('~pages/IndexPage'));
const HistoryOrderPage = lazy(() => import('~pages/HistoryOrder'));
const EmployeesListPage = lazy(() => import('~pages/employeesList'));
const OrderStatus = lazy(() => import('~pages/orderstatus'));
const CreateWorkOrder = lazy(() => import('~pages/createWorkOrder'));
const ProfilePage = lazy(() => import('~pages/profilePage'));
const LoginPage = lazy(() => import('~pages/loginPage'));

const createProtectedElement = (component: JSX.Element) => {
    const isAuth = useIsAuthenticated();
    const getToken = useAuthHeader();
    const auth = useAuthUser()

    const token = useMemo(() => getToken(), [getToken]);
    const data = useMemo(() => auth(), [auth]);

    useEffect(() => {

        if (isAuth() && token) {
            setViewer(data as any);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token, isAuth, data])

    return (<RequireAuth loginPath={RoutesUrls.login}>{component}</RequireAuth>)
};

export const Router = () => {
    const location = useLocation();

    return (
        <Routes location={location}>
            <Route path={RoutesUrls.login} element={<LoginPage />} />

            <Route path={RoutesUrls.root} element={createProtectedElement(<BaseLayout />)}>
                <Route index element={<IndexPage />} />
                <Route path={RoutesUrls.CreateWorkOrder} element={<CreateWorkOrder />} />
                <Route path={RoutesUrls.Employees} element={<EmployeesListPage />} />
                <Route path={RoutesUrls.OrderStatus} element={<OrderStatus />} />
                <Route path={RoutesUrls.historyOrder} element={<HistoryOrderPage />} />
                <Route path={RoutesUrls.profile} element={<ProfilePage />} />
            </Route>

            <Route path="*" element={<h1>Страница не найдена</h1>} />
        </Routes>
    );
};
