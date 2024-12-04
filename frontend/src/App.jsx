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
        {/* <Route
          path="/admin"
          element={<ProtectedRoute roles={['Admin']}><AdminPage /></ProtectedRoute>}
        />
        <Route
          path="/user"
          element={<ProtectedRoute roles={['User']}><UserPage /></ProtectedRoute>}
        /> */}

      </Routes>


  );
}

export default App;
