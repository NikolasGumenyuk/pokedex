import React from 'react';

import { useForm } from 'react-hook-form';

import { LoginProps } from 'models/LoginProps';
import { verifyUser } from 'service/verifyUser';
import { useAppDispatch } from 'store/hooks';
import { setUser } from 'store/UserSlice';

const Login = () => {
  const { register, handleSubmit } = useForm<LoginProps>();
  const dispatch = useAppDispatch();

  const onSubmit = async (data: LoginProps) => {
    try {
      const res = await verifyUser(data);
      dispatch(setUser(res));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="login" {...register('login')} />
      <input defaultValue="password" {...register('password', { required: true })} />
      <input type="submit" />
    </form>
  );
};

export default Login;
