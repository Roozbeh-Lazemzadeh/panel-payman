import CalendarInput from 'components/AppInputs/CalendarInput/index';
import { FC } from 'react';
import { Col, Form, Row } from 'antd';
import SelectInput from 'components/AppInputs/SelectInput';
import styles from './styles.module.scss';
import AppButton from 'components/AppButton';
import TickSquare from 'assets/Icons/TickSquare';
import { bankOptions, serviceOptions } from '../SelectInputData';
import { useServicesStatisticFiltersAtom } from '../atoms';
import { APICallsStatisticGetQuery } from 'services/rest/services/statistic/types';

type SStatisticFormInstance = Exclude<
  APICallsStatisticGetQuery,
  'RequestDateFrom' | 'RequestDateTo'
> & {
  Date?: [from: string, to: string];
};

const initialValues: APICallsStatisticGetQuery = {
  Service: [],
  Banks: [],
  RequestDateFrom: '',
  RequestDateTo: ''
};

const FilterSection: FC = () => {
  const [, setSStatisticFilters] = useServicesStatisticFiltersAtom();
  const [serviceStatisticForm] = Form.useForm<SStatisticFormInstance>();

  const handleSubmitForm = () => {
    serviceStatisticForm.validateFields().then((values) => {
      const { Date, ...rest } = values;
      setSStatisticFilters({
        ...rest,
        RequestDateFrom: Date?.[0],
        RequestDateTo: Date?.[1]
      });
    });
  };

  return (
    <Form
      className={styles['filter-section']}
      form={serviceStatisticForm}
      initialValues={initialValues}
    >
      <Row gutter={[16, 10]} justify='start'>
        <Col xs={24} md={8} lg={8} xl={8} xxl={6}>
          <Form.Item name='Service'>
            <SelectInput
              title='Service'
              options={serviceOptions}
              placeholder='Please select your desired service.'
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
              searchPlaceholder='Search for the bank name.'
              notFoundContent='No bank found'
            />
          </Form.Item>
        </Col>

        <Col xs={24} md={8} lg={8} xl={8} xxl={6}>
          <Form.Item name='Date'>
            <CalendarInput title='Date Range' isMandate={false} />
          </Form.Item>
        </Col>

        <Col
          xs={24}
          md={8}
          lg={24}
          xl={24}
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
