import CalendarInput from 'components/AppInputs/CalendarInput/index';
import DefaultInput from 'components/AppInputs/DefaultInput';
import { FC } from 'react';
import { Col, Form, Row } from 'antd';
import SelectInput from 'components/AppInputs/SelectInput';
import styles from './styles.module.scss';
import AppButton from 'components/AppButton';
import TickSquare from 'assets/Icons/TickSquare';
import { bankOptions, paymanStatusOptions } from '../SelectInputData';
import { usePReportFiltersAtom } from '../atoms';
import { PaymansReportGetQuery } from 'services/rest/paymans/reports/types';

type PReportFormInstance = Exclude<
  PaymansReportGetQuery,
  'FromPaymanDate' | 'ToPaymanDate'
> & {
  StartDate?: [from: string, to: string];
  EndDate?: [from: string, to: string];
};

const initialValues: PaymansReportGetQuery = {
  Debtor: '',
  Banks: [],
  MandateStatus: '',
  Umr: '',
  TraceId: '',
  FromPaymanDate: [],
  ToPaymanDate: []
};

const FilterSection: FC = () => {
  const [, setPReportFilters] = usePReportFiltersAtom();
  const [paymanReportForm] = Form.useForm<PReportFormInstance>();

  const handleSubmitForm = () => {
    paymanReportForm.validateFields().then((values) => {
      const { StartDate, EndDate, ...rest } = values;

      setPReportFilters({
        ...rest,
        FromPaymanDate: StartDate,
        ToPaymanDate: EndDate
      });
    });
  };

  return (
    <Form
      className={styles['filter-section']}
      form={paymanReportForm}
      initialValues={initialValues}
    >
      <Row gutter={[16, 16]} justify='start'>
        <Col xs={24} md={8} lg={8} xl={8} xxl={6}>
          <Form.Item name='Debtor'>
            <DefaultInput
              title='کاربر'
              placeholder='لطفا نام٬شماره٬کد‌ملی کاربر مورد نظر را وارد کنید'
            />
          </Form.Item>
        </Col>
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
          <Form.Item name='Umr'>
            <DefaultInput
              title='شناسه پیمان'
              placeholder='لطفا شناسه پیمان مورد نظر خود را وارد کنید.'
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
              placeholder='لطفا شناسه پیگیری مورد نظر خود را وارد کنید.'
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
          md={8}
          lg={16}
          xl={16}
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
