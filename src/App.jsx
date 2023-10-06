import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import ErrorPage from './Pages/Components/ErrorPage'
import Screen from './Pages/Components/Screen';
import SignUpForm from './Pages/Signup/Signup';
import LoginForm from './Pages/Signup/LoginForm';

const Applayout = () => {
  return (
    <>
      <Screen>
        <Outlet />
      </Screen>
    </>
  )
};

export const ProtectHome = ({ Component }) => {
  const authToken = localStorage.getItem('token')
  return !authToken ? <Navigate to='/login' replace /> : <Component />;
}

export const ProtectAuthPages = ({ Component, route }) => {
  const authToken = localStorage.getItem('token')
  return authToken ? <Navigate to={route} replace /> : <Component />;
}

const App = createBrowserRouter([
  {
    path: '/',
    element: <Applayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <ProtectHome Component={HomePage} /> },
      { path: '/signup', element: <ProtectAuthPages Component={SignUpForm} route='/signup' /> },
      { path: '/login', element: <ProtectAuthPages Component={LoginForm} route='/login' /> },
    ],
  },
]);

export default App;
