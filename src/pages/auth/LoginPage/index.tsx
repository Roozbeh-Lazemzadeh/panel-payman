import { useState, useMemo, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import LoginLayout from 'layouts/LoginLayout';
import SendOTPForm from 'pages/auth/LoginPage/components/SendOTPForm';
import CheckOTPForm from 'pages/auth/LoginPage/components/CheckOTPForm';
import './styles.css';

const mock = [
  {
    id: '1',
    img: '/assets/images/login/slider1.svg'
  },
  {
    id: '2',
    img: '/assets/images/login/slider2.svg'
  },
  {
    id: '3',
    img: '/assets/images/login/slider3.svg'
  }
];

const LoginPage = () => {
  const [step, setStep] = useState(1);

  const swiperComponent = useMemo(
    () => (
      <Swiper
        pagination={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          reverseDirection: true
        }}
        loop={true}
        initialSlide={mock.length - 1}
        modules={[Pagination, Autoplay]}
        className={'mySwiper'}
      >
        {mock.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.img} alt='' />
          </SwiperSlide>
        ))}
      </Swiper>
    ),
    []
  );

  useEffect(() => {
    console.log('Project deployed successfully.');
  }, []);

  return (
    <div className={'login-wrapper'}>
      <div className={'login-wrapper_img'}>
        <img
          className={'login-img'}
          src='/assets/images/login/pattern.svg'
          alt=''
        />
      </div>
      <div className={'login-container'}>
        <LoginLayout name=''>
          {step === 1 && <SendOTPForm setStep={setStep} />}
          {step === 2 && <CheckOTPForm setStep={setStep} />}
        </LoginLayout>
      </div>
      <div className={'swiper-wrapper'}>{swiperComponent}</div>
    </div>
  );
};

export default LoginPage;
