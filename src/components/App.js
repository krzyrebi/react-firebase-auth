import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Login from "./Login";
import { Container } from 'react-bootstrap';
import { AuthProvider } from "../context/AuthContext";
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import PrivateRoutes from "./PrivateRoutes";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";

function App() {
  return (
    <Container className='d-flex align-items-flex-start justify-content-center' style={{ minHeight: '100vh' }}>
      <div className='w-100' style={{ maxWidth: '500px' }}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route element={<PrivateRoutes />} >
                <Route exact path='/' element={<Dashboard />} />
                <Route path='/update-profile' element={<UpdateProfile />} />
              </Route>
              <Route path='/signup' element={<Signup />} />
              <Route path='/login' element={<Login />} />
              <Route path='/forgot-password' element={<ForgotPassword />} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container >
  );
}

export default App;
