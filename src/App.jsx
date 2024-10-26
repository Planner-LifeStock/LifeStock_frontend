import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/ThemeStyles';

import TopBar from './layouts/TopBar';
import GlobalStyles from './styles/GlobalStyles';
import MainPage from './pages/main';
import MyAssetPage from './pages/myAssets';
import SalesHistoryPage from './pages/salesHistory';
import RankPage from './pages/rank';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';

const Layout = () => {
  const location = useLocation();
  
  const isLoginPage = location.pathname === '/login';
  const isRegisterPage = location.pathname === '/register';

  const showTopBar = !isLoginPage && !isRegisterPage;

  return (
    <>
      {showTopBar && <TopBar />}
    </>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/rank" element={<RankPage />} />
          <Route path="/myasset" element={<MyAssetPage />} />
          <Route path="/salesrecords" element={<SalesHistoryPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;