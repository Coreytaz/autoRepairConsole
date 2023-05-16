import { FC } from 'react'
import { FieldValues, FormProvider, UseFormReturn } from 'react-hook-form'

import { Button, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '~shared/ui'

import NewAvtoInfo from './NewAutoInfo'
import NewClientInfo from './NewClientInfo'

export const ClientDiolog: FC<{ methods: UseFormReturn<FieldValues, any> }> = ({ methods }) => {
    return (
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
    )
}
