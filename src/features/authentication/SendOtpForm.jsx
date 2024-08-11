import React from 'react';
import TextField from '../../ui/TextField';

import Loading from '../../ui/Loading';

const SendOTPForm = ({ phoneNumber, onChange, onSubmit, isSendingOtp }) => {
  return (
    <div className="pt-8">
      <form className="space-y-8" onSubmit={onSubmit}>
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
