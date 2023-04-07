import React from 'react';
import * as Label from '@radix-ui/react-label';

const LabelDemo2 = () => (
  <div className="flex flex-wrap items-center gap-[15px] px-5">
    <Label.Root className="text-[15px] font-medium leading-[35px] text-gray-700" htmlFor="firstName">
      ФИО
    </Label.Root>
    <input
      className="bg-gray-200 shadow-blackA9 inline-flex h-[30px] w-[340px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[13px] leading-none text-slate-400 shadow-[0_0_0_0px] outline-none focus:shadow-[0_0_0_0px_black] selection:color-white selection:bg-white"
      type="text"
      id="inputText"
      defaultValue="печатать..."
    />
  </div>
);

export default LabelDemo2;
