import { FC, useCallback, useState } from 'react'

import { Navigate, useNavigate } from 'react-router-dom';

import { Card } from '~shared/ui';

import { useIsAuthenticated } from '~shared/lib/auth';

import { setViewer } from '~entities/viewer';

import { SignInForm } from './Form/sign-in';
import { SignUpForm } from './Form/sign-up';
import { SignInFormProps } from './Form/sign-in/ui/SignInForm';
import { SignUpFormProps } from './Form/sign-up/ui/SignUpForm';
import { mapFormDataToViewer } from './Form/sign-in/model/mappers';

type LoginPageForm = 'signIn' | 'signUp';

const LoginPage: FC = () => {
    const navigate = useNavigate();
    const isAuth = useIsAuthenticated();
    const [currentForm, setCurrentForm] = useState<LoginPageForm>('signIn');

    const handleSignIn: SignInFormProps['onSignIn'] = useCallback(
        (data) => {
            setViewer(mapFormDataToViewer(data))
            navigate('/', { replace: true });
        },
        [navigate]
    );

    const handleChangeForm = useCallback((payload: LoginPageForm) => {
        setCurrentForm(payload);
    }, []);

    const handleSignUp = useCallback<NonNullable<SignUpFormProps['onSignUp']>>(() => {
        setCurrentForm('signIn');
    }, []);

    if (isAuth()) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="flex h-screen">
            <Card className="w-[450px] m-auto">
                {currentForm === 'signIn' && (
                    <SignInForm onSignIn={handleSignIn} onChangeForm={handleChangeForm} />
                )}
                {currentForm === 'signUp' && (
                    <SignUpForm onSignUp={handleSignUp} onChangeForm={handleChangeForm} />
                )}
            </Card>
        </div>
    )
}

export default LoginPage;
