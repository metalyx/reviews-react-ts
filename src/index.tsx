import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Reviews from './pages/Reviews/Reviews';

const container = document.getElementById('root');

if (container) {
    const root = createRoot(container);
    root.render(<Reviews />);
} else {
    throw new Error ('App crashed... Document\'s root not found.');
}
