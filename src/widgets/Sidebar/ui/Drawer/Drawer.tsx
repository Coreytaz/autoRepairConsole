import { FC, ReactNode, useEffect, useMemo, useState } from 'react';
import { Link, matchPath } from 'react-router-dom';
import cn from 'clsx'

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
                <button
                    className={cn(`font-sans text-lg font-medium flex cursor-pointer items-center gap-4 rounded-lg px-4 py-2 w-[260px]`, {
                        'text-primary bg-primaryLight': selected,
                        'text-secondary bg-transparent': !selected
                    })}
                >
                    <span className={cn("", {
                        '[&>svg]:stroke-primary': selected,
                        '[&>svg]:stroke-secondary': !selected
                    })}>{Icon}</span>
                    {title}
                </button>
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
