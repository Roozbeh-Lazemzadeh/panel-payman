import CalendarInput from 'components/AppInputs/CalendarInput/index';
import { FC } from 'react';
import { Col, Form, Row } from 'antd';
import SelectInput from 'components/AppInputs/SelectInput';
import styles from './styles.module.scss';
import AppButton from 'components/AppButton';
import TickSquare from 'assets/Icons/TickSquare';
import { bankOptions, paymanCategories } from '../SelectInputData';
import { usePStatisticFiltersAtom } from '../atoms';
import { PaymansStatisticGetQuery } from 'services/rest/paymans/statistic/types';

type PStatisticFormInstance = Exclude<
  PaymansStatisticGetQuery,
  'PaymanStartDate' | 'PaymanEndDate'
> & {
  StartDate?: [from: string, to: string];
  EndDate?: [from: string, to: string];
};

const initialValues: PaymansStatisticGetQuery = {
  Banks: [],
  GroupPaymansType: '',
  PaymanStartDate: [],
  PaymanEndDate: []
};

const FilterSection: FC = () => {
  const [, setPStatisticFilters] = usePStatisticFiltersAtom();
  const [paymansStatisticForm] = Form.useForm<PStatisticFormInstance>();

  const handleSubmitForm = () => {
    paymansStatisticForm.validateFields().then((values) => {
      const { PaymanStartDate, PaymanEndDate, ...rest } = values;

      setPStatisticFilters({
        ...rest,
        PaymanStartDate,
        PaymanEndDate
      });
    });
  };

  return (
    <Form
      className={styles['filter-section']}
      form={paymansStatisticForm}
      initialValues={initialValues}
    >
      <Row gutter={[16, 10]} justify='start'>
        <Col xs={24} md={8} lg={8} xl={8} xxl={6}>
          <Form.Item name='Banks'>
            <SelectInput
              title='Bank'
              search
              options={bankOptions}
              placeholder='Please select your desired bank'
              searchPlaceholder='Search by bank name.'
              notFoundContent='No bank found'
            />
          </Form.Item>
        </Col>

        <Col xs={24} md={8} lg={8} xl={8} xxl={6}>
          <Form.Item name='GroupTransactionType'>
            <SelectInput
              title='Mandate Categories'
              options={paymanCategories}
              placeholder='Please select your desired category.'
              icon
              singleSelect
            />
          </Form.Item>
        </Col>

        <Col xs={24} md={8} lg={8} xl={8} xxl={6}>
          <Form.Item name='StartDate'>
            <CalendarInput title='Start Date Range of Mandate' isMandate />
          </Form.Item>
        </Col>
        <Col xs={24} md={8} lg={8} xl={8} xxl={6}>
          <Form.Item name='EndDate'>
            <CalendarInput title='End Date Range of Mandate' isMandate />
          </Form.Item>
        </Col>

        <Col
          xs={24}
          md={16}
          lg={16}
          xl={16}
          xxl={24}
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
