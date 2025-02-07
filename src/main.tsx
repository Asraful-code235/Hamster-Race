import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import AiHamsterRacesPage from './pages/ai-hamster-races.tsx';
import PreRecordedHamsterRacesPage from './pages/pre-recorded-hamster-races.tsx';
import LiveSteamedHamsterChampionsPage from './pages/live-steamed-hamster-champions.tsx';
import Navbar from './components/nav-bar.tsx';
import HomePage from './pages/home.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/ai-hamster-races' element={<AiHamsterRacesPage />} />
        <Route
          path='/pre-recorded-hamster-races'
          element={<PreRecordedHamsterRacesPage />}
        />
        <Route
          path='/live-streamed-hamster-championships'
          element={<LiveSteamedHamsterChampionsPage />}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
