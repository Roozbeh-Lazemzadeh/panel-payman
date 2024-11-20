const routes = {
  auth: { login: { path: () => '/auth/login', title: 'ورود' } },
  public: { home: { path: () => '/', title: 'خانه' } },
  panel: {
    dashboard: {
      path: () => '/panel/dashboard',
      title: 'dashboard'
    },
    paymans: {
      path: () => '/panel/reports/paymans',
      title: 'پیمان‌ها'
    },
    transactions: {
      path: () => '/panel/reports/transactions',
      title: 'تراکنش‌ها'
    },
    services: {
      path: () => '/panel/reports/services',
      title: 'فراخوانی سرویس‌ها'
    },
    faq: {
      path: () => '/panel/faq',
      title: 'پرسش‌های متداول'
    },
    support: {
      path: () => '/panel/support',
      title: 'پشتیبان فنی سیستم'
    }
  }
};

export default routes;
