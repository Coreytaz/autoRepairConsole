import { useMemo, useRef, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { ChevronDown, X } from 'lucide-react';

import { Input } from '~shared/ui/Input';

import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from '~shared/ui';

import { CommonTextFieldProps } from '../types';

export type selectItemProps = {
    title?: string
    value: string
}


export interface BaseRadioFieldProps<T> extends CommonTextFieldProps {
    selectItem: T
}

export const BaseRadioField: React.FC<BaseRadioFieldProps<selectItemProps[]>> = ({
    name,
    onChange,
    defaultValue,
    rules = {},
    required,
    selectItem,
    ...props
}) => {
    const inputRef = useRef<HTMLInputElement>(null!)
    const [search, setSearch] = useState('')
    const { control } = useFormContext();

    const title = (value: string) => {
        return selectItem.filter((item) => item.value === value)[0]?.title
    }

    const filterSelect = useMemo(() => selectItem.filter((item) => item.title?.toLowerCase().includes(search.toLowerCase())), [search, selectItem])

    const computedRequired = useMemo(() => {
        if (!required) {
            return false;
        }

        if (typeof required === 'string') {
            return required;
        }

        return 'Поле, обязательное для заполнения';
    }, [required]);

    return (
        <Controller
            control={control}
            name={name}
            defaultValue={defaultValue || ''}
            render={({ field, fieldState }) => {
                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div className='cursor-pointer whitespace-nowrap w-full'>
                                <Input
                                    labelName="Год выпуска"
                                    error={!!fieldState.error}
                                    helperText={fieldState?.error?.message}
                                    {...props}
                                    value={title(field.value)}
                                    icon={<ChevronDown />} />
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent onFocus={() => inputRef.current.focus()}>
                            <DropdownMenuLabel>
                                <Input
                                    ref={inputRef}
                                    className="shadow-[0_0_0_1px_black]"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    icon={search.length > 0 ? <span className="cursor-pointer" onClick={() => setSearch('')}><X /></span> : null} />
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuRadioGroup className="h-32 overflow-scroll overflow-x-hidden"
                                value={field.value}
                                onValueChange={(value) => {
                                    field.onChange(value);
                                }}>
                                {filterSelect.length > 0
                                    ?
                                    filterSelect.map((item) => (
                                        <DropdownMenuRadioItem key={item.value} value={item.value}>{item.title ? item.title : item.value}</DropdownMenuRadioItem>
                                    ))
                                    : <DropdownMenuLabel>Ничего не найдено</DropdownMenuLabel>}
                            </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                );
            }}
            rules={{
                required: computedRequired,
                ...rules,
            }}
        />
    );
};
