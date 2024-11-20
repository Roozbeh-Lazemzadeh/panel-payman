import GreenDot from 'assets/Icons/GreenDot';
import RedDot from 'assets/Icons/RedDot';
import OrangeDot from 'assets/Icons/OrangeDot';
import YellowDot from 'assets/Icons/YellowDot';

const serviceOptions = [
  {
    key: '1',
    label: 'direct-fund-withdrawal-tracking',
    value: 'Direct Fund Withdrawal Tracking',
    rawLabel: 'Direct Fund Withdrawal Tracking'
  },
  {
    key: '2',
    label: 'payman-transactions',
    value: 'Payman Transactions',
    rawLabel: 'Payman Transactions'
  },
  {
    key: '3',
    label: 'receive-account-statement-list',
    value: 'Receive Account Statement List from Boom',
    rawLabel: 'Receive Account Statement List from Boom'
  },
  {
    key: '4',
    label: 'transfer-approval',
    value: 'Transfer Approval',
    rawLabel: 'Transfer Approval'
  },
  {
    key: '5',
    label: 'store-contract-in-database',
    value: 'Store Contract in Database',
    rawLabel: 'Store Contract in Database'
  },
  {
    key: '6',
    label: 'receive-payman-token',
    value: 'Receive Payman Token',
    rawLabel: 'Receive Payman Token'
  },
  {
    key: '7',
    label: 'institute-access-list',
    value: 'Institute Access List',
    rawLabel: 'Institute Access List'
  },
  {
    key: '8',
    label: 'create-payman',
    value: 'Create Payman',
    rawLabel: 'Create Payman'
  },
  {
    key: '9',
    label: 'update-payman',
    value: 'Update Payman',
    rawLabel: 'Update Payman'
  },
  {
    key: '10',
    label: 'receive-payman-id',
    value: 'Receive Payman ID',
    rawLabel: 'Receive Payman ID'
  },
  {
    key: '11',
    label: 'change-payman-status',
    value: 'Change Payman Status',
    rawLabel: 'Change Payman Status'
  },
  {
    key: '12',
    label: 'track-create-payman',
    value: 'Track Payman Creation',
    rawLabel: 'Track Payman Creation'
  }
];

const bankOptions = [
  { key: '1', label: 'saman', value: 'Saman' },
  { key: '2', label: 'mellat', value: 'Mellat' },
  { key: '3', label: 'tejarat', value: 'Tejarat' },
  { key: '4', label: 'melli', value: 'Melli' }
];

const serviceStatusOptions = [
  {
    key: '1',
    label: 'successful',
    value: 'Successful',
    icon: <GreenDot />
  },
  {
    key: '2',
    label: 'unsuccessful',
    value: 'Unsuccessful',
    icon: <RedDot />
  },
  {
    key: '3',
    label: 'pending',
    value: 'Pending Approval',
    icon: <OrangeDot />
  },
  {
    key: '4',
    label: 'canceled',
    value: 'Canceled',
    icon: <YellowDot />
  },
  {
    key: '5',
    label: 'expired',
    value: 'Expired',
    icon: <RedDot />
  }
];

export { serviceOptions, serviceStatusOptions, bankOptions };
