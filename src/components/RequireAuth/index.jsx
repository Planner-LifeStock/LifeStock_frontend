import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const RequireAuth = () => {
  const { accessToken, isLoading } = useAuth();

  if (isLoading) {
    return <div>로딩 중...</div>
  }

  if (!accessToken) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default RequireAuth;