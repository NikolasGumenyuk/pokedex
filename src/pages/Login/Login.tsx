import React from 'react';

import { useForm } from 'react-hook-form';

import { verifyUser } from 'services/users';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { setError, setLoading } from 'store/SettingSlice';
import { setUser } from 'store/UserSlice';

export interface LoginProps {
  login: string;
  password: string;
}

const Login = () => {
  const { register, handleSubmit } = useForm<LoginProps>();
  const isLoading = useAppSelector((state) => state.setting.isLoading);
  const dispatch = useAppDispatch();

  const onSubmit = async (data: LoginProps) => {
    dispatch(setLoading(true));
    try {
      const res = await verifyUser(data);

      dispatch(setUser(res));
    } catch (error) {
      dispatch(setError(error as string));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden">
      <div className="m-auto w-full rounded-md bg-white p-6 shadow-md lg:max-w-xl">
        <h1 className="text-center text-3xl font-semibold text-purple-700 underline">Sign in</h1>
        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-2">
            <input
              className="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-purple-700 focus:border-purple-400 focus:outline-none focus:ring focus:ring-purple-300/40"
              {...register('login')}
            />
          </div>
          <div className="mb-2">
            <input
              type="password"
              className="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-purple-700 focus:border-purple-400 focus:outline-none focus:ring focus:ring-purple-300/40"
              {...register('password', { required: true })}
            />
          </div>
          <div className="mt-6">
            <button
              className="w-full rounded-md bg-purple-700 px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-purple-600 focus:bg-purple-600 focus:outline-none"
              type="submit"
              disabled={isLoading}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
