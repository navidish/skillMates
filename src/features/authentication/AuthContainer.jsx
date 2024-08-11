import SendOTPForm from './SendOtpForm';
import CheckOTPForm from './CheckOTPForm';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { getOtp } from '../../services/authService';
import toast from 'react-hot-toast';

function AuthContainer() {
  const [step, setStep] = useState(2);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpCode, setOtpCode] = useState('');

  const {
    isPending: isSendingOtp,
    mutateAsync,
    data: otpResponse,
  } = useMutation({
    mutationFn: getOtp,
  });

  const sendOTPHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({ phoneNumber });
      toast.success(data.message);
      setStep(2);
    } catch (error) {
      console.log('error?.response?.data?.otpCode==403',error?.response?.data?.statusCode == 403)
      if(error?.response?.data?.statusCode == 403){
        toast.success('کد اعتبارسنجی ارسال شد.');
        setOtpCode(error?.response?.data?.otpCode)
        setStep(2);
      }
      else{

        toast.error(error?.response?.data?.message);
      }

    }
  };
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            isSendingOtp={isSendingOtp}
            onSubmit={sendOTPHandler}
            phoneNumber={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            setStep={setStep}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            otpResponse={otpResponse}
            phoneNumber={phoneNumber}
            onBack={() => setStep(1)}
            otpCode={otpCode}
            onReSendOtp={sendOTPHandler}
          />
        );
      default:
        return null;
    }
  };

  return <div className="pt-8">{renderStep()}</div>;
}
export default AuthContainer;
