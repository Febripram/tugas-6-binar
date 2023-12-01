import { Outlet, useNavigate } from 'react-router-dom';
import CustomNavbar from '../components/NavBar';
import Sidebar from '../components/SideBar';
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useEffect } from 'react';

const DashboardHome = () => {
  const username = 'Manda'
  const avatar = 'https://0.gravatar.com/avatar/f86f2255efbd6da6b1179ff37e2abfd4050183a0c950ebaa51a53de9f56aadee?size=128'

  const [auth] = useLocalStorage('auth', {})
  const navigate = useNavigate()

  useEffect(() => {
    if (!auth.token) {
      return navigate('/')
    }
  })

  return (
    <div className="d-flex vh-100">
      <Sidebar />
      <div className="flex-grow-1">
        <div className="p-3">
          <CustomNavbar username={username} avatar={avatar} />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
