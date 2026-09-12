import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ThemeProvider from './components/ThemeProvider';
import App from './App.jsx';
import './styles/globals.css';
import './styles/animations.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
