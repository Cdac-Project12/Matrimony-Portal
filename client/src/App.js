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
import Message from './pages/Mesage/Message';
import MessageScreen from './pages/MessageScreen/MessageScreen';
// import ViewProfile from './pages/ViewProfile/ViewProfile';



const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/message" element={<Message />} />
        <Route path="/messages/:id" element={<MessageScreen />} />
        {/* <Route path="/messages/:id" element={<ViewProfile />} /> */}


      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
