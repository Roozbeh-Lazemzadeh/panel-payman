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
        'The entered 6-digit code is incorrect. Please ensure the entered code matches the sent code.',
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
          Welcome to Payman Panel
        </p>
        <p className={styles['login-header_span']}>
          Payment, this time enjoyable
        </p>
        <p className={styles['login-header_alert']}>
          Dear user, please enter the 6-digit code sent via SMS
        </p>
        <p className={styles['login-header_number']}>09371109227</p>
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
          Login to Panel
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
          Change Mobile Number or Username
        </Button>
      </form>
      <p className={styles['check-timer']}>
        {time.minutes === 0 && time.seconds === 0 ? (
          <span className={styles['check-timer_end']} onClick={resetTimer}>
            Resend Code
          </span>
        ) : (
          `${formattedTime} remaining`
        )}
      </p>
    </div>
  );
};

export default CheckOTPForm;
