import { X } from "lucide-react";
import React, { useState } from "react";
import { Row } from "react-table";

import { useAsyncDebounce } from "~shared/lib";

import { Button, Input } from '~shared/ui'


export interface TableSearchProps
    extends React.HTMLAttributes<HTMLDivElement> {
    preGlobalFilteredRows: Array<Row>
    setGlobalFilter: (filterValue: any) => void
    globalFilter: any
}

export const GlobalFilter = ({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
}: TableSearchProps) => {
    const count = preGlobalFilteredRows?.length;
    const [value, setValue] = useState(globalFilter);
    const onChange = useAsyncDebounce((value: any) => {
        setGlobalFilter(value || undefined);
    }, 500);

    return (
        <div className='mb-6 mt-6 w-1/3 flex items-center gap-2'>
            <Input variant='dark' id="search" labelName="Поиск:" value={value || ""} onChange={(e) => {
                setValue(e.target.value);
                onChange(e.target.value);
            }} placeholder={`${count} записи...`} />
            {globalFilter?.length > 0 ? <Button icon={<X />} onClick={() => {
                setGlobalFilter(''); setValue('')
            }} /> : null}
        </div>
    );
}
