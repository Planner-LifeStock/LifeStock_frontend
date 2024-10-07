import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/main';
import LoginPage from './pages/login';
import RankPage from './pages/rank';
import MyAssetPage from './pages/assets';
import SalesRecordsPage from './pages/salesrecords';
import RegisterPage from './pages/RegisterPage';
import GraphBox from './layouts/GraphBox';
import CandleStick from './components/Candlestick';
import ApexChart from './components/ApexChart';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/rank" element={<RankPage />} />
        <Route path="/myasset" element={<MyAssetPage />} />
        <Route path="/salesrecords" element={<SalesRecordsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
