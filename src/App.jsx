import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './pages/main'
import LoginPage from './pages/login'
import RankPage from './pages/rank'
import MyAssetPage from './pages/assets'
import SalesRecordsPage from './pages/salesrecords'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/rank" element={<RankPage />} />
        <Route path="/myasset" element={<MyAssetPage />} />
        <Route path="/salesrecords" element={<SalesRecordsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
