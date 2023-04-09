import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '~widgets/Header';
import { Sidebar } from '~widgets/Sidebar';






export interface BaseLayoutProps extends Partial<ComponentWithChildren> { }

export const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
    return (
        <div className='grid grid-cols-[310px_1fr] grid-rows-[75px_1fr] min-h-screen gap-x-8'>
            <Sidebar className='bg-white row-span-2 col-span-1' />
            <Header />
            <main>
                {children}
                <Outlet />
            </main>
        </div>
    );
};
