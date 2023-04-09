import { FC, ReactNode, useEffect, useMemo, useState } from 'react';
import { Link, matchPath } from 'react-router-dom';

import { Button } from '~shared/ui';

export interface NavItem {
    Icon?: ReactNode;
    title: string;
    path: string;
}

export interface DrawerProps {
    currentPath: string;
    routes: NavItem[];
}

export const Drawer: FC<DrawerProps> = ({ routes, currentPath }) => {
    const initialIndex = useMemo(() => {
        const result = routes.findIndex((item) => checkActiveItem(item.path, currentPath));

        return result !== -1 ? result : 0;
    }, [currentPath, routes]);

    const [activeTabIndex, setActiveTabIndex] = useState(initialIndex);

    useEffect(() => {
        routes.forEach((item, index) => {
            const isActive = checkActiveItem(item.path, currentPath);

            if (isActive && index !== activeTabIndex) {
                setActiveTabIndex(index);
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPath, routes]);

    const renderItem = ({ path, title, Icon }: NavItem, index: number) => {
        const selected = index === activeTabIndex;

        return (
            <Link key={path} to={path}>
                <Button variant='ghost' className='w-[260px]' isActive={selected} icon={Icon}>
                    {title}
                </Button>
            </Link>
        );
    };

    return (
        <>{routes.map(renderItem)}</>
    );
};

function checkActiveItem(itemPath: string, currentPath: string) {
    return matchPath(
        {
            path: currentPath,
            caseSensitive: true,
            end: true,
        },
        itemPath
    );
}
