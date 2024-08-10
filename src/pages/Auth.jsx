import React from 'react';
import SendOtpForm from '../features/authentication/SendOtpForm';
import CheckOTPForm from '../features/authentication/CheckOTPForm';

const Auth = () => {
  return (
    <div className="container w-full sm:max-w-sm">
      <SendOtpForm />
      {/* <CheckOTPForm /> */}
    </div>
  );
};
export default Auth;
