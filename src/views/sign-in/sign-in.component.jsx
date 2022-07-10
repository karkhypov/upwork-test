import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { signIn } from '../../store/userSlice';

import CustomInput from '../../components/custom-input/custom-input.component';
import FormLayout from '../../layouts/form-layout/form-layout.component';

import './sign-in.styles.css';

const defaultFormFields = {
  name: '',
  password: '',
};

const SignIn = () => {
  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, password } = formFields;

  const err = useSelector((state) => state.user.error);
  const [error, setError] = useState(err);

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (err) setError(null);
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(signIn(formFields));

    if (err) {
      setError(err);
      setFormFields(defaultFormFields);
    }
  };

  return (
    <div className='sign-in'>
      <FormLayout
        title='Sign In'
        buttonLabel='Sign In'
        onSubmit={handleSubmit}
        error={error}
      >
        <CustomInput
          type='text'
          placeholder='Username'
          name='name'
          value={name}
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
