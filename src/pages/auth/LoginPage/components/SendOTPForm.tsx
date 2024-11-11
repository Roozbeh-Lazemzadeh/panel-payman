import { FC } from 'react';
import { Button, Input } from 'antd';
import styles from './styles.module.scss';
import { useAuthLoginPostMutation } from 'services/rest/auth/login';
import { useAtom } from 'jotai';
import { phoneNumberAtom } from '../atoms';

type SendOTPFormProps = {
  setStep: (step: number) => void; // Function that takes a number
};

const SendOTPForm: FC<SendOTPFormProps> = ({ setStep }) => {
  const [phoneNumber, setPhoneNumber] = useAtom(phoneNumberAtom);
  const { mutate, error } = useAuthLoginPostMutation();

  const submitFormGetOtp = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(typeof phoneNumber);
    mutate({ data: { phoneNumber: phoneNumber } });
    console.log(error);
  };

  return (
    <div className={styles['send-wrapper']}>
      <div className={styles['send-header']}>
        <span className={styles['login-header_paragraph']}>
          به پنل پیمان خوش‌آمدید
        </span>
        <span className={styles['login-header_span']}>
          پرداخت٬ این بار لذت بخش
        </span>
      </div>
      <form onSubmit={submitFormGetOtp}>
        <Input
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className={styles['login-send_input']}
          placeholder='.شماره تماس یا نام کاربری خود را وارد کنید'
        />
        <div className={styles['input-error']}>
          {phoneNumber.length > 0 &&
          (!/^\d+$/.test(phoneNumber) || phoneNumber.length < 11) ? (
            <>
              <svg
                width='12'
                height='12'
                viewBox='0 0 12 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle cx='6' cy='6' r='6' fill='#FF3672' />
                <path
                  d='M5.18182 1H6.85714L6.67532 7.05106H5.35065L5.18182 1ZM5 9.00426C5 8.73191 5.09524 8.50213 5.28571 8.31489C5.48485 8.12766 5.72727 8.03404 6.01299 8.03404C6.29004 8.03404 6.52381 8.12766 6.71429 8.31489C6.90476 8.50213 7 8.73191 7 9.00426C7 9.2766 6.90043 9.51064 6.7013 9.70638C6.51082 9.90213 6.28139 10 6.01299 10C5.72727 10 5.48485 9.90213 5.28571 9.70638C5.09524 9.51064 5 9.2766 5 9.00426Z'
                  fill='white'
                />
              </svg>
              <span>تعداد ارقام شماره موبایل درست نیست.</span>
            </>
          ) : null}
        </div>
        <Button
          className={styles['login-send_btn']}
          onClick={() => setStep(2)}
          type='primary'
          block
        >
          ادامه
        </Button>
      </form>
    </div>
  );
};

export default SendOTPForm;
