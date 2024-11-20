import { FC } from 'react';
import { Button, Input } from 'antd';
import styles from './styles.module.scss';
import { useAuthLoginPostMutation } from 'services/rest/auth/login';
import { useAtom } from 'jotai';
import { phoneNumberAtom } from '../atoms';
import DangerCircle from 'assets/Icons/DangerCircle';

type SendOTPFormProps = {
  setStep: (step: number) => void;
};

const SendOTPForm: FC<SendOTPFormProps> = ({ setStep }) => {
  const [phoneNumber, setPhoneNumber] = useAtom(phoneNumberAtom);
  const { mutate } = useAuthLoginPostMutation();
  const isValidNumber = phoneNumber.length === 11 && /^\d+$/.test(phoneNumber);

  const submitFormGetOtp = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (isValidNumber) {
      mutate({ data: { phoneNumber: phoneNumber } });
    }
  };
  return (
    <div className={styles['send-wrapper']}>
      <div className={styles['send-header']}>
        <span className={styles['login-header_paragraph']}>
          Welcome to Payman Panel
        </span>
        <span className={styles['login-header_span']}>
          Payment, this time enjoyable
        </span>
      </div>
      <form onSubmit={submitFormGetOtp}>
        <Input
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className={styles['login-send_input']}
          placeholder='Enter your phone number or username.'
        />
        <div className={styles['input-error']}>
          {phoneNumber.length > 0 &&
          (!/^\d+$/.test(phoneNumber) || phoneNumber.length !== 11) ? (
            <>
              <DangerCircle />
              <span>The mobile number length is incorrect. (11 digits)</span>
            </>
          ) : null}
        </div>
        <Button
          className={styles['login-send_btn']}
          onClick={() => setStep(2)}
          type='primary'
          block
          disabled={!isValidNumber}
        >
          Continue
        </Button>
      </form>
    </div>
  );
};

export default SendOTPForm;
