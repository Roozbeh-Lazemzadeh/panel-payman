import CustomTooltip from 'components/Helpers/CustomToolTip';
import Payman from 'assets/Icons/Payman';
import PaymanActive from 'assets/Icons/PaymanActive';
import Document from 'assets/Icons/Document';
import DocumentActive from 'assets/Icons/DocumentActive';
import Send from 'assets/Icons/Send';
import SendActive from 'assets/Icons/SendActive';
import styles from './styles.module.scss';
import { useLocation } from 'react-router-dom';
import routes from 'pages/routes';

type SidebarSubMenuProps = {
  sidebarOpen: boolean;
  reportsExpanded: boolean;
  handleSubMenuClick: (subMenu: string, event: React.MouseEvent) => void;
};

const SidebarSubMenu: React.FC<SidebarSubMenuProps> = ({
  sidebarOpen,
  reportsExpanded,
  handleSubMenuClick
}) => {
  const location = useLocation();
  const pathName = location.pathname;

  const isPaymansActive = pathName.includes(routes.panel.paymans.path());
  const isTransactionsActive = pathName.includes(
    routes.panel.transactions.path()
  );
  const isServiceActive = pathName.includes(routes.panel.services.path());

  return (
    <div
      className={`${styles['reports-submenu']} ${reportsExpanded ? styles.active : ''} ${!sidebarOpen ? styles.close : ''}`}
    >
      {sidebarOpen && (
        <>
          <div
            className={`${styles['first-box']} ${isPaymansActive ? styles.active : ''}`}
          ></div>
          <div
            className={`${styles['middle-box']} ${isTransactionsActive ? styles.active : ''}`}
          ></div>
          <div
            className={`${styles['end-box']} ${isServiceActive ? styles.active : ''}`}
          ></div>
        </>
      )}
      <CustomTooltip
        sidebarOpen={sidebarOpen}
        align={{ offset: [29, 0] }}
        title='پیمان‌ها'
      >
        <div
          className={`${styles['submenu-item']} ${isPaymansActive ? styles.active : ''}`}
          onClick={(e) => handleSubMenuClick('paymans', e)}
        >
          {isPaymansActive ? <PaymanActive /> : <Payman />}
          {sidebarOpen && <span>پیمان‌ها</span>}
        </div>
      </CustomTooltip>
      <CustomTooltip
        sidebarOpen={sidebarOpen}
        align={{ offset: [29, 0] }}
        title='تراکنش‌ها'
      >
        <div
          className={`${styles['submenu-item']} ${isTransactionsActive ? styles.active : ''}`}
          onClick={(e) => handleSubMenuClick('transactions', e)}
        >
          {isTransactionsActive ? <DocumentActive /> : <Document />}
          {sidebarOpen && <span>تراکنش‌ها</span>}
        </div>
      </CustomTooltip>
      <CustomTooltip
        sidebarOpen={sidebarOpen}
        align={{ offset: [29, 0] }}
        title='فراخوانی سرویس‌ها'
      >
        <div
          className={`${styles['submenu-item']} ${isServiceActive ? styles.active : ''}`}
          onClick={(e) => handleSubMenuClick('services', e)}
        >
          {isServiceActive ? <SendActive /> : <Send />}
          {sidebarOpen && <span>فراخوانی سرویس‌ها</span>}
        </div>
      </CustomTooltip>
    </div>
  );
};

export default SidebarSubMenu;
