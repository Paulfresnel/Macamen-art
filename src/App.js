import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import AdminLogin from './pages/AdminLogin/AdminLogin';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
import IsPrivate from './components/IsPrivate';




function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route path="/admin" element={<AdminLogin/>} />
      <Route path="/admin/dashboard" element={<IsPrivate><AdminDashboard/></IsPrivate>}/>
    </Routes>
    </div>
  );
}

export default App;
