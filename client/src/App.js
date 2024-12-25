import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/Profile';
import Matches from './pages/Matches/Matches';
import Dashboard from './pages/Dashboard/Dashboard';
import Messages from './pages/Messages/Messages';
import Settings from './pages/Settings/Settings';
import { DarkModeProvider } from './components/Context/DarkModeContext';

const App = () => {
  return (
    <DarkModeProvider>

    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      <Footer />
    </Router>
    </DarkModeProvider>
  );
};

export default App;
