import GreenDot from 'assets/Icons/GreenDot';
import RedDot from 'assets/Icons/RedDot';
import OrangeDot from 'assets/Icons/OrangeDot';
import YellowDot from 'assets/Icons/YellowDot';

const bankOptions = [
  { key: '1', label: 'saman', value: 'Saman' },
  { key: '2', label: 'mellat', value: 'Mellat' },
  { key: '3', label: 'tejarat', value: 'Tejarat' },
  { key: '4', label: 'melli', value: 'Melli' }
];
const transactionStatusOptions = [
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
const paymanStatusOptions = [
  {
    key: '1',
    label: 'active',
    value: 'Active',
    icon: <GreenDot />
  },
  {
    key: '2',
    label: 'inactive',
    value: 'Inactive',
    icon: <RedDot />
  },
  {
    key: '3',
    label: 'in progress',
    value: 'In Progress',
    icon: <YellowDot />
  }
];
export { bankOptions, transactionStatusOptions, paymanStatusOptions };
