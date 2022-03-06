import React from 'react';
import { getProviders, signIn } from 'next-auth/react';

const Login = ({ providers }) => {
  return (
	<div>Login</div>
  )
}

export default Login;

export async function gerServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    }
  }
}