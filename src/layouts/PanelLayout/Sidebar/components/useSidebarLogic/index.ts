import routes from 'pages/routes';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useSidebarLogic = () => {
  const [selectedKey, setSelectedKey] = useState('1');
  const [activeSubMenu, setActiveSubMenu] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [reportsExpanded, setReportsExpanded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const disableTab = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
    };

    const tabElement = document.querySelector(
      '.ant-tabs-tab[data-node-key="null"]'
    );
    if (tabElement instanceof HTMLElement) {
      tabElement.addEventListener('click', disableTab);

      return () => {
        tabElement.removeEventListener('click', disableTab);
      };
    }
  }, []);

  useEffect(() => {
    const pathname = location.pathname;
    let key;
    if (pathname.includes('/dashboard')) {
      key = '1';
    } else if (pathname.includes('/reports')) {
      key = '2';
      if (pathname === '/panel/reports/paymans') {
        setActiveSubMenu('paymans');
      } else if (pathname.includes('/transactions')) {
        setActiveSubMenu('transactions');
      } else if (pathname.includes('/services')) {
        setActiveSubMenu('services');
      }
    } else if (pathname.includes('/faq')) {
      key = '3';
    } else if (pathname.includes('/support')) {
      key = '4';
    } else {
      key = '1'; // Default to dashboard
    }
    setSelectedKey(key);
  }, [location]);

  useEffect(() => {
    if (selectedKey !== '2') {
      setReportsExpanded(false);
      setActiveSubMenu('');
    }
  }, [selectedKey]);

  const handleSubMenuClick = (subMenu: string, event: React.MouseEvent) => {
    event.stopPropagation();
    setSelectedKey('2'); // Activate the Reports tab
    setActiveSubMenu(subMenu);
    switch (subMenu) {
      case 'paymans':
        navigate(routes.panel.paymans.path());

        break;
      case 'transactions':
        navigate(routes.panel.transactions.path());

        break;
      case 'services':
        navigate(routes.panel.services.path());
        break;
      default:
        break;
    }
  };

  const handleSidebarOpen = () => {
    setSidebarOpen(!sidebarOpen);
    setReportsExpanded(false);
  };

  const handleTabChange = (key: string) => {
    switch (key) {
      case '1':
        setSelectedKey(key);
        setReportsExpanded(false);
        navigate(routes.panel.dashboard.path());
        break;

      case '2':
        setReportsExpanded(!reportsExpanded);
        break;

      case '3':
        setSelectedKey(key);
        setReportsExpanded(false);
        navigate(routes.panel.faq.path());
        break;

      case '4':
        setSelectedKey(key);
        setReportsExpanded(false);
        navigate(routes.panel.support.path());
        break;

      default:
        break;
    }
  };

  return {
    selectedKey,
    activeSubMenu,
    sidebarOpen,
    reportsExpanded,
    handleSubMenuClick,
    handleSidebarOpen,
    handleTabChange
  };
};
