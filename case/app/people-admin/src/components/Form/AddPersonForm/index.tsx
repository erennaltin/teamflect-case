import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import dayjs from 'dayjs';
import { DatePicker, DayOfWeek, Dropdown, IDropdownOption, IDropdownStyles, IStackStyles, ITextFieldStyles, MaskedTextField, PrimaryButton, Stack, TextField } from '@fluentui/react';
import ShortUniqueId from 'short-unique-id';
import { AddPerson } from 'service/People';

interface FormProps {
  onAddPerson: () => void;
}

const Form = ({onAddPerson}: FormProps) => {
  const uid = new ShortUniqueId({ length: 15 });

  const { handleSubmit, control, reset, formState: { errors } } = useForm<AddPersonFormInputs>({
    defaultValues: {
      Firstname: '',
      Lastname: '',
      Sex: '',
      Phone: '',
      Email: '',
      Birthdate: new Date(),
      JobTitle: '',
    }
  });

  const _onSubmit:  SubmitHandler<AddPersonFormInputs> = async (data) => {
    const phoneMaskParts = data.Phone.replace(/\D/g, '').match(/(\d{3})(\d{3})(\d{4})/);
    data.Phone = phoneMaskParts ? phoneMaskParts[0] : data.Phone;
    let person: Person = {
      idUser: uid(),
      firstName: data.Firstname,
      lastName: data.Lastname,
      sex: data.Sex,
      phone: data.Phone,
      dateOfBirth: dayjs(data.Birthdate).format("YYYY-MM-DD"),
      email: data.Email,
      jobTitle: data.JobTitle,
    }
    const addResponse = await AddPerson(person);
    if (addResponse.status === 201)
    {
      onAddPerson();
      reset();
      return true;
    }
    else
    {
      return false;
    }
  }
  const submitButtonStackStyles: Partial<IStackStyles> = { root: { width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '8px' } };

  const options: IDropdownOption[] = [
    { key: 'Female', text: 'Female' },
    { key: 'Male', text: 'Male' },
  ];

  const dropdownStyles: Partial<IDropdownStyles> = {
    dropdown: { width: 300, minWidth: 150 },
  };

  const inputStyles: Partial<ITextFieldStyles> = {
    root: { width: 300, minWidth: 150 },
  };

  return (
    <form onSubmit={handleSubmit(_onSubmit)}>
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

              <Controller
                name={'Sex'}
                control={control}
                rules={{ required: true }}
                render={({ field }) => <Dropdown
                  placeholder="Please select your sex"
                  label="Sex"
                  options={options}
                  styles={dropdownStyles}
                  onChange={(_, option) => field.onChange(option?.text)}
                  errorMessage={errors.Sex && 'Sex is required'}
                />}
              />

              <Controller
                name="Phone"
                rules={{ required: true }}
                control={control}
                render={({ field }) => <MaskedTextField
                  label="Phone" 
                  mask="(999) 999 - 9999" 
                  styles={inputStyles} 
                  {...field} 
                  errorMessage={errors.Phone && 'Phone is required'} />}
              />

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
                name="Birthdate"
                rules={{ required: true }}
                control={control}
                render={({ field }) => <DatePicker
                  {...field}
                  onSelectDate={(date) => field.onChange(date)}
                  label='Birthdate'
                  firstDayOfWeek={DayOfWeek.Sunday}
                  placeholder="Select a date..."
                  ariaLabel="Select a date"
                  formatDate={(date) => dayjs(date?.toDateString()).format("YYYY-MM-DD") ?? ''}
                  styles={inputStyles}
                />}
              />
              
              <Controller
                name="JobTitle"
                rules={{ required: true }}
                control={control}
                render={({ field }) => <TextField 
                  label="Job Title" 
                  styles={inputStyles} 
                  {...field}
                  errorMessage={errors.JobTitle && 'Job Title is required'}
                  />}
              />
              <Stack styles={submitButtonStackStyles}>
                <PrimaryButton text="Submit" type='submit' />
              </Stack>
            </form>
  )
}

export default Form;