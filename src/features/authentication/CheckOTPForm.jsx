import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import OTPInput from 'react-otp-input';
import { checkOtp } from '../../services/authService';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import Loading from '../../ui/Loading';
import { HiArrowRight } from 'react-icons/hi';
import { CiEdit } from 'react-icons/ci';

function CheckOTPForm({
  phoneNumber,
  onBack,
  onReSendOtp,
  otpResponse,
  otpCode,
}) {
  const RESEND_TIME = 90;
  const navigate = useNavigate();
  const [time, setTime] = useState(RESEND_TIME);
  const [otp, setOtp] = useState('');
  const { isPending, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });

  const checkOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const { message, user } = await mutateAsync({ phoneNumber, otp });
      toast.success(message);
      if (!user.isActive) {
        navigate('/complete-profile');
      }
      if (Number(user.status) !== 2) {
        navigate('/');
        toast('پروفایل شما در انتظار تایید است', { icon: '👏' });
        return;
      }
      if (user.role === 'OWNER') return navigate('/owner');
      if (user.role === 'FREELANCER') return navigate('/freelancer');
      if (user.role === 'ADMIN') return navigate('/admin');
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
    <div className="text-center">
      <div className="flex gap-2 ">
        <button onClick={onBack}>
          <HiArrowRight className="w-6 h-6 text-secondary-600" />
        </button>
        <h6 className="h6 text-secondary-600">بازگشت</h6>
      </div>

      {otpResponse ||
        (phoneNumber && (
          <p className="flex items-center gap-x-2 my-4">
            <span> {otpResponse?.message || phoneNumber}</span>
            <button onClick={onBack}>
              <CiEdit className="w-6 h-6 text-primary-900" />
            </button>
          </p>
        ))}

      {otpCode ? (
        <h4 className="h5 text-center p-10">
          کد{' '}
          <span className="font-bold text-lg text-primary-400 underline">
            {otpCode}
          </span>{' '}
          را در کادر زیر وارد کند
        </h4>
      ) : (
        <h3 className="h3 text-center p-10">کد تایید را وارد کنید</h3>
      )}

      <form className="space-y-10 py-8" onSubmit={checkOtpHandler}>
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
            border: '1px solid rgb(var(--color-secondary-400))',
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

      <div
        className={`${
          time > 0 ? ' text-green-600 bg-green-100' : ' text-red-600 bg-red-100'
        } flex mt-4  p-2 max-w-[198px]  items-center justify-center rounded-lg`}
      >
        {time > 0 ? (
          <p> {time} ثانیه تا ارسال مجدد کد</p>
        ) : (
          <button onClick={onReSendOtp}>ارسال مجدد کد تایید</button>
        )}
      </div>
    </div>
  );
}
export default CheckOTPForm;
