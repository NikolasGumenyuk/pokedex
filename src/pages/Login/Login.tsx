import React from 'react';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from 'store/hooks';
import { setUser, UserState } from 'store/UserSlice';

interface Fields {
  login: string;
  password: string;
}

const Login = () => {
  const { register, handleSubmit } = useForm<Fields>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const verifyUser = (data: Fields): Promise<UserState> => {
    return new Promise((resolve, reject) => {
      if (data.login === 'admin' && data.password === '12345') {
        resolve({ firstName: 'Mykola', lastName: 'Gumeniuk', isAuth: true });
      }
      reject('kto ty voin?');
    });
  };

  const onSubmit = async (data: Fields) => {
    try {
      const res = await verifyUser(data);
      dispatch(setUser(res));
      navigate('/home');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="login" {...register('login')} />
      <input defaultValue="password" {...register('password', { required: true })} />
      {/* {errors.exampleRequired && <span>This field is required</span>} */}
      <input type="submit" />
    </form>
  );
};

export default Login;
