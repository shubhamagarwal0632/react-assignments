import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signIn, signOut, signUp } from '../slice/authslice';
import Tasklist from './Tasklist';

export const Auth = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      dispatch(signIn(JSON.parse(savedUser)));
    }
  }, [dispatch]);

  const handlesignUp = () => {
    if (email === '' || password === '') {
      alert('Email and password are required');
    } else {
      dispatch(signUp({ email, password }));
      localStorage.setItem('user', JSON.stringify({ email }));
    }
  };

  const handlesignin = () => {
    if (email === '' || password === '') {
      alert('Email and password are required');
    } else {
      dispatch(signIn({ email, password }));
      localStorage.setItem('user', JSON.stringify({ email }));
    }
  };

  const handlesignout = () => {
    dispatch(signOut());
    localStorage.removeItem('user');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {!user ? (
        <>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="mb-2 p-2 border border-zinc-500 w-[20vw] outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="mb-2 p-2 border border-zinc-500 w-[20vw] outline-none"
          />
          <div className="flex gap-2">
            <button
              onClick={handlesignUp}
              className="bg-blue-500 text-white px-4 py-2 rounded mb-2"
            >
              Sign Up
            </button>
            <button
              onClick={handlesignin}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Sign In
            </button>
          </div>
        </>
      ) : (
        <>
          <button
            onClick={handlesignout}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Sign Out
          </button>
          <Tasklist />
        </>
      )}
    </div>
  );
};
