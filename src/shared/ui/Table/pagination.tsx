import { ChevronFirst, ChevronLast, ChevronLeft, ChevronRight } from "lucide-react";
import { FC } from "react";

import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger, Input, Typography } from '~shared/ui'

export interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {
    gotoPage: (updater: number | ((pageIndex: number) => number)) => void
    previousPage: () => void
    nextPage: () => void
    canNextPage: boolean
    pageCount: number
    _pageSize: number
    pageSize: number
    canPreviousPage: boolean
    _pageIndex: number
    pageOptions: number[]
    setPageSize: (pageSize: number) => void
}

const Pagination: FC<PaginationProps> = ({
    gotoPage,
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
    pageCount,
    _pageIndex,
    pageOptions,
    _pageSize,
    pageSize,
    setPageSize
}) => {
    return (
        <div className="flex items-center justify-between gap-3 mt-2">
            <div className='flex gap-2'>
                <Button onClick={() => gotoPage(0)} disabled={!canPreviousPage} icon={<ChevronFirst />} />
                <Button onClick={() => previousPage()} disabled={!canPreviousPage} icon={<ChevronLeft />} />
                <Button onClick={() => nextPage()} disabled={!canNextPage} icon={<ChevronRight />} />
                <Button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} icon={<ChevronLast />} />
            </div>
            <div className='flex items-center gap-3'>
                <Typography tag='span' className="whitespace-nowrap">
                    Страниц <strong>{_pageIndex + 1} из {pageOptions.length}</strong>
                </Typography>
                <Input
                    labelName='Перейти на страницу:'
                    type="number"
                    variant='dark'
                    className='max-w-[60px] appearance-none'
                    value={_pageIndex + 1}
                    onChange={e => {
                        const page = e.target.value ? Number(e.target.value) - 1 : 0
                        gotoPage(page)
                    }}
                    style={{ width: '100px' }}
                />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className='cursor-pointer whitespace-nowrap'>
                            Показать {_pageSize}
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-30">
                        <DropdownMenuRadioGroup value={_pageIndex.toString()} onValueChange={(value) => setPageSize(Number(value))}>
                            {[pageSize, 20, 30, 40, 50].map(pageSize => (
                                <DropdownMenuRadioItem key={pageSize} value={pageSize.toString()}>
                                    Показать {pageSize}
                                </DropdownMenuRadioItem>
                            ))}
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div >
    )
}

export default Pagination;
