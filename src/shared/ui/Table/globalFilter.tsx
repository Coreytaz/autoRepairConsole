import React, { useState } from "react";
import { Row } from "react-table";

import { useAsyncDebounce } from "~shared/lib";

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
        <div className='mb-6 mt-6 flex items-center'>
            <div className="text-xl text-gray-600 mr-6">Поиск:</div>
            <input
                className="h-8 border-2 border-solid border-green-500 outline-none p-4 rounded-lg"
                value={value || ""}
                onChange={(e) => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                }}
                placeholder={`${count} записи...`}
            />
        </div>
    );
}
