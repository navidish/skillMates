import React, { useState } from 'react';
import TextField from '../../ui/TextField';

const SendOtpForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  return (
    <div className="pt-8">
      <form className="space-y-8">
        <TextField
          name="phonenumber"
          value={phoneNumber}
          label="شماره موبایل"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <button type="submit" className="btn btn--primary w-full">
          ارسال کد تایید
        </button>
      </form>
    </div>
  );
};

export default SendOtpForm;
