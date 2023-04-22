import { Eye, EyeOff } from 'lucide-react'
import { FC, useCallback, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'


import { BaseTextField, Button, CardContent, CardFooter, CardHeader, CardTitle } from '~shared/ui'

import { useSignIn } from '~shared/lib/auth'

import { SignInData, SignInFormValues } from '../model'

export interface SignInFormProps {
    onSignIn: (payload: SignInData) => void;
    onChangeForm: (payload: 'signUp') => void;
}

const SignInForm: FC<SignInFormProps> = ({ onChangeForm, onSignIn }) => {
    const [showPassword, setShowPassword] = useState(false)
    const form = useForm<SignInFormValues>({
        mode: 'onBlur',
        defaultValues: {},
    });

    const authSignIn = useSignIn();

    const handleSubmit = useCallback(
        (payload: SignInFormValues) => {
            console.log(payload)

            if (
                authSignIn({
                    token: 'token',
                    tokenType: 'Bearer',
                    expiresIn: 12000000
                })
            ) {
                onSignIn({
                    token: 'token',
                    ttl: 120,
                    type: 'Bearer',
                });
            }
        },
        [onSignIn, authSignIn]
    );

    const handleChangeForm = useCallback(
        (newForm: Parameters<SignInFormProps['onChangeForm']>[0]) => {
            onChangeForm(newForm);
        },
        [onChangeForm]
    );

    return (
        <>
            <CardHeader>
                <CardTitle className='m-auto'>Авторизация</CardTitle>
            </CardHeader>
            <CardContent>
                <FormProvider {...form}>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <BaseTextField
                                    name="login"
                                    type='text'
                                    required
                                    labelName='Логин'
                                    variant='dark' />
                                <BaseTextField
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    icon={showPassword
                                        ? <EyeOff className='cursor-pointer' onClick={() => setShowPassword(!showPassword)} />
                                        : <Eye className='cursor-pointer' onClick={() => setShowPassword(!showPassword)} />}
                                    required
                                    labelName='Пароль'
                                    variant='dark' />
                            </div>
                        </div>
                    </form>
                </FormProvider>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant='ghost' type="submit" onClick={handleChangeForm.bind(null, 'signUp')}>Создать аккаунт</Button>
                <Button type="submit" onClick={form.handleSubmit(handleSubmit)}>Войти</Button>
            </CardFooter>
        </>
    )
}

export default SignInForm
