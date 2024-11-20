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
    label: 'How does the Payman Direct Debit Service work?',
    text: 'Direct payment is an innovative and intelligent solution in the payment industry that helps make shopping more enjoyable. You can easily finalize your purchases and transactions with any of the companies listed below by simply clicking a button without navigating to the payment gateway page.',
    key: '1'
  },
  {
    label: 'What do you need to use the Payman service?',
    text: 'Direct payment is an innovative and intelligent solution in the payment industry that helps make shopping more enjoyable. You can easily finalize your purchases and transactions with any of the companies listed below by simply clicking a button without navigating to the payment gateway page.',
    key: '2'
  },
  {
    label: 'Where is the Payman service used?',
    text: 'Direct payment is an innovative and intelligent solution in the payment industry that helps make shopping more enjoyable. You can easily finalize your purchases and transactions with any of the companies listed below by simply clicking a button without navigating to the payment gateway page.',
    key: '3'
  },
  {
    label: 'Does this service deduct fees from the customer?',
    text: 'Direct payment is an innovative and intelligent solution in the payment industry that helps make shopping more enjoyable. You can easily finalize your purchases and transactions with any of the companies listed below by simply clicking a button without navigating to the payment gateway page.',
    key: '4'
  },
  {
    label: 'How does the Payman service ensure security?',
    text: 'Direct payment is an innovative and intelligent solution in the payment industry that helps make shopping more enjoyable. You can easily finalize your purchases and transactions with any of the companies listed below by simply clicking a button without navigating to the payment gateway page.',
    key: '5'
  },
  {
    label: 'How does the Payman service ensure security?',
    text: 'Direct payment is an innovative and intelligent solution in the payment industry that helps make shopping more enjoyable. You can easily finalize your purchases and transactions with any of the companies listed below by simply clicking a button without navigating to the payment gateway page.',
    key: '6'
  }
];

const FAQPage: FC = () => {
  return (
    <>
      <AppBanner
        title='Frequently Asked Questions'
        description='Here are some of the most common questions you have about using the panel or initial technical queries.'
      />
      <AppCollapse list={items} />
    </>
  );
};

export default FAQPage;
