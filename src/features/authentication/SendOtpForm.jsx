import React from 'react';
import Logo from '../../assets/images/logo.svg'
import TextField from '../../ui/TextField';
import Loading from '../../ui/Loading';

const SendOTPForm = ({ phoneNumber, onChange, onSubmit, isSendingOtp }) => {
  return (
    <div>
      <h3 className='h3 text-center pb-10'>ورود یا ثبت ‌نام</h3>
      <form className="space-y-8 " onSubmit={onSubmit}>
        <TextField
          name="phonenumber"
          value={phoneNumber}
          label="شماره موبایل"
          onChange={onChange}
        />
        {isSendingOtp ? (
          <Loading />
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            ارسال کد تایید
          </button>
        )}
      </form>
    </div>
  );
};

export default SendOTPForm;
