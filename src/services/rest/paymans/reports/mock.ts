import { PaymansReportGetResponse } from './types';

const mock: PaymansReportGetResponse = {
  result: Array.from({ length: 110 }, (_, i) => ({
    Id: (i + 1).toString(),
    Name: [
      'بابک جعفری',
      'علی رضایی',
      'مریم نادری',
      'سعید موسوی',
      'بابک جعفری',
      'مسعود فلاحی',
      'رضا محمدی',
      'ناهید خدادادی',
      'لیلا حیدری',
      'فرهاد موسوی',
      'سارا نیک‌فر'
    ][Math.floor(Math.random() * 4)],
    NationalCode: String(1000000000 + Math.floor(Math.random() * 9000000000)),
    PhoneNumber:
      '09' + String(100000000 + Math.floor(Math.random() * 900000000)),
    SourceBankName: [
      'ملت',
      'رفاه',
      'پارسیان',
      'کشاورزی',
      'تجارت',
      'سامان',
      'ملی',
      'پاسارگاد',
      'صادرات'
    ][Math.floor(Math.random() * 4)],
    Status: ['فعال', 'غیرفعال'][Math.floor(Math.random() * 2)],
    Umr: String(100000 + Math.floor(Math.random() * 900000)),
    TraceId: String(100000 + Math.floor(Math.random() * 900000)),
    PaymanStartDate: `1402/${Math.floor(1 + Math.random() * 11)
      .toString()
      .padStart(2, '0')}/${Math.floor(1 + Math.random() * 29)
      .toString()
      .padStart(2, '0')}`,
    PaymanEndDate: `1402/${Math.floor(1 + Math.random() * 11)
      .toString()
      .padStart(2, '0')}/${Math.floor(1 + Math.random() * 29)
      .toString()
      .padStart(2, '0')}`
  }))
};

export default mock;
