import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form';

import { DragDropAvatar } from '~entities/DragDrop';

import { BaseTextField, Button, Card, Typography } from '~shared/ui';

const ProfilePage: FC = () => {
    const data = {
        FullName: 'Петров Петр Петрович',
        img: 'https://github.com/shadcn.png'
    }

    const methods = useForm({
        defaultValues: data
    });

    const onSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <section className="mt-7 sm:mx-4 xl:mx-8">
            <div>
                <Typography tag="h2" className="font-semibold">Профиль</Typography>
            </div>
            <Card className='w-full h-full mt-8 p-5 text-center' variant='default'>
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)} className="mt-5 flex flex-col gap-5 items-center">
                        <div className='flex gap-3 flex-col max-w-lg w-full items-center'>
                            <DragDropAvatar name="img" />
                            <BaseTextField
                                className='h-10'
                                name="FullName"
                                type='text'
                                required
                                labelName='ФИО'
                                variant='dark'
                                rules={{ pattern: { message: 'Поле не соответствует типу ФИО', value: /^([а-яё]+)\s([а-яё]+)(?:\s([а-яё]+))?$/i } }}
                            />
                        </div>
                        <Button type='submit'>Сохранить</Button>
                    </form>
                </FormProvider>
            </Card>
        </section >
    )
}

export default ProfilePage;
