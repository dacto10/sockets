import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { io } from 'socket.io-client';
import { configureSocket } from './socket';
import { store } from './store/store';
import App from './views/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { theme } from "./theme/index"
import './assets/scss/index.scss';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const container = document.getElementById('root')!;
const root = createRoot(container);
export const socket = io("http://localhost:5000");
configureSocket(socket);

root.render(
  <Router>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </React.StrictMode>
  </Router>
);

serviceWorkerRegistration.register();