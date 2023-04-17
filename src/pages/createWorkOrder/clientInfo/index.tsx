import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form';
import { useSteps } from 'react-step-builder';

import { BaseTextField, Button, Typography } from '~shared/ui';

const ClientInfo: FC = () => {
    const { next } = useSteps()
    const methods = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
        next()
    }

    return (
        <div>
            <Typography tag="span" className="font-semibold uppercase text-2xl">КЛИЕНТ</Typography>
            <FormProvider {...methods} >
                <form onSubmit={methods.handleSubmit(onSubmit)} className="mt-5 flex flex-col gap-5 items-center">
                    <div className='flex gap-3 flex-col max-w-lg w-full items-end'>
                        <BaseTextField
                            className='h-10'
                            name="FullName"
                            type='text'
                            required
                            labelName='ФИО'
                            variant='dark'
                            rules={{ pattern: { message: 'Поле не соответствует типу ФИО', value: /^([а-яё]+)\s([а-яё]+)(?:\s([а-яё]+))?$/i } }}
                        />
                        <BaseTextField
                            className='h-10'
                            name="Phone"
                            type='tel'
                            required
                            labelName='Телефон'
                            variant='dark'
                            rules={{ pattern: { message: 'Поле не соответствует номеру телефона', value: /^(\+7\s?)?\(?(\d{3})\)?[\s-]?(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})$/ } }}
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
            </FormProvider>
        </div>
    )
}

export default ClientInfo;
