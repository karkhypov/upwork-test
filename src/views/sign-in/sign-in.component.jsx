import { useState } from 'react';

import CustomInput from '../../components/custom-input/custom-input.component';
import FormLayout from '../../layouts/form-layout/form-layout.component';

import './sign-in.styles.css';

const defaultFormFields = {
  userName: '',
  password: '',
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { userName, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = () => {
    console.log(formFields);
  };

  return (
    <div className='sign-in'>
      <FormLayout title='Sign In' buttonLabel='Sign In' onSubmit={handleSubmit}>
        <CustomInput
          type='text'
          placeholder='Username'
          name='userName'
          value={userName}
          onChange={handleChange}
        />
        <CustomInput
          type='password'
          placeholder='Password'
          name='password'
          value={password}
          onChange={handleChange}
        />
      </FormLayout>
    </div>
  );
};

export default SignIn;
