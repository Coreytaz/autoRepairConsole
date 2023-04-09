/* eslint-disable react/jsx-key */
import { Column, useFilters, useGlobalFilter, usePagination, useSortBy, useTable } from 'react-table'
import { VariantProps, cva } from "class-variance-authority"

import React, { ForwardedRef } from 'react'

import { ArrowDown, ArrowUp, ChevronFirst, ChevronLast, ChevronLeft, ChevronRight } from 'lucide-react'

import { cn } from "~shared/lib"

import { Button, Input, Typography } from '~shared/ui'

import { GlobalFilter } from './globalFilter'

const tableVariants = cva(
  "w-full text-base font-medium text-secondary overflow-x-auto border-separate border-spacing-y-[8px]"
)

export interface TableProps<T, D>
  extends React.TableHTMLAttributes<HTMLTableElement>,
  VariantProps<typeof tableVariants> {
  pageIndex?: number
  pageSize?: number
  isSearch?: boolean
  isPagination?: boolean
  columns: T
  data: D
}



const Table = React.forwardRef(<T extends readonly Column<{}>[], D extends readonly {}[]>({ className, columns, data, pageIndex = 0, isPagination, pageSize = 10, isSearch, ...props }: TableProps<T, D>, ref: ForwardedRef<HTMLTableElement>) => {

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    setGlobalFilter,
    preGlobalFilteredRows,
    state: { globalFilter, pageIndex: _pageIndex }
  } = useTable({
    columns,
    data,
    initialState: { pageIndex, pageSize }
  }, useFilters, useGlobalFilter, useSortBy, usePagination)


  return (
    <>
      {isSearch ? <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        setGlobalFilter={setGlobalFilter}
        globalFilter={globalFilter}
      /> : null}
      <table {...getTableProps()} className={cn(tableVariants({ className }))} ref={ref} {...props}>
        <thead className="text-xl text-center font-bold text-primary bg-primaryLight rounded-2xl shadow-md">
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, i) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())} className={cn("px-5 py-2", {
                  'rounded-r-2xl': i === headerGroup.headers.length - 1,
                  'rounded-l-2xl': i === 0
                })}>{column.render('Header')}
                  {column.isSorted
                    ? column.isSortedDesc
                      ? <ArrowUp className='inline align-text-bottom' />
                      : <ArrowDown className='inline align-text-bottom' />
                    : ''}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className=''>
          {page.map((row, i) => {
            prepareRow(row)

            return (
              <tr  {...row.getRowProps()} className={cn("rounded-2xl shadow-md text-center", {
                'bg-gray-200': i % 2 === 1
              })}>
                {row.cells.map((cell, i) => {
                  return <td {...cell.getCellProps()} className={cn("px-5 py-2", {
                    'rounded-r-2xl': i === row.cells.length - 1,
                    'rounded-l-2xl': i === 0
                  })}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      {isPagination ? <div className="flex items-center justify-between gap-3 mt-2">
        <div className='flex gap-2'>
          <Button onClick={() => gotoPage(0)} disabled={!canPreviousPage} icon={<ChevronFirst />} />
          <Button onClick={() => previousPage()} disabled={!canPreviousPage} icon={<ChevronLeft />} />
          <Button onClick={() => nextPage()} disabled={!canNextPage} icon={<ChevronRight />} />
          <Button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} icon={<ChevronLast />} />
        </div>
        <div className='flex items-center gap-2'>
          <Typography tag='span'>
            Страниц{' '}
            <strong>
              {_pageIndex + 1} из {pageOptions.length}
            </strong>{' '}
          </Typography>
          <Input
            label='Перейти на страницу:'
            type="number"
            className='max-w-[60px] appearance-none'
            defaultValue={_pageIndex + 1}
            value={_pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
          <select
            value={_pageIndex}
            onChange={e => {
              setPageSize(Number(e.target.value))
            }}
          >
            {[10, 20, 30, 40, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                Показать {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div > : null
      }
    </>
  )
})

export default Table
