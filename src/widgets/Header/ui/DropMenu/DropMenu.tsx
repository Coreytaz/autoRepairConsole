import { LogOut, User } from "lucide-react"
import { FC } from "react"
import { useNavigate } from "react-router-dom"

import { ViewerUser } from "~entities/viewer"

import { useSignOut } from "~shared/lib/auth"

import { RoutesUrls } from "~shared/lib/router"

import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "~shared/ui"

export const DropMenu: FC = () => {
    const signOut = useSignOut()
    const navigate = useNavigate();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-2 cursor-pointer">
                    <ViewerUser />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Мой аккаунт</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem onClick={() => navigate(RoutesUrls.profile)}>
                        <User className="mr-2 h-4 w-4" />
                        <span>Профиль</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => signOut()}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Выйти</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
