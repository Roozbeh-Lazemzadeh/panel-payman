import { Button } from 'antd';
import { FC, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { phoneNumberAtom } from '../atoms';
import { useAtomValue } from 'jotai';
import { login } from 'utils/auth-utils';
import OTPInput from 'react-otp-input';
import { showErrorToast } from 'components/AppToast';
import DangerTriangle from 'assets/Icons/DangerTriangle';

type CheckOTPFormProps = {
  setStep: (step: number) => void;
};

const CheckOTPForm: FC<CheckOTPFormProps> = ({ setStep }) => {
  const phoneNumber = useAtomValue(phoneNumberAtom);
  const [otp, setOtp] = useState('');
  const [time, setTime] = useState({ minutes: 2, seconds: 33 });
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  useEffect(() => {
    if (!isTimerRunning) return;

    const intervalId = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime.minutes === 0 && prevTime.seconds === 0) {
          clearInterval(intervalId);
          setIsTimerRunning(false);
          return prevTime;
        }

        const updatedSeconds =
          prevTime.seconds === 0 ? 59 : prevTime.seconds - 1;
        const updatedMinutes =
          prevTime.seconds === 0 ? prevTime.minutes - 1 : prevTime.minutes;

        return { minutes: updatedMinutes, seconds: updatedSeconds };
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isTimerRunning]);

  const resetTimer = () => {
    setTime({ minutes: 2, seconds: 33 });
    setIsTimerRunning(true);
  };

  const formattedTime = `${time.minutes}:${time.seconds < 10 ? '0' : ''}${time.seconds}`;

  const handleErrorForLength = () => {
    if (otp.length === 6) {
      showErrorToast(
        'کد ۶ رقمی واردشده متفاوت است. توجه کنید که کد وارد شده با کد ارسال شده یکسان باشد.',
        <DangerTriangle />
      );
    }
  };

  const handleLogin = () => {
    handleErrorForLength();
    if (otp.length === 6) {
      login(phoneNumber, otp);
    }
  };

  return (
    <div className={styles['check-wrapper']}>
      <div className={styles['check-wrapper']}>
        <p className={styles['login-header_paragraph']}>
          به پنل پیمان خوش‌آمدید
        </p>
        <p className={styles['login-header_span']}>پرداخت٬ این بار لذت بخش</p>
        <p className={styles['login-header_alert']}>
          کاربر گرامی لطفا کد ۶ رقمی پیامک‌شده را وارد کنید.
        </p>
        <p className={styles['login-header_number']}>۰۹۳۷۱۱۰۹۲۲۷</p>
      </div>
      <form className={styles['check-wrapper_form']}>
        <OTPInput
          value={otp}
          onChange={setOtp}
          containerStyle={styles['container-inputsOTP']}
          inputStyle={
            otp.length === 6
              ? styles['container-inputsOTP__item-red']
              : styles['container-inputsOTP__item']
          }
          numInputs={6}
          shouldAutoFocus
          renderInput={(props) => <input {...props} />}
        />
        <Button
          className={
            otp.length === 6
              ? styles['login-check_btn-blue']
              : styles['login-check_btn']
          }
          type='primary'
          block
          onClick={handleLogin}
          disabled={otp.length !== 6}
        >
          ورود به پنل
        </Button>
        <Button
          className={styles['login-return_btn']}
          type='primary'
          block
          onClick={() => setStep(1)}
        >
          <img
            className={styles['login-check_img']}
            src='/assets/images/login/Swap.svg'
            alt=''
          />
          تغییر شماره موبایل یا نام کاربری
        </Button>
      </form>
      <p className={styles['check-timer']}>
        {time.minutes === 0 && time.seconds === 0 ? (
          <span className={styles['check-timer_end']} onClick={resetTimer}>
            ارسال مجدد کد
          </span>
        ) : (
          `${formattedTime} ثانیه باقی مانده`
        )}
      </p>
    </div>
  );
};

export default CheckOTPForm;
