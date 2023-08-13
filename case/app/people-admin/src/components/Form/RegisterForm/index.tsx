import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { IStackStyles, ITextFieldStyles, PrimaryButton, Stack, TextField } from '@fluentui/react';
import { useContext, useState } from 'react';
import AuthContext from '../../../context/AuthContext';

const RegisterForm = () => {
  const context = useContext(AuthContext);
  const signUp = context?.signUp;
  const [serverError, setServerError] = useState(null);
  const { handleSubmit, control, reset, formState: { errors } } = useForm<IRegisterFromInputs>({
    defaultValues: {
      Email: '',
      Password: '',
      Firstname: '',
      Lastname: '',
    }
  });

  const _onSubmit:  SubmitHandler<IRegisterFromInputs> = async (data) => {
    data.Email = data.Email.trim();
    data.Password = data.Password.trim();

    const response = signUp && await signUp({email: data.Email, password: data.Password});

    if (response?.status !== 200)
    {
      setServerError(response.data);
    }
  }

  const submitButtonStackStyles: Partial<IStackStyles> = { root: { width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '8px' } };

  const inputStyles: Partial<ITextFieldStyles> = {
    root: { width: 300, minWidth: 150 },
  };

  return (
    <form onSubmit={handleSubmit(_onSubmit)}>
              <Controller
                name="Email"
                rules={{ required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ }}
                control={control}
                render={({ field }) => <TextField
                  {...field}
                  label="Email"
                  styles={inputStyles}
                  errorMessage={errors.Email?.type == 'required' ? 'Email is required' : errors.Email?.type == 'pattern' ? 'Email is not valid' : ''}
                />}
              />

              <Controller
                name="Password"
                rules={{ required: true }}
                control={control}
                render={({ field }) => <TextField
                  {...field}
                  label="Password"
                  type="password"
                  canRevealPassword
                  revealPasswordAriaLabel="Show password"
                  styles={inputStyles}
                  errorMessage={errors.Password && 'Password is required'}
                />}
              />

              <Controller
                name="Firstname"
                rules={{ required: true }}
                control={control}
                render={({ field }) => <TextField
                  {...field}
                  label="Firstname"
                  styles={inputStyles}
                  errorMessage={errors.Firstname && 'Firstname is required'}
                />}
              />

              <Controller
                name="Lastname"
                rules={{ required: true }}
                control={control}
                render={({ field }) => <TextField
                  {...field}
                  label="Lastname"
                  styles={inputStyles}
                  errorMessage={errors.Lastname && 'Lastname is required'}
                />}
              />

              <Stack styles={submitButtonStackStyles}>
                <PrimaryButton text="Register" type='submit' />
              </Stack>
              {serverError ? 
              (<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <p style={{ color: 'red', fontSize: '12px', textAlign: 'center', marginTop: '8px', borderWidth: '2px', borderColor: 'red', borderStyle: 'solid', padding: '8px'}}>{serverError}</p>
              </div>) : null}
            </form>
  )
}

export default RegisterForm;