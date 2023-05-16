import { ReactNode, useMemo, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { Check, ChevronsUpDown } from 'lucide-react';

import { Input } from '~shared/ui/Input';

import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, Popover, PopoverContent, PopoverTrigger } from '~shared/ui';

import { cn } from '~shared/lib';

import { CommonTextFieldProps } from '../types';

export type selectItemProps = {
    title?: string
    value: string
}


export interface BaseRadioFieldProps<T> extends CommonTextFieldProps {
    selectItem: T
    actions?: ReactNode
}

export const BaseRadioField: React.FC<BaseRadioFieldProps<selectItemProps[]>> = ({
    name,
    onChange,
    defaultValue,
    rules = {},
    required,
    selectItem,
    actions,
    ...props
}) => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")
    const { control } = useFormContext();

    const title = (value: string) => selectItem.filter((item) => item.value === value)[0]?.title

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
                    <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                            <Input
                                autoComplete="off"
                                variant='dark'
                                error={!!fieldState.error}
                                helperText={fieldState?.error?.message}
                                {...props}
                                {...field}
                                onChange={(value) => {
                                    field.onChange(value);
                                    onChange && onChange(value);
                                }}
                                value={title(field.value) || ''}
                                icon={<ChevronsUpDown />} {...props} className="text-left" />
                        </PopoverTrigger>
                        <PopoverContent className="w-[320px] p-0">
                            <Command>
                                <CommandInput placeholder={`Поиск ${props?.labelName?.toLowerCase()}...`} />
                                <CommandEmpty className='flex items-center flex-col gap-5 p-2'>{props?.labelName} не найден. {actions}</CommandEmpty>
                                <CommandGroup className='h-64 overflow-scroll overflow-x-hidden'>
                                    {selectItem.map((item) => (
                                        <CommandItem
                                            key={item.value}
                                            onSelect={(currentValue) => {
                                                field.onChange(currentValue === value ? "" : item.value)
                                                setValue(currentValue === value ? "" : currentValue);
                                                setOpen(false);
                                            }}
                                        >
                                            <Check
                                                className={cn(
                                                    "mr-2 h-4 w-4",
                                                    value === item.value.toLowerCase() ? "opacity-100" : "opacity-0"
                                                )} />
                                            {item.title}
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </Command>
                        </PopoverContent>
                    </Popover>
                );
            }}
            rules={{
                required: computedRequired,
                ...rules,
            }}
        />
    );
};
