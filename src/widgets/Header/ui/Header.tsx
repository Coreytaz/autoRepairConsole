import { Gift, MessageSquare, Settings } from "lucide-react";
import { Bell, Search } from "lucide-react";
import { FC } from "react";

import { Button, Input } from "~shared/ui";

import { DropMenu } from "./DropMenu";

const Header: FC = () => {
    return (
        <header className='container mx-auto flex items-center justify-center pr-3'>
            <div className="max-w-[800px] w-full">
                <Input className="w-full h-[45px]" placeholder="поиск" icon={<Search />} />
            </div>
            <div className="flex gap-6 ml-10">
                <Button variant='ghost' className="bg-[#2D9CDB26] px-2 py-2 rounded-2xl" icon={<Bell className="stroke-[#2D9CDB]" />} />
                <Button variant='ghost' className="bg-[#2D9CDB26] px-2 py-2 rounded-2xl" icon={<MessageSquare className="stroke-[#2D9CDB]" />} />
                <Button variant='ghost' className="bg-[#5E6C9326] px-2 py-2 rounded-2xl" icon={<Gift className="stroke-[#5E6C93]" />} />
                <Button variant='ghost' className="bg-[#FF5B5B26] px-2 py-2 rounded-2xl" icon={<Settings className="stroke-[#FF5B5B]" />} />
            </div>
            <div className="ml-10 border-l border-[#D0D6DE] pl-3">
                <DropMenu />
            </div>
        </header>
    )
}

export default Header;
