import { FC } from 'react'
import { FieldValues, FormProvider, UseFormReturn } from 'react-hook-form';
import { useSteps } from 'react-step-builder';

import { BaseTextField, Button, Typography } from '~shared/ui';
import { Card } from '~shared/ui';
import {  Dialog, DialogContent, DialogDescription, DialogFooter,
    DialogHeader, DialogTitle,  DialogTrigger } from '~shared/ui';

    import NewClientInfo from "./NewClientInfo";
    import NewAvtoInfo from "./NewAutoInfo";


const ClientInfo: FC<{ methods: UseFormReturn<FieldValues, any> }> = ({ methods }) => {
    const { next } = useSteps()

    const onSubmit = () => {
        next()
    }

    return (
        <div>
            <Typography tag="span" className="font-semibold uppercase text-2xl">КЛИЕНТ</Typography>
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
                        name="Date"
                        required
                        labelName='Дата и время'
                        variant='dark'
                        type="date"
                    />
                </div>
                <Button type='submit'>Далее</Button>
            </form>
    <Dialog>
        <DialogTrigger asChild>
            <Button variant="default" className="mt-7 sm:mx-4 xl:mx-8">Добавить клиента</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[460px]">
               
            <DialogHeader>
               <DialogTitle>Карточка клиента</DialogTitle>
             </DialogHeader>

             <div className="grid gap-4 py-4">
             <FormProvider {...methods}>
                  
                        <NewClientInfo methods={methods} />
                        <NewAvtoInfo methods={methods} />      
                   
            </FormProvider>
            </div>

             <DialogFooter>
                 <Button type="submit">Сохранить</Button>
             </DialogFooter>
        
      </DialogContent>
    </Dialog>


        </div>
    )
}

export default ClientInfo;
