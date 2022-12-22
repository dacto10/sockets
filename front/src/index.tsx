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

const isPwa = window.matchMedia('(display-mode: standalone)').matches;

serviceWorkerRegistration.register({
  onSuccess: async (registration: ServiceWorkerRegistration) => {
    if (!isPwa) {
      await Notification.requestPermission();
      if (Notification.permission === "granted") {
        registration.showNotification("Instalame o te cago a piñas", {
          icon: "https://www.clipartmax.com/png/full/207-2074210_chat-message-mobile-phone-sms-text-texting-icon-texting-icon-png.png"
        }) 
      }
    }
  },
  onUpdate: async (registration: ServiceWorkerRegistration) => {
    await Notification.requestPermission();
    if (Notification.permission === "granted") {
      registration.showNotification("Actualizame o vamos a tener pedos hdp", {
        icon: "https://www.clipartmax.com/png/full/207-2074210_chat-message-mobile-phone-sms-text-texting-icon-texting-icon-png.png"
      })
    }
  }
});

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

