/* eslint-disable no-console */
import { FC, useMemo } from 'react'
import { FieldValues, UseFormReturn } from 'react-hook-form';
import { useSteps } from 'react-step-builder';

import { BaseRadioField, BaseTextField, Button, Typography, useToast } from '~shared/ui';

const ServiceInfo: FC<{ methods: UseFormReturn<FieldValues, any> }> = ({ methods }) => {
    const { toast } = useToast()
    const { prev, jump } = useSteps()

    const onSubmit = (data: any) => {
        toast({
            title: "Данные успешно отправлены!",
            description: JSON.stringify(data)
        })

        console.log(data)

        methods.reset();

        jump(1)
    }

    const ServiceSelectionItem = useMemo(() => [
        {
            value: 'двигатель',
            title: 'Двигатель'
        },
        {
            value: 'услуга',
            title: 'Услуга'
        },
    ], [])

    const EmployeeItem = useMemo(() => [
        {
            value: 'Иванов Иван Иваныч',
            title: 'Иванов Иван Иваныч'
        },
    ], [])

    return (
        <div>
            <Typography tag="span" className="font-semibold uppercase text-2xl">УСЛУГА</Typography>
            <form onSubmit={methods.handleSubmit(onSubmit)} className="mt-5 flex flex-col gap-5 items-center">
                <div className='flex gap-3 flex-col max-w-lg w-full items-end'>
                    <BaseRadioField
                        className='h-10'
                        variant='dark'
                        selectItem={ServiceSelectionItem}
                        labelName='Выбор услуги'
                        name='ServiceSelection'
                        required />
                    <BaseTextField
                        className='h-10'
                        name="Price"
                        type='text'
                        required
                        labelName='Стоимость'
                        variant='dark'
                    />
                    <BaseRadioField
                        className='h-10'
                        variant='dark'
                        selectItem={EmployeeItem}
                        labelName='Сотрудник'
                        name='Employee'
                        required />
                    <BaseTextField
                        className='h-10'
                        name="DateAndTimeOfIssue"
                        required
                        labelName='Дата и время выдачи'
                        variant='dark'
                        type="date"
                    />
                </div>
                <div className='flex gap-5'>
                    <Button onClick={prev}>Назад</Button>
                    <Button type='submit'>Создать и отправить</Button>
                </div>
            </form>
        </div>
    )
}

export default ServiceInfo;
