import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';

const Profile = () => {
  const user = useSelector((state) => state.user);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <Layout>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card shadow-lg" style={{ width: '24rem' }}>
          <img
            src="https://via.placeholder.com/150"
            className="card-img-top rounded-circle mx-auto mt-4"
            alt="Profile"
            style={{ width: '150px' }}
          />
          <div className="card-body text-center">
            <h3 className="card-title mb-3">{user.name}</h3>
            <p className="text-muted">{user.bio}</p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Email:</strong> {user.email}
              </li>
              <li className="list-group-item">
                <strong>Age:</strong> {user.age}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
