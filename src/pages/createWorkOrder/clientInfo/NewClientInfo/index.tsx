import { FC } from 'react'
import { FieldValues, UseFormReturn } from 'react-hook-form';
import { useSteps } from 'react-step-builder';




import { BaseTextField, Button, Typography } from '~shared/ui';

const NewClientInfo: FC<{ methods: UseFormReturn<FieldValues, any> }> = ({ methods }) => {

    return (
        <div>
            <Typography tag="span" className="font-semibold ">КЛИЕНТ</Typography>
            <form className="mt-5 mb-9 flex flex-col gap-5 items-center">
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
                        name="DateOfBirth"
                        required
                        labelName='Дата рождения'
                        variant='dark'
                        type="date"
                    />
                </div>
               
            </form>
        </div>
    )
}

export default NewClientInfo;
