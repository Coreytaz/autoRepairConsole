import { FC, useMemo } from 'react'
import { FieldValues, UseFormReturn } from 'react-hook-form';
import { useSteps } from 'react-step-builder';

import { BaseRadioField, BaseTextField, Button, Dialog, Typography } from '~shared/ui';
import { DialogTrigger } from '~shared/ui';

import { ClientDiolog } from './ClientDiolog';


const ClientInfo: FC<{ methods: UseFormReturn<FieldValues, any> }> = ({ methods }) => {
    const { next } = useSteps()

    const onSubmit = () => {
        next()
    }

    const ClientItem = useMemo(() => [
        {
            value: 'Цветков Илья Владимирович',
            title: 'Цветков Илья Владимирович'
        },
        {
            value: 'Сорокина Яна Ивановна.',
            title: 'Сорокина Яна Ивановна'
        },
        {
            value: 'Русских Ольга Викторовна',
            title: 'Русских Ольга Викторовна'
        },
        {
            value: 'Ушаков Олег Дмитриевич',
            title: 'Ушаков Олег Дмитриевич'
        },
        {
            value: 'Курочкина Анастасия Георгиевна',
            title: 'Курочкина Анастасия Георгиевна'
        },
    ], [])

    return (
        <Dialog>
            <Typography tag="span" className="font-semibold uppercase text-2xl">КЛИЕНТ</Typography>
            <form onSubmit={methods.handleSubmit(onSubmit)} className="mt-5 flex flex-col gap-5 items-center">
                <div className='flex gap-3 flex-col max-w-lg w-full items-end'>
                    <BaseRadioField
                        className='h-10'
                        name="FullName"
                        type='text'
                        selectItem={ClientItem}
                        required
                        labelName='ФИО'
                        variant='dark'
                        actions={<DialogTrigger asChild>
                            <Button variant='default' className="text-xs">Добавить клиента</Button>
                        </DialogTrigger>}
                    />
                    <BaseTextField
                        className='h-10'
                        name="Date"
                        required
                        labelName='Дата и время'
                        variant='dark'
                        type="date"
                    />
                </div>
                <Button type='submit'>Далее</Button>
            </form>
            <ClientDiolog methods={methods} />
        </Dialog>
    )
}

export default ClientInfo;
