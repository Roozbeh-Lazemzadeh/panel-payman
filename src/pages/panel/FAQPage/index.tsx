import { FC } from 'react';
import AppCollapse from 'components/AppCollapse';
import AppBanner from 'components/AppBanner';

type CollapseItem = {
  label: string;
  text: string;
  key: string;
};

const items: CollapseItem[] = [
  {
    label: 'سرویس برداشت مستقیم پیمان چطور کار می کند؟',
    text: 'پرداخت مستقیم راهکار هوشمند و نوین در صنعت پرداخت به شما کمک میکند خرید لذت بخش تر باشد . شما خیلی راحت میتوانید با بستن یک قرار داد به راحتی با هر یک از شرکت های لیست زیر فقط با زدن یک دکمه بدون ورود به صفحه درگاه پرداخت خرید های و تراکنش های خود را نهایی کنید . ',
    key: '1'
  },
  {
    label: 'برای استفاده از سرویس پیمان به چه چیزی نیاز دارید؟',
    text: 'پرداخت مستقیم راهکار هوشمند و نوین در صنعت پرداخت به شما کمک میکند خرید لذت بخش تر باشد . شما خیلی راحت میتوانید با بستن یک قرار داد به راحتی با هر یک از شرکت های لیست زیر فقط با زدن یک دکمه بدون ورود به صفحه درگاه پرداخت خرید های و تراکنش های خود را نهایی کنید . ',
    key: '2'
  },
  {
    label: 'سرویس پیمان در کجا استفاده می شود؟',
    text: 'پرداخت مستقیم راهکار هوشمند و نوین در صنعت پرداخت به شما کمک میکند خرید لذت بخش تر باشد . شما خیلی راحت میتوانید با بستن یک قرار داد به راحتی با هر یک از شرکت های لیست زیر فقط با زدن یک دکمه بدون ورود به صفحه درگاه پرداخت خرید های و تراکنش های خود را نهایی کنید . ',
    key: '3'
  },
  {
    label: 'آیا این سرویس از مشتری کارمزد کسر می کند؟',
    text: 'پرداخت مستقیم راهکار هوشمند و نوین در صنعت پرداخت به شما کمک میکند خرید لذت بخش تر باشد . شما خیلی راحت میتوانید با بستن یک قرار داد به راحتی با هر یک از شرکت های لیست زیر فقط با زدن یک دکمه بدون ورود به صفحه درگاه پرداخت خرید های و تراکنش های خود را نهایی کنید . ',
    key: '4'
  },
  {
    label: 'سرویس پیمان چطور امنیت را تامین می کند؟',
    text: 'پرداخت مستقیم راهکار هوشمند و نوین در صنعت پرداخت به شما کمک میکند خرید لذت بخش تر باشد . شما خیلی راحت میتوانید با بستن یک قرار داد به راحتی با هر یک از شرکت های لیست زیر فقط با زدن یک دکمه بدون ورود به صفحه درگاه پرداخت خرید های و تراکنش های خود را نهایی کنید . ',
    key: '5'
  },
  {
    label: 'سرویس پیمان چطور امنیت را تامین می کند؟',
    text: 'پرداخت مستقیم راهکار هوشمند و نوین در صنعت پرداخت به شما کمک میکند خرید لذت بخش تر باشد . شما خیلی راحت میتوانید با بستن یک قرار داد به راحتی با هر یک از شرکت های لیست زیر فقط با زدن یک دکمه بدون ورود به صفحه درگاه پرداخت خرید های و تراکنش های خود را نهایی کنید . ',
    key: '6'
  }
];

const FAQPage: FC = () => {
  return (
    <>
      <AppBanner
        title='سوالات متداول'
        description='برخی از سوالات پر تکرار شما در استفاده از پنل و یا سوالات فنی اولیه شما در این بخش نوشته شده است.'
      />
      <AppCollapse list={items} />
    </>
  );
};

export default FAQPage;
