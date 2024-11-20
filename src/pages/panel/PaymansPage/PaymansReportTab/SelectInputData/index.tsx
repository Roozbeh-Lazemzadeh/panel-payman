import GreenDot from 'assets/Icons/GreenDot';
import RedDot from 'assets/Icons/RedDot';
import YellowDot from 'assets/Icons/YellowDot';

const bankOptions = [
  { key: '1', label: 'saman', value: 'Saman' },
  { key: '2', label: 'mellat', value: 'Mellat' },
  { key: '3', label: 'tejarat', value: 'Tejarat' },
  { key: '4', label: 'melli', value: 'Melli' }
];

const paymanStatusOptions = [
  {
    key: '1',
    label: 'successful',
    value: 'Active',
    icon: <GreenDot />
  },
  {
    key: '2',
    label: 'unsuccessful',
    value: 'Inactive',
    icon: <RedDot />
  },
  {
    key: '3',
    label: 'pending',
    value: 'In Progress',
    icon: <YellowDot />
  }
];

export { bankOptions, paymanStatusOptions };
