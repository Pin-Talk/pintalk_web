import { createBrowserRouter } from 'react-router-dom';
import App from './App';

import Home from './pages/Home';
import Investment from './pages/Investment';
import Loan from './pages/Loan';
import Admin from './pages/Admin';
import UserMemberDetail from './components/admin/UserDetail/UserMemberDetail';

import NotFound from './pages/NotFound';
import Login from './pages/login/Login';
import ForgotAccount from './pages/login/ForgotAccount';
import RegisterForm from './components/register/RegisterForm';
import Register from './pages/login/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'investment',
        element: <Investment />,
      },
      {
        path: 'loan',
        element: <Loan />,
      },
      {
        path: 'admin/insertUser',
        element: <RegisterForm />,
      },
      {
        path: 'admin',
        element: <Admin />,
      },
      {
        path: 'userMemberDetail/:id',
        element: <UserMemberDetail />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'forgot-account',
        element: <ForgotAccount />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },
]);

export default router;
