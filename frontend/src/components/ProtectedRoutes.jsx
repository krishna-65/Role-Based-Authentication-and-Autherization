import { Navigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

const ProtectedRoute = ({ children, roles }) => {
  const token = localStorage.getItem('token');
  if (!token) return <Navigate to="/login" />;

  const user = jwtDecode(token);
  if (!roles.includes(user.role)) return <Navigate to="/login" />;

  return children;
};

export default ProtectedRoute;

