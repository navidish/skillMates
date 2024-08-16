import SendOTPForm from './SendOtpForm';
import CheckOTPForm from './CheckOTPForm';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { getOtp } from '../../services/authService';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';

function AuthContainer() {
  const { handleSubmit, register, getValues } = useForm();
  const [step, setStep] = useState(1);
  const [otpCode, setOtpCode] = useState('');

  const {
    isPending: isSendingOtp,
    mutateAsync,
    data: otpResponse,
  } = useMutation({
    mutationFn: getOtp,
  });

  const sendOTPHandler = async (data) => {
    try {
      const { message } = await mutateAsync(data);
      toast.success(data.message);
      setStep(2);
    } catch (error) {
      console.log(
        'error?.response?.data?.otpCode==403',
        error?.response?.data?.statusCode == 403
      );
      if (error?.response?.data?.statusCode == 403) {
        toast.success('کد اعتبارسنجی ارسال شد.');
        setOtpCode(error?.response?.data?.otpCode);
        setStep(2);
      } else {
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
            onSubmit={handleSubmit(sendOTPHandler)}
            setStep={setStep}
            register={register}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            otpResponse={otpResponse}
            phoneNumber={getValues('phoneNumber')}
            onBack={() => setStep(1)}
            otpCode={otpCode}
            onReSendOtp={sendOTPHandler}
          />
        );
      default:
        return null;
    }
  };

  return <div className="w-full sm:max-w-sm">{renderStep()}</div>;
}
export default AuthContainer;
