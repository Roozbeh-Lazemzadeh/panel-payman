import CalendarInput from 'components/AppInputs/CalendarInput/index';
import DefaultInput from 'components/AppInputs/DefaultInput';
import { FC } from 'react';
import { Col, Form, Row } from 'antd';
import SelectInput from 'components/AppInputs/SelectInput';
import styles from './styles.module.scss';
import AppButton from 'components/AppButton';
import TickSquare from 'assets/Icons/TickSquare';
import PriceInput from 'components/AppInputs/PriceInput';
import {
  bankOptions,
  paymanStatusOptions,
  transactionStatusOptions
} from '../SelectInputData';
import { useTRefundFiltersAtom } from '../atoms';
import { TransactionsRefundGetQuery } from 'services/rest/transactions/refund/types';

type TRefundFormInstance = Exclude<
  TransactionsRefundGetQuery,
  | 'FromTransactionDate'
  | 'ToTransactionDate'
  | 'FromTransactionAmount'
  | 'ToTransactionAmount'
> & {
  Date?: [from: string, to: string];
  Amount?: [from: string, to: string];
};

const initialValues: TransactionsRefundGetQuery = {
  Debtor: '',
  Banks: [],
  TransactionStatus: [],
  MandateStatus: [],
  TraceId: '',
  RefundId: '',
  ReferenceId: '',
  Umr: '',
  FromTransactionDate: '',
  ToTransactionDate: '',
  FromTransactionAmount: '',
  ToTransactionAmount: '',
  Description: ''
};

const FilterSection: FC = () => {
  const [, setTRefundFilters] = useTRefundFiltersAtom();
  const [transactionRefundForm] = Form.useForm<TRefundFormInstance>();

  const handleSubmitForm = () => {
    transactionRefundForm.validateFields().then((values) => {
      const { Date, Amount, ...rest } = values;

      setTRefundFilters({
        ...rest,
        FromTransactionDate: Date?.[0],
        ToTransactionDate: Date?.[1],
        FromTransactionAmount: Amount?.[0],
        ToTransactionAmount: Amount?.[1]
      });
    });
  };

  return (
    <Form
      className={styles['filter-section']}
      form={transactionRefundForm}
      initialValues={initialValues}
    >
      <Row gutter={[16, 16]} justify='start'>
        <Col xs={24} md={8} lg={8} xl={8} xxl={6}>
          <Form.Item name='Debtor'>
            <DefaultInput
              title='کاربر'
              placeholder='لطفا نام، شماره، کدملی کاربر مورد نظر را وارد کنید'
            />
          </Form.Item>
        </Col>
        <Col xs={24} md={8} lg={8} xl={8} xxl={6}>
          <Form.Item name='Banks'>
            <SelectInput
              title='بانک مقصد'
              search
              options={bankOptions}
              placeholder='لطفا بانک مورد نظر خود را انتخاب کنید'
              searchPlaceholder='نام بانک را جست‌و‌جو کنید.'
              notFoundContent='بانکی یافت نشد'
            />
          </Form.Item>
        </Col>
        <Col xs={24} md={8} lg={8} xl={8} xxl={6}>
          <Form.Item name='TransactionStatus'>
            <SelectInput
              title='وضعیت تراکنش'
              options={transactionStatusOptions}
              placeholder='لطفا وضعیت مورد نظر خود را انتخاب کنید.'
              icon
            />
          </Form.Item>
        </Col>
        <Col xs={24} md={8} lg={8} xl={8} xxl={6}>
          <Form.Item name='MandateStatus'>
            <SelectInput
              title='وضعیت پیمان'
              options={paymanStatusOptions}
              placeholder='لطفا وضعیت مورد نظر خود را انتخاب کنید.'
              icon
            />
          </Form.Item>
        </Col>
        <Col xs={24} md={8} lg={8} xl={8} xxl={6}>
          <Form.Item name='TraceId'>
            <DefaultInput
              title='شناسه پیگیری'
              placeholder='لطفا شناسه مورد نظر خود را وارد کنید.'
            />
          </Form.Item>
        </Col>
        <Col xs={24} md={8} lg={8} xl={8} xxl={6}>
          <Form.Item name='RefundId'>
            <DefaultInput
              title='شناسه پیگیری تراکنش اصلی'
              placeholder='لطفا شناسه پیگیری مورد نظر خود را وارد کنید.'
            />
          </Form.Item>
        </Col>
        <Col xs={24} md={8} lg={8} xl={8} xxl={6}>
          <Form.Item name='ReferenceId'>
            <DefaultInput
              title='شناسه مرجع'
              placeholder='لطفا شناسه مورد نظر خود را وارد کنید.'
            />
          </Form.Item>
        </Col>
        <Col xs={24} md={8} lg={8} xl={8} xxl={6}>
          <Form.Item name='Umr'>
            <DefaultInput
              title='شناسه پیمان'
              placeholder='لطفا شناسه مورد نظر خود را وارد کنید.'
            />
          </Form.Item>
        </Col>
        <Col xs={24} md={8} lg={8} xl={8} xxl={6}>
          <Form.Item name='Date'>
            <CalendarInput title='بازه تاریخ‌ تراکنش' isMandate={false} />
          </Form.Item>
        </Col>
        <Col xs={24} md={8} lg={8} xl={8} xxl={6}>
          <Form.Item name='Amount'>
            <PriceInput title='بازه مبلغ تراکنش' />
          </Form.Item>
        </Col>
        <Col xs={24} md={8} lg={8} xl={8} xxl={6}>
          <Form.Item name='Description'>
            <DefaultInput
              title='توضیحات'
              placeholder='توضیحات مورد نظر خود را بنویسید.'
            />
          </Form.Item>
        </Col>

        <Col
          xs={24}
          md={8}
          lg={8}
          xl={8}
          xxl={6}
          className={styles['custom-btn']}
        >
          <AppButton modifier='primary' onClick={handleSubmitForm}>
            <TickSquare />
            اعمال فیلتر
          </AppButton>
        </Col>
      </Row>
    </Form>
  );
};

export default FilterSection;
