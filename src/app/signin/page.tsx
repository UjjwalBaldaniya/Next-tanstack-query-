'use client';

import React, { useState } from 'react';

type SigninType = {
  email: string;
  password: string;
};

const Signin = () => {
  const signinDescription = [
    {
      name: 'email',
      placeholder: 'Email',
      label: 'Email :-',
      type: 'email',
    },
    {
      type: 'password',
      name: 'password',
      placeholder: 'Password',
      label: 'Password :-',
    },
  ];

  const [signin, setSignin] = useState<SigninType>({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignin({ ...signin, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'mor_2314',
        password: '83r5^_',
      }),
    });

    if (response) {
      const data = await response.json();
      console.log('🚀 ~ handleSubmit ~ data:', data);
      // Handle successful authentication (e.g., redirect, show message, etc.)
    } else {
      // Handle authentication failure
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {signinDescription.map((item, index) => (
          <div key={index}>
            <label>{item.label}</label>
            <input
              {...item}
              value={signin[item?.name as keyof SigninType]}
              onChange={handleChange}
            />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Signin;
