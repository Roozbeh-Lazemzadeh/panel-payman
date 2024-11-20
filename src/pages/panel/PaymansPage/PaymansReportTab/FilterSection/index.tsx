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
      <Row gutter={[16, 10]} justify='start'>
        <Col xs={24} md={8} lg={8} xl={8} xxl={6}>
          <Form.Item name='Debtor'>
            <DefaultInput
              title='User'
              placeholder='Please enter the name, number, or national ID of user.'
            />
          </Form.Item>
        </Col>
        <Col xs={24} md={8} lg={8} xl={8} xxl={6}>
          <Form.Item name='Banks'>
            <SelectInput
              title='Bank'
              search
              options={bankOptions}
              placeholder='Please select your desired bank.'
              searchPlaceholder='Search for the bank name.'
              notFoundContent='No bank found.'
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
          <Form.Item name='StartDate'>
            <CalendarInput title='Start Date Range for Mandate' isMandate />
          </Form.Item>
        </Col>
        <Col xs={24} md={8} lg={8} xl={8} xxl={6}>
          <Form.Item name='EndDate'>
            <CalendarInput title='End Date Range for Mandate' isMandate />
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
            Apply Filters
          </AppButton>
        </Col>
      </Row>
    </Form>
  );
};

export default FilterSection;
