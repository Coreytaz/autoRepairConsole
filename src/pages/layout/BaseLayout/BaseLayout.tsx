import { FC } from 'react';
import { Outlet } from 'react-router-dom';

export interface BaseLayoutProps extends Partial<ComponentWithChildren> { }

export const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
    return (
        <>
            {children}
            < Outlet />
        </>
    );
};
