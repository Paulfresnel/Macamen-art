import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import AdminLogin from './pages/AdminLogin/AdminLogin';




function App() {
  return (
    <div className="App">
    <Header/>
      App.jsx homepage
    <Routes>
      <Route path="/admin" element={<AdminLogin/>} />
    </Routes>
    </div>
  );
}

export default App;
