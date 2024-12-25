import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import Matches from '../Matches/Matches';

const Dashboard = () => {
  const user = useSelector((state) => state.user);

  if (!user) {
    return <Navigate to="/login" />;
  }


  const stats = [
    { label: 'Total Matches', value: 123 },
    { label: 'New Messages', value: 34 },
    { label: 'Pending Requests', value: 8 },
  ];

  const actions = [
    { label: 'View Matches', icon: 'fa-heart', color: 'text-danger' },
    { label: 'Messages', icon: 'fa-envelope', color: 'text-primary' },
    { label: 'Settings', icon: 'fa-cog', color: 'text-success' },
  ];

  return (
    <Layout>
      <div className="container-fluid p-4">
        <h1>Welcome, {user.name}</h1>
        <p>{user.bio}</p>

 
        <div className="row g-4">
          {stats.map((stat, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
              <div className="card shadow-lg border-0 h-100">
                <div className="card-body text-center">
                  <h3 className="mb-2">{stat.value}</h3>
                  <p className="text-muted">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>


        <div className="row g-4 mt-5 justify-content-center">
          {actions.map((action, index) => (
            <div className="col-md-4 col-sm-6" key={index}>
              <div className="card text-center shadow-lg border-0 h-100">
                <div className={`card-body ${action.color}`}>
                  <i className={`fa ${action.icon} fa-3x mb-3`} />
                  <h5>{action.label}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>


        <div className="mt-5">
          <Matches />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
