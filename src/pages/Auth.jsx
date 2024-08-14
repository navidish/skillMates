import React from 'react';
import AuthContainer from '../features/authentication/AuthContainer';

const Auth = () => {
  return (
    <div className="container xl:max-w-screen-xl">
      <div className="flex justify-center pt-8">
        <AuthContainer />
      </div>
    </div>
  );
};
export default Auth;
