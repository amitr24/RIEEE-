import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Create container for the extension
const container = document.createElement('div');
container.id = 'moodspace-extension-root';
document.body.appendChild(container);

// Apply styles to ensure the extension floats above the page content
const styles = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  zIndex: '999999',
  width: '400px',
  maxWidth: '90vw'
};

Object.assign(container.style, styles);

// Create root and render app
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);