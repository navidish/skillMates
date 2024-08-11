import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import OTPInput from 'react-otp-input';
import { checkOtp } from '../../services/authService';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import Loading from '../../ui/Loading';
import { HiArrowRight } from 'react-icons/hi';
import { CiEdit } from 'react-icons/ci';

function CheckOTPForm({ phoneNumber, onBack, onReSendOtp, otpResponse }) {
  const RESEND_TIME = 90;
  const navigate = useNavigate();
  const [time, setTime] = useState(RESEND_TIME);
  const [otp, setOtp] = useState('');
  const { isPending, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });

  const chckOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const { message, user } = await mutateAsync({ phoneNumber, otp });
      toast.success(message);
      if (!user.isActive) {
        navigate('/compelete-profile');
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  return (
    <div>
      <button onClick={onBack}>
        <HiArrowRight className="w-6 h-6 text-secondary-500" />
      </button>
      {otpResponse && (
        <p className="flex items-center gap-x-2 my-4">
          <span> {otpResponse?.message}</span>
          <button onClick={onBack}>
            <CiEdit className="w-6 h-6 text-primary-900" />
          </button>
        </p>
      )}
      <div className="mb-4 text-secondary-500">
        {time > 0 ? (
          <p> {time} ثانیه تا ارسال مجدد کد</p>
        ) : (
          <button onClick={onReSendOtp}>ارسال مجدد کد تایید</button>
        )}
      </div>
      <form className="space-y-10 py-8" onSubmit={chckOtpHandler}>
        <p className="font-bold text-secondary-800">کد تایید را وارد کنید</p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input type="number" {...props} />}
          containerStyle="flex flex-row-reverse gap-x-2  justify-center"
          inputStyle={{
            width: '2.5rem',
            padding: '0.5rem 0.2rem',
            border: '1px solid rgb(var(--color-primary-400))',
            borderRadius: '0.5rem',
          }}
        />
        {isPending ? (
          <Loading />
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            تایید
          </button>
        )}
      </form>
    </div>
  );
}
export default CheckOTPForm;
