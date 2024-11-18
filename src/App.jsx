import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { BrowserView, MobileView } from 'react-device-detect';

import Header from './layouts/Header';
import MainPage from './pages/main';
import MyAssetPage from './pages/myAssets';
import SalesHistoryPage from './pages/salesHistory';
import RankPage from './pages/rank';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import Tutorial from './pages/tutorial';
import RequireAuth from './components/RequireAuth';

import { CompanyProvider } from './hooks/useCompanyData';
import { UserProvider } from './hooks/useUser';
import { AuthProvider } from './hooks/useAuth';
import { ChartProvider } from './hooks/useChart';
import { TodoProvider } from './hooks/useTodo';

const Layout = () => {
  const location = useLocation();

  const isLoginPage = location.pathname === '/login';
  const isRegisterPage = location.pathname === '/register';
  const isTutorial = location.pathname === '/tutorial';

  const showHeader = !isLoginPage && !isRegisterPage && !isTutorial;

  return <>{showHeader && <Header />}</>;
};

function App() {
  return (
    <>
      <MobileView>
        <div style={{display: 'flex',
                     fontWeight: 'bold',
                     justifyContent: 'center',
                     alignItems: 'center',
        }}>모바일은 추후 지원 예정입니다!</div>
        <div style={{display: 'flex',
                     fontWeight: 'bold',
                     justifyContent: 'center',
                     alignItems: 'center',
        }}>PC로 접속해주세요!</div>
        <div style={{display: 'flex',
                     fontWeight: 'bold',
                     justifyContent: 'center',
                     alignItems: 'center',
        }}>lifestock.store</div>
      </MobileView>
      <BrowserView>
        <AuthProvider>
          <UserProvider>
            <CompanyProvider>
              <ChartProvider>
                <BrowserRouter>
                  <Layout />
                  <Routes>
                    {/* 로그인 및 회원가입 페이지는 RequireAuth 없이 접근 가능 */}
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />

                    {/* RequireAuth를 적용하여 메인 페이지 보호 */}
                    <Route element={<RequireAuth />}>
                      <Route path="/" element={<MainPage />} />
                      <Route path="/myasset" element={<MyAssetPage />} />
                      <Route path="/salesrecords" element={<SalesHistoryPage />} />
                      <Route path="/rank" element={<RankPage />} />
                      <Route path="/tutorial" element={<Tutorial/>} />
                    </Route>

                    {/* 일치하지 않는 경로를 메인 페이지로 리디렉션 */}
                    <Route path="*" element={<Navigate to="/" />} />
                  </Routes>
                </BrowserRouter>
              </ChartProvider>
            </CompanyProvider>
          </UserProvider>
        </AuthProvider>
      </BrowserView>
    </>
  );
}

export default App;
