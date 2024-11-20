import { PaymansReportGetResponse } from './types';

const mock: PaymansReportGetResponse = {
  result: Array.from({ length: 110 }, (_, i) => ({
    Id: (i + 1).toString(),
    Name: [
      'Babak Jafari',
      'Ali Rezaei',
      'Maryam Naderi',
      'Saeed Mousavi',
      'Babak Jafari',
      'Masoud Fallahi',
      'Reza Mohammadi',
      'Nahid Khodadadi',
      'Leila Heydari',
      'Farhad Mousavi',
      'Sara Nikfar'
    ][Math.floor(Math.random() * 4)],
    NationalCode: String(1000000000 + Math.floor(Math.random() * 9000000000)),
    PhoneNumber:
      '09' + String(100000000 + Math.floor(Math.random() * 900000000)),
    SourceBankName: [
      'Mellat',
      'Refah',
      'Parsian',
      'Keshavarzi',
      'Tejarat',
      'Saman',
      'Melli',
      'Pasargad',
      'Saderat'
    ][Math.floor(Math.random() * 4)],
    Status: ['Active', 'Inactive'][Math.floor(Math.random() * 2)],
    Umr: String(100000 + Math.floor(Math.random() * 900000)),
    TraceId: String(100000 + Math.floor(Math.random() * 900000)),
    PaymanStartDate: `2023/${Math.floor(1 + Math.random() * 12)
      .toString()
      .padStart(2, '0')}/${Math.floor(1 + Math.random() * 28)
      .toString()
      .padStart(2, '0')}`,
    PaymanEndDate: `2023/${Math.floor(1 + Math.random() * 12)
      .toString()
      .padStart(2, '0')}/${Math.floor(1 + Math.random() * 28)
      .toString()
      .padStart(2, '0')}`
  }))
};

export default mock;
