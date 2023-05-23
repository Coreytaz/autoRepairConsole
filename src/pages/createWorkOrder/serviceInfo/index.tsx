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
            value: 'Технический осмотр',
            title: 'Технический осмотр'
        },
        {
            value: 'Замена лампочки',
            title: 'Замена лампочки'
        },
        {
            value: 'Запуск ДВС',
            title: 'Запуск ДВС'
        },
        {
            value: 'Замена свечи',
            title: 'Замена свечи'
        },
        {
            value: 'Ремонт ДВС 1',
            title: 'Ремонт ДВС 1'
        },
        {
            value: 'Масло ДВС',
            title: 'Масло ДВС'
        },
        {
            value: 'Ремонт системы охлаждения двигателя',
            title: 'Ремонт системы охлаждения двигателя'
        },
        {
            value: 'Промывка форсунок',
            title: 'Промывка форсунок'
        },
        {
            value: 'Снятие/установка генератора',
            title: 'Снятие/установка генератора'
        },
        {
            value: 'Прошивка форсунок',
            title: 'Прошивка форсунок'
        },
        {
            value: 'Ремонт генератора',
            title: 'Ремонт генератора'
        },
        {
            value: 'Электрика',
            title: 'Электрика'
        },
        {
            value: 'Снятие/установка радиатора',
            title: 'Снятие/установка радиатора'
        },
        {
            value: 'Ремонт радиатора',
            title: 'Ремонт радиатора'
        },
        {
            value: 'Диагностика ходовой части',
            title: 'Диагностика ходовой части'
        },
        {
            value: 'Замена колодок переднии/заднии',
            title: 'Замена колодок переднии/заднии'
        },
        {
            value: 'Замена подшипников переднии/заднии',
            title: 'Замена подшипников переднии/заднии'
        },

    ], [])

    const EmployeeItem = useMemo(() => [
        {
            value: 'Петров Иван Иванович',
            title: 'Петров Иван Иванович'
        },
        {
            value: 'Попов Павел Кириллович',
            title: 'Попов Павел Кириллович'
        },
        {
            value: 'Иванов Василий Дмитриевич',
            title: 'Иванов Василий Дмитриевич'
        },
        {
            value: 'Карпов Петр Борисович',
            title: 'Карпов Петр Борисович'
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
