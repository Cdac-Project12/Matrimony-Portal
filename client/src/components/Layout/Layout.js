import React from 'react';
import { motion } from 'framer-motion';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Layout = ({ children }) => {
  const user = useSelector((state) => state.user);


  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="d-flex" style={{ minHeight: '100vh' }}>
     
      <motion.div
        className="bg-light p-3 shadow"
        style={{
          width: '250px',
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0,
        }}
      >
        <Sidebar />
      </motion.div>

      <motion.div
        className="container-fluid p-4"
        style={{
          marginLeft: '250px', 
          flexGrow: 1,
          minHeight: '100vh',
          paddingTop: '70px', 
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Layout;
