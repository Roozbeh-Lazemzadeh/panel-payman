import AppAntdProvider from 'providers/AppAntdProvider';
import AppJotaiProvider from 'providers/AppJotaiProvider';
import AppQueryClientProvider from 'providers/AppQueryClientProvider';
import AppRouterProvider from 'providers/AppRouterProvider';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <ToastContainer />
    <AppJotaiProvider>
      <AppQueryClientProvider>
        <AppAntdProvider>
          <AppRouterProvider />
        </AppAntdProvider>
      </AppQueryClientProvider>
    </AppJotaiProvider>
  </StrictMode>
);
