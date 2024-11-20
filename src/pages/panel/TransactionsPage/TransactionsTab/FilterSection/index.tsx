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
import { useTReportFiltersAtom } from '../atoms';
import { TransactionsReportGetQuery } from 'services/rest/transactions/reports/types';

type TReportFormInstance = Exclude<
  TransactionsReportGetQuery,
  | 'FromTransactionDate'
  | 'ToTransactionDate'
  | 'FromTransactionAmount'
  | 'ToTransactionAmount'
> & {
  Date?: [from: string, to: string];
  Amount?: [from: string, to: string];
};

const initialValues: TransactionsReportGetQuery = {
  Debtor: '',
  Banks: [],
  TransactionStatus: [],
  MandateStatus: [],
  FromTransactionDate: '',
  ToTransactionDate: '',
  TraceId: '',
  ReferenceId: '',
  Umr: '',
  FromTransactionAmount: '',
  ToTransactionAmount: ''
};

const FilterSection: FC = () => {
  const [, setTReportFilters] = useTReportFiltersAtom();
  const [transactionReportForm] = Form.useForm<TReportFormInstance>();

  const handleSubmitForm = () => {
    transactionReportForm.validateFields().then((values) => {
      const { Date, Amount, ...rest } = values;

      setTReportFilters({
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
      form={transactionReportForm}
      initialValues={initialValues}
    >
      <Row gutter={[16, 10]} justify='start'>
        <Col xs={24} md={8} lg={8} xl={8} xxl={6}>
          <Form.Item name='Debtor'>
            <DefaultInput
              title='User'
              placeholder='Please enter the name, number, or national ID of the user'
            />
          </Form.Item>
        </Col>
        <Col xs={24} md={8} lg={8} xl={8} xxl={6}>
          <Form.Item name='Banks'>
            <SelectInput
              title='Bank'
              search
              options={bankOptions}
              placeholder='Please select your desired bank'
              searchPlaceholder='Search for a bank name.'
              notFoundContent='No bank found'
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
              placeholder='Please enter the desired tracking ID.'
            />
          </Form.Item>
        </Col>
        <Col xs={24} md={8} lg={8} xl={8} xxl={6}>
          <Form.Item name='ReferenceId'>
            <DefaultInput
              title='Reference ID'
              placeholder='Please enter the desired reference ID.'
            />
          </Form.Item>
        </Col>
        <Col xs={24} md={8} lg={8} xl={8} xxl={6}>
          <Form.Item name='Umr'>
            <DefaultInput
              title='Mandate ID'
              placeholder='Please enter the desired mandate ID.'
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

        <Col
          xs={24}
          md={8}
          lg={24}
          xl={24}
          xxl={18}
          className={styles['custom-btn']}
        >
          <AppButton modifier='primary' onClick={handleSubmitForm}>
            <TickSquare />
            Apply Filters
          </AppButton>
        </Col>
      </Row>
    </Form>
  );
};

export default FilterSection;
