import { Navigate, Outlet } from "react-router";
import Header from "../components/common/Header";
import { useAuth } from "../hooks/useAuth";

const PrivateRoutes = () => {
  const { auth } = useAuth();
  return (
    <>
      {auth.user ? (
        <>
          <Header />
          <main className="mx-auto max-w-255 py-8">
            <div className="container">
              <Outlet />
            </div>
          </main>
        </>
      ) : (
        <Navigate to="login" />
      )}
    </>
  );
};
export default PrivateRoutes;
