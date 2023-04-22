import { FC, useCallback, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form';

import { Eye, EyeOff } from 'lucide-react';

import { BaseTextField, Button, CardContent, CardFooter, CardHeader, CardTitle } from '~shared/ui';

import { SignUpFormValues, mapFormDataToApiData } from '../model';

export interface SignUpFormProps {
  onSignUp: (payload: unknown) => void;
  onChangeForm: (payload: 'signIn') => void;
}

const SignUpForm: FC<SignUpFormProps> = ({ onChangeForm, onSignUp }) => {
  const [showPassword, setShowPassword] = useState(false)
  const form = useForm<SignUpFormValues>({
    mode: 'onBlur',
    defaultValues: {},
  });

  const handleSubmit = useCallback(
    (payload: SignUpFormValues) => {
      onSignUp && onSignUp({
        token: 'token',
        ttl: 120,
        type: 'Bearer',
      });
    },
    [onSignUp]
  );

  const handleChangeForm = useCallback(
    (newForm: Parameters<SignUpFormProps['onChangeForm']>[0]) => {
      onChangeForm(newForm);
    },
    [onChangeForm]
  );

  const validateRepeatPassword = useCallback(
    (v: string) => {
      const pass = form.getValues('password');

      return v === pass;
    },
    [form]
  );

  return (
    <>
      <CardHeader>
        <CardTitle className='m-auto'>Регистрация</CardTitle>
      </CardHeader>
      <CardContent>
        <FormProvider {...form}>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <BaseTextField
                  name="email"
                  required
                  type='email'
                  labelName='E-mail'
                  variant='dark'
                />
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
                <BaseTextField
                  name="password2"
                  type={showPassword ? 'text' : 'password'}
                  required
                  labelName='Повторите пароль'
                  rules={{
                    validate: validateRepeatPassword
                  }}
                  variant='dark' />
              </div>
            </div>
          </form>
        </FormProvider>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant='ghost' type="submit" onClick={handleChangeForm.bind(null, 'signIn')}>Создать аккаунт</Button>
        <Button type="submit" onClick={form.handleSubmit(handleSubmit)}>Зарегистрироваться</Button>
      </CardFooter>
    </>
  )
}

export default SignUpForm;
