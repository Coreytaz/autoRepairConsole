import { FC, useMemo } from 'react'
import { FieldValues, UseFormReturn } from 'react-hook-form';
import { useSteps } from 'react-step-builder';

import { BaseRadioField, BaseTextField, Button, Typography } from '~shared/ui';

function range(start: number, end: number) {
    return Array(end - start + 1).fill({}).map((_, idx) => start + idx)
}

const NewAvtoInfo: FC<{ methods: UseFormReturn<FieldValues, any> }> = ({ methods }) => {
 

    const totalProggresSteps = useMemo(() => range(1950, 2023).map((item) => {
        return {
            title: item.toString(),
            value: item.toString()
        }
    },).reverse(), [])

    return (
        <div>
            <Typography tag="span" className="font-semibold uppercase ">АВТОМОБИЛЬ</Typography>
            <form className="mt-5 flex flex-col gap-5 items-center">
                <div className='flex gap-3 flex-col max-w-lg w-full items-end'>
                    <BaseTextField
                        className='h-10'
                        name="brand"
                        type='text'
                        required
                        labelName='Марка'
                        variant='dark'
                    />
                    <BaseTextField
                        className='h-10'
                        name="Model"
                        type='text'
                        required
                        labelName='Модель'
                        variant='dark'
                    />
                    <BaseRadioField
                        className='h-10'
                        variant='dark'
                        selectItem={totalProggresSteps}
                        labelName='Год выпуска'
                        name='YearOfIssue'
                        required />
                    <BaseTextField
                        className='h-10'
                        name="StateNumber"
                        required
                        labelName='Гос.номер'
                        variant='dark'
                        type="StateNumber"
                        rules={{
                            pattern: {
                                message: 'Не правильный Гос.номер', value: /^[АВЕКМНОРСТУХ]{1}\s\d{3}\s[АВЕКМНОРСТУХ]{2}\s\d{2,3}$/
                            }
                        }}
                    />
                    <BaseTextField
                        className='h-10'
                        name="VIN-Number"
                        required
                        labelName='VIN-номер'
                        variant='dark'
                        type="text"
                        rules={{ pattern: { message: 'Не правильный VIN-номер', value: /^[A-HJ-NPR-Z\d]{17}$/ } }}
                    />
                </div>
               
            </form>
        </div>
    )
}

export default NewAvtoInfo;
