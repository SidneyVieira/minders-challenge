import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import HousesList from './pages/houses-list';
import HouseDetail from './pages/houses-detail';
import './css/layout.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HousesList />} />
        <Route path="houses/:id" element={<HouseDetail />} />
      </Route>
    </Routes>
  </BrowserRouter>
);