import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import Header from './layouts/Header';
import MainPage from './pages/main';
import MyAssetPage from './pages/myAssets';
import SalesHistoryPage from './pages/salesHistory';
import RankPage from './pages/rank';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';

import { CompanyProvider } from './hooks/useCompanyData';
import { UserProvider } from './hooks/useUser';
import { AuthProvider } from './hooks/useAuth';

const Layout = () => {
  const location = useLocation();
  
  const isLoginPage = location.pathname === '/login';
  const isRegisterPage = location.pathname === '/register';

  const showHeader = !isLoginPage && !isRegisterPage;

  return (
    <>
      {showHeader && <Header />}
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <CompanyProvider>
        <UserProvider>
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
        </UserProvider>
      </CompanyProvider>
    </AuthProvider>
  );
}

export default App;