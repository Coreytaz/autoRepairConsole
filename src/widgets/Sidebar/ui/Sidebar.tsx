import { FC, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import { HomeIcon, List, ListChecks, Pen, User } from 'lucide-react';

import { RoutesUrls } from '~shared/lib/router';

import { Typography } from '~shared/ui';

import { NavItem } from '../types';

import { Drawer } from './Drawer';

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> { }

export const Sidebar: FC<SidebarProps> = ({ ...props }) => {
    const location = useLocation();

    const routes: NavItem[] = useMemo(
        () => [
            { title: 'Главная', path: RoutesUrls.root, Icon: <HomeIcon /> },
            { title: 'История заказов', path: RoutesUrls.historyOrder, Icon: <List /> },
            { title: 'Создать заказ-наряда', path: RoutesUrls.CreateWorkOrder, Icon: <Pen /> },
            { title: 'Список сотрудников', path: RoutesUrls.Employees, Icon: <User /> },
            { title: 'Статус заказа', path: RoutesUrls.OrderStatus, Icon: <ListChecks /> },
        ],
        []
    );

    return (
        <aside {...props}>
            <div className='mt-8 ml-6 mb-20'>
                <Typography tag='h1'>Автосервис</Typography>
                <Typography tag='span' className='text-[#B9BBBD]'>личный кабинет руководителя</Typography>
            </div>
            <nav className='flex flex-col gap-2 items-start pl-4'>
                <Drawer routes={routes} currentPath={location.pathname} />
            </nav>
        </aside>
    );
};
