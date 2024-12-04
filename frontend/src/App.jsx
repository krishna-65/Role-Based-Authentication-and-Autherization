import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';
import ProtectedRoute from './components/ProtectedRoutes';
import Dashboard from './components/Dashboard';

function App() {
  return (
  
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/' element={<Dashboard />} />
      </Routes>


  );
}

export default App;
