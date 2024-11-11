import CalendarInput from 'components/AppInputs/CalendarInput/index';
import { FC } from 'react';
import { Col, Form, Row } from 'antd';
import SelectInput from 'components/AppInputs/SelectInput';
import styles from './styles.module.scss';
import AppButton from 'components/AppButton';
import TickSquare from 'assets/Icons/TickSquare';
import PriceInput from 'components/AppInputs/PriceInput';
import { bankOptions, transactionCategoryOptions } from '../SelectInputData';
import { useTStatisticFiltersAtom } from '../atoms';
import { TransactionsStatisticGetQuery } from 'services/rest/transactions/statistic/types';

type TStatisticalReportFormInstance = Exclude<
  TransactionsStatisticGetQuery,
  | 'FromTransactionDate'
  | 'ToTransactionDate'
  | 'FromTransactionAmount'
  | 'ToTransactionAmount'
> & {
  Date?: [from: string, to: string];
  Amount?: [from: string, to: string];
};

const initialValues: TransactionsStatisticGetQuery = {
  Banks: [],
  GroupTransactionType: '',
  FromDate: '',
  ToDate: '',
  FromAmount: '',
  ToAmount: ''
};

const FilterSection: FC = () => {
  const [, setTStatisticFilters] = useTStatisticFiltersAtom();
  const [transactionStatisticalReportForm] =
    Form.useForm<TStatisticalReportFormInstance>();

  const handleSubmitForm = () => {
    transactionStatisticalReportForm.validateFields().then((values) => {
      const { Date, Amount, ...rest } = values;

      setTStatisticFilters({
        ...rest,
        FromDate: Date?.[0],
        ToDate: Date?.[1],
        FromAmount: Amount?.[0],
        ToAmount: Amount?.[1]
      });
    });
  };

  return (
    <Form
      className={styles['filter-section']}
      form={transactionStatisticalReportForm}
      initialValues={initialValues}
    >
      <Row gutter={[16, 16]} justify='start'>
        <Col xs={24} md={8} lg={8} xl={8} xxl={6}>
          <Form.Item name='Banks'>
            <SelectInput
              title='بانک'
              search
              options={bankOptions}
              placeholder='لطفا بانک مورد نظر خود را انتخاب کنید'
              searchPlaceholder='نام بانک را جست‌و‌جو کنید.'
              notFoundContent='بانکی یافت نشد'
            />
          </Form.Item>
        </Col>

        <Col xs={24} md={8} lg={8} xl={8} xxl={6}>
          <Form.Item name='GroupTransactionType'>
            <SelectInput
              title='دسته بندی تراکنش ها'
              options={transactionCategoryOptions}
              placeholder='لطفا دسته مورد نظر خود را انتخاب کنید.'
              icon
              singleSelect
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

        <Col
          xs={24}
          md={8}
          lg={16}
          xl={16}
          xxl={24}
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
