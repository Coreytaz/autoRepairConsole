import React from 'react';
import * as Label from '@radix-ui/react-label';
import { Search } from "lucide-react"
import { cn } from "~shared/lib"

const LabelDemo1 = () => (
  <div className="flex flex-wrap items-center gap-[15px] px-5">
    <Label.Root className="text-[15px] font-medium leading-[35px] text-gray-700" htmlFor="firstName">
       
    </Label.Root>
    <div className="relative flex items-center text-gray-400 focus-within-gray-600">
    <input
      className="bg-stone-100 shadow-blackA9 inline-flex h-[30px] w-[340px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[13px] leading-none text-slate-400 shadow-[0_0_0_1px_] outline-none focus:shadow-[0_0_0_1px_black] selection:color-white selection:bg-white"
      type="text"
      id="inputText"
      defaultValue="поиск"
    />
    <Search className="w-4 h-4 absolute right-2 "></Search>
    </div>
  </div>
);

export default LabelDemo1;
