import React from 'react';
import ReactDOM from 'react-dom';

import 'assets/css/tailwind.css';

import * as serviceWorker from './serviceWorkerRegistration';

import { HelmetProvider } from 'react-helmet-async';

import AppMain from 'app/app-main';
import { ErrorBoundary } from 'app/domains/Common/components/error-boundary';

const MOUNT_NODE = document.getElementById('root') as HTMLElement;

ReactDOM.render(
  <HelmetProvider>
    <React.StrictMode>
      <ErrorBoundary>
        <AppMain />
      </ErrorBoundary>
    </React.StrictMode>
  </HelmetProvider>,
  MOUNT_NODE,
);

serviceWorker.register();
