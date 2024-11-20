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
      <Row gutter={[16, 10]} justify='start'>
        <Col xs={24} md={8} lg={8} xl={8} xxl={6}>
          <Form.Item name='Debtor'>
            <DefaultInput
              title='User'
              placeholder='Please enter the name, number, or national ID of the user.'
            />
          </Form.Item>
        </Col>
        <Col xs={24} md={8} lg={8} xl={8} xxl={6}>
          <Form.Item name='Banks'>
            <SelectInput
              title='Destination Bank'
              search
              options={bankOptions}
              placeholder='Please select your desired bank.'
              searchPlaceholder='Search for the bank name.'
              notFoundContent='No bank found.'
            />
          </Form.Item>
        </Col>
        <Col xs={24} md={8} lg={8} xl={8} xxl={6}>
          <Form.Item name='TransactionStatus'>
            <SelectInput
              title='Transaction Status'
              options={transactionStatusOptions}
              placeholder='Please select your desired status.'
              icon
            />
          </Form.Item>
        </Col>
        <Col xs={24} md={8} lg={8} xl={8} xxl={6}>
          <Form.Item name='MandateStatus'>
            <SelectInput
              title='Mandate Status'
              options={paymanStatusOptions}
              placeholder='Please select your desired status.'
              icon
            />
          </Form.Item>
        </Col>
        <Col xs={24} md={8} lg={8} xl={8} xxl={6}>
          <Form.Item name='TraceId'>
            <DefaultInput
              title='Tracking ID'
              placeholder='Please enter your desired tracking ID.'
            />
          </Form.Item>
        </Col>
        <Col xs={24} md={8} lg={8} xl={8} xxl={6}>
          <Form.Item name='RefundId'>
            <DefaultInput
              title='Original Transaction Tracking ID'
              placeholder='Please enter your desired tracking ID.'
            />
          </Form.Item>
        </Col>
        <Col xs={24} md={8} lg={8} xl={8} xxl={6}>
          <Form.Item name='ReferenceId'>
            <DefaultInput
              title='Reference ID'
              placeholder='Please enter your desired reference ID.'
            />
          </Form.Item>
        </Col>
        <Col xs={24} md={8} lg={8} xl={8} xxl={6}>
          <Form.Item name='Umr'>
            <DefaultInput
              title='Mandate ID'
              placeholder='Please enter your desired mandate ID.'
            />
          </Form.Item>
        </Col>
        <Col xs={24} md={8} lg={8} xl={8} xxl={6}>
          <Form.Item name='Date'>
            <CalendarInput title='Transaction Date Range' isMandate={false} />
          </Form.Item>
        </Col>
        <Col xs={24} md={8} lg={8} xl={8} xxl={6}>
          <Form.Item name='Amount'>
            <PriceInput title='Transaction Amount Range' />
          </Form.Item>
        </Col>
        <Col xs={24} md={8} lg={8} xl={8} xxl={6}>
          <Form.Item name='Description'>
            <DefaultInput
              title='Description'
              placeholder='Please write your desired description.'
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
            Apply Filter
          </AppButton>
        </Col>
      </Row>
    </Form>
  );
};

export default FilterSection;
