import { nanoid } from 'nanoid';
import { ReportsGetRequest, ReportsGetResponse } from './types';

// Create generator functions for each report type
const generateTransactionsData = (): ReportsGetResponse['result'] => [
  {
    id: nanoid(),
    amount: Math.floor(Math.random() * 1_000 + 1),
    title: 'Total Amount of Successful Transactions',
    updated_at: new Date().toISOString(),
    alert: ''
  },
  {
    id: nanoid(),
    amount: Math.floor(Math.random() * 1_000 + 1),
    title: 'Number of Successful Transactions',
    updated_at: new Date().toISOString(),
    alert: ''
  },
  {
    id: nanoid(),
    amount: Math.floor(Math.random() * 1_000 + 1),
    title: 'Number of Unsuccessful Transactions (Insufficient Balance)',
    updated_at: new Date().toISOString(),
    alert: 'Number of Unsuccessful Transactions'
  },
  {
    id: nanoid(),
    amount: Math.floor(Math.random() * 1_000 + 1),
    title: 'Number of Unsuccessful Transactions (Other Reasons)',
    updated_at: new Date().toISOString(),
    alert: 'Other Reasons'
  }
];

const generatePaymansData = (): ReportsGetResponse['result'] => [
  {
    id: nanoid(),
    amount: Math.floor(Math.random() * 1_000 + 1),
    title: 'Number of New Contracts',
    updated_at: new Date().toISOString(),
    alert: ''
  },
  {
    id: nanoid(),
    amount: Math.floor(Math.random() * 1_000 + 1),
    title: 'Number of Canceled Contracts',
    updated_at: new Date().toISOString(),
    alert: ''
  },
  {
    id: nanoid(),
    amount: Math.floor(Math.random() * 1_000 + 1),
    title: 'Number of Expired Contracts',
    updated_at: new Date().toISOString(),
    alert: ''
  },
  {
    id: nanoid(),
    amount: Math.floor(Math.random() * 1_000 + 1),
    title: 'Sales Per Contract',
    updated_at: new Date().toISOString(),
    alert: 'Sales Per Contract'
  }
];

// Generate fresh data for each request
const getMockData = (
  reportType: ReportsGetRequest['pathParams']['report_type']
): ReportsGetResponse => ({
  result:
    reportType === 'transactions'
      ? generateTransactionsData()
      : generatePaymansData()
});

export default getMockData;
