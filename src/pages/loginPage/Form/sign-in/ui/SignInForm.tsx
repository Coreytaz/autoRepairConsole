import { Eye, EyeOff } from 'lucide-react'
import { FC, useCallback, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'


import { BaseTextField, Button, CardContent, CardFooter, CardHeader, CardTitle, Loading } from '~shared/ui'

import { useSignIn } from '~shared/lib/auth'

import { SignInData, SignInFormValues } from '../model'
import { mockSignIn } from '../api'
import { mapFormDataToViewer } from '../model/mappers'

export interface SignInFormProps {
    onSignIn: (payload: SignInData) => void;
    onChangeForm: (payload: 'signUp') => void;
}

const SignInForm: FC<SignInFormProps> = ({ onChangeForm, onSignIn }) => {
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const form = useForm<SignInFormValues>({
        mode: 'onBlur',
        defaultValues: {},
    });

    const authSignIn = useSignIn();

    const handleSubmit = useCallback(
        async (payload: SignInFormValues) => {
            try {
                setLoading(true)

                await mockSignIn(payload).then(({ data }) => {
                    if (
                        authSignIn({
                            token: data.token,
                            tokenType: 'Bearer',
                            expiresIn: data.ttl,
                            authState: {
                                ...mapFormDataToViewer(data)
                            }
                        })
                    ) {
                        onSignIn(data);
                    }
                })
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false)
            }
        },
        [authSignIn, onSignIn]
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
                <Button type="submit" onClick={form.handleSubmit(handleSubmit)} isLoading={loading} disabled={loading}>Войти</Button>
            </CardFooter>
        </>
    )
}

export default SignInForm
