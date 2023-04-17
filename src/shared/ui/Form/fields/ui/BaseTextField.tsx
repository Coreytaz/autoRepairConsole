import { useMemo } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { Input } from '~shared/ui/Input';

import { CommonTextFieldProps } from '../types';


export interface BaseTextFieldProps extends CommonTextFieldProps { }

export const BaseTextField: React.FC<BaseTextFieldProps> = ({
    name,
    onChange,
    defaultValue,
    rules = {},
    required,
    ...props
}) => {
    const { control } = useFormContext();

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
                    <Input
                        {...props}
                        {...field}
                        error={!!fieldState.error}
                        helperText={fieldState?.error?.message}
                        onChange={(value) => {
                            field.onChange(value);
                            onChange && onChange(value);
                        }}
                    />
                );
            }}
            rules={{
                required: computedRequired,
                ...rules,
            }}
        />
    );
};
