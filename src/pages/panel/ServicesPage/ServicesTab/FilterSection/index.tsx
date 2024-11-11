import CalendarInput from 'components/AppInputs/CalendarInput/index';
import { FC } from 'react';
import { Col, Form, Row } from 'antd';
import SelectInput from 'components/AppInputs/SelectInput';
import styles from './styles.module.scss';
import AppButton from 'components/AppButton';
import TickSquare from 'assets/Icons/TickSquare';
import {
  bankOptions,
  serviceOptions,
  serviceStatusOptions
} from '../SelectInputData';
import { useServicesReportFiltersAtom } from '../atoms';
import { APICallsReportGetQuery } from 'services/rest/services/report/types';

type SReportFormInstance = Exclude<
  APICallsReportGetQuery,
  'RequestDateFrom' | 'RequestDateTo'
> & {
  Date?: [from: string, to: string];
};

const initialValues: APICallsReportGetQuery = {
  Service: [],
  Banks: [],
  Status: [],
  RequestDateFrom: '',
  RequestDateTo: ''
};

const FilterSection: FC = () => {
  const [, setSReportFilters] = useServicesReportFiltersAtom();
  const [serviceReportForm] = Form.useForm<SReportFormInstance>();

  const handleSubmitForm = () => {
    serviceReportForm.validateFields().then((values) => {
      const { Date, ...rest } = values;
      setSReportFilters({
        ...rest,
        RequestDateFrom: Date?.[0],
        RequestDateTo: Date?.[1]
      });
    });
  };

  return (
    <Form
      className={styles['filter-section']}
      form={serviceReportForm}
      initialValues={initialValues}
    >
      <Row gutter={[16, 16]} justify='start'>
        <Col xs={24} md={8} lg={8} xl={8} xxl={6}>
          <Form.Item name='Service'>
            <SelectInput
              title='سرویس'
              options={serviceOptions}
              placeholder='لطفا سرویس مورد نظر خود را انتخاب کنید.'
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
          <Form.Item name='Status'>
            <SelectInput
              title='وضعیت'
              options={serviceStatusOptions}
              placeholder='لطفا وضعیت مورد نظر خود را انتخاب کنید.'
              icon
            />
          </Form.Item>
        </Col>

        <Col xs={24} md={8} lg={8} xl={8} xxl={6}>
          <Form.Item name='Date'>
            <CalendarInput title='بازه تاریخی' isMandate={false} />
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
