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
              title='دسته بندی پیمان‌ها'
              options={paymanCategories}
              placeholder='لطفا دسته مورد نظر خود را انتخاب کنید.'
              icon
              singleSelect
            />
          </Form.Item>
        </Col>

        <Col xs={24} md={8} lg={8} xl={8} xxl={6}>
          <Form.Item name='StartDate'>
            <CalendarInput title='بازه تاریخ شروع پیمان' isMandate />
          </Form.Item>
        </Col>
        <Col xs={24} md={8} lg={8} xl={8} xxl={6}>
          <Form.Item name='EndDate'>
            <CalendarInput title='بازه تاریخ پایان پیمان' isMandate />
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
            اعمال فیلتر
          </AppButton>
        </Col>
      </Row>
    </Form>
  );
};

export default FilterSection;
