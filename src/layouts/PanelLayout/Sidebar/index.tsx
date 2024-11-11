import SidebarHeader from './components/SidebarHeader';
import SidebarTabs from './components/SidebarTabs';
import SidebarSubMenu from './components/SidebarSubMenu';
import SidebarFooter from './components/SidebarFooter';
import CustomTooltip from 'components/Helpers/CustomToolTip';
import { useSidebarLogic } from './components/useSidebarLogic';
import { useLocation } from 'react-router-dom';
import routes from 'pages/routes';

import ArrowDown2 from 'assets/Icons/ArrowDown2';
import ArrowLeft2 from 'assets/Icons/ArrowLeft2';
import ArrowLeft from 'assets/Icons/ArrowLeft';
import SupportActive from 'assets/Icons/SupportActive';
import Support from 'assets/Icons/Support';
import FaqActive from 'assets/Icons/FaqActive';
import Faq from 'assets/Icons/Faq';
import ReportActive from 'assets/Icons/ReportActive';
import Report from 'assets/Icons/Report';
import DashboardActive from 'assets/Icons/DashboardActive';
import Dashboard from 'assets/Icons/Dashboard';
import styles from './styles.module.scss';

const Sidebar: React.FC = () => {
  const {
    selectedKey,
    sidebarOpen,
    reportsExpanded,
    handleSubMenuClick,
    handleSidebarOpen,
    handleTabChange
  } = useSidebarLogic();
  const location = useLocation();
  const activeSubMenu = [
    routes.panel.paymans.path(),
    routes.panel.transactions.path(),
    routes.panel.services.path()
  ].some((path) => location.pathname.includes(path));

  const getReportsArrowIcon = () => {
    if (selectedKey !== '2') {
      return <ArrowLeft2 />;
    }
    if (activeSubMenu && reportsExpanded) {
      return <ArrowDown2 />;
    } else if (activeSubMenu && !reportsExpanded) {
      return <ArrowLeft />;
    } else {
      return null;
    }
  };

  const items = [
    {
      label: (
        <CustomTooltip
          sidebarOpen={sidebarOpen}
          align={{ offset: [50, 0] }}
          title='داشبورد'
        >
          <span
            className={`${styles.text} ${!sidebarOpen ? styles.hidden : ''}`}
          >
            داشبورد
          </span>
        </CustomTooltip>
      ),
      key: '1',
      icon: selectedKey === '1' ? <DashboardActive /> : <Dashboard />
    },
    {
      label: (
        <div
          className={styles['reports-wrapper']}
          onClick={() => handleTabChange('2')}
        >
          <CustomTooltip
            sidebarOpen={sidebarOpen}
            align={{ offset: [50, 0] }}
            title='گزارشات'
          >
            <span
              className={`${styles.text} ${!sidebarOpen ? styles.hidden : ''}`}
            >
              گزارشات
            </span>
          </CustomTooltip>
          {getReportsArrowIcon()}
          <SidebarSubMenu
            sidebarOpen={sidebarOpen}
            reportsExpanded={reportsExpanded}
            handleSubMenuClick={handleSubMenuClick}
          />
        </div>
      ),
      key: '2',
      icon: selectedKey === '2' ? <ReportActive /> : <Report />
    },
    {
      label: (
        <CustomTooltip
          sidebarOpen={sidebarOpen}
          align={{ offset: [50, 0] }}
          title='پرسش‌های متداول'
        >
          <span
            className={`${styles.text} ${!sidebarOpen ? styles.hidden : ''}`}
          >
            پرسش‌های متداول
          </span>
        </CustomTooltip>
      ),
      key: '3',
      icon:
        selectedKey === '3' ? (
          <FaqActive />
        ) : (
          <div className={styles['faq-tab-svg']}>
            <Faq />
          </div>
        )
    },
    {
      label: (
        <CustomTooltip
          sidebarOpen={sidebarOpen}
          align={{ offset: [50, 0] }}
          title='پشتیبان فنی سیستم'
        >
          <span
            className={`${styles.text} ${!sidebarOpen ? styles.hidden : ''}`}
          >
            پشتیبان فنی سیستم
          </span>
        </CustomTooltip>
      ),
      key: '4',
      icon: selectedKey === '4' ? <SupportActive /> : <Support />
    }
  ];

  return (
    <div
      className={`${styles['sidebar-wrapper']} ${!sidebarOpen ? styles.close : ''} ${
        reportsExpanded ? styles.reportsExpanded : ''
      }`}
    >
      <SidebarHeader
        sidebarOpen={sidebarOpen}
        handleSidebarOpen={handleSidebarOpen}
      />
      <SidebarTabs
        selectedKey={selectedKey}
        handleTabChange={handleTabChange}
        items={items}
      />
      <SidebarFooter sidebarOpen={sidebarOpen} />
    </div>
  );
};

export default Sidebar;
