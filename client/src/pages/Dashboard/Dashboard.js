import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Link } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';

const Dashboard = () => {
  const user = useSelector((state) => state.user);

  if (!user) {
    return <Navigate to="/login" />;
  }

  const stats = [
    { label: 'Total Matches', value: 123 },
    { label: 'New Messages', value: 34 },
    { label: 'Pending Requests', value: 8 },
    { label: 'Profile Views', value: 567 },
  ];

  const actions = [
    { label: 'View Matches', icon: 'fa-heart', color: 'text-danger', path: '/matches' },
    { label: 'Messages', icon: 'fa-envelope', color: 'text-primary', path: '/message' },
    { label: 'Settings', icon: 'fa-cog', color: 'text-success', path: '/settings' },
    { label: 'Profile', icon: 'fa-user', color: 'text-warning', path: '/profile' },
  ];

  const notifications = [
    { message: 'You have a new match request!', time: '5 mins ago' },
    { message: 'Anushka viewed your profile', time: '30 mins ago' },
    { message: 'Your profile was updated successfully', time: '1 hour ago' },
  ];

  const topMatches = [
    { name: 'Samantha Ruthprabhu', age: 28, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA5ABTIqdZJBItCts9_LFVwju2I0SiIYOahA&s' },
    { name: 'Anushka Shetty', age: 25, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJBmLOg0R_1CQwY0Uw6Dsp7BFud3Al0ySXGQ&s' },
    { name: 'Nayanthara', age: 30, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUIHRdW2s6u7xR5D5ciXOli5owahPv_QaIfg&s' },
  ];

  const profileCompletion = 85;

  return (
    <Layout>
      <div className="container-fluid p-4">
        <h1>Welcome, {user.name}</h1>
        <p>{user.bio}</p>

        {/* Profile Completion Section */}
        <div className="mt-4">
          <h4>Profile Completion</h4>
          <div className="progress" style={{ height: '25px' }}>
            <div
              className="progress-bar bg-success"
              style={{ width: `${profileCompletion}%` }}
            >
              {profileCompletion}%
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="row g-4 mt-5">
          {stats.map((stat, index) => (
            <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
              <div className="card shadow-lg border-0 h-100">
                <div className="card-body text-center">
                  <h3 className="mb-2">{stat.value}</h3>
                  <p className="text-muted">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Actions Section */}
        <div className="row g-4 mt-5 justify-content-center">
          {actions.map((action, index) => (
            <div className="col-md-3 col-sm-6" key={index}>
              <Link to={action.path} className="text-decoration-none">
                <div className="card text-center shadow-lg border-0 h-100">
                  <div className={`card-body ${action.color}`}>
                    <i className={`fa ${action.icon} fa-3x mb-3`} />
                    <h5>{action.label}</h5>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Notifications Section */}
        <div className="mt-5">
          <h4>Recent Notifications</h4>
          <ul className="list-group">
            {notifications.map((notification, index) => (
              <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                {notification.message}
                <span className="badge bg-primary rounded-pill">{notification.time}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Top Matches Section */}
        <div className="mt-5">
          <h4>Top Matches</h4>
          <div className="row g-4">
            {topMatches.map((match, index) => (
              <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                <div className="card shadow-lg border-0 h-100">
                  <div className="card-body text-center">
                    <img
                      src={match.img}
                      className="card-img-top rounded-circle mx-auto mb-3"
                      alt={match.name}
                      style={{ width: '150px', height: '150px' }}
                    />
                    <h3 className="card-title mb-2">{match.name}</h3>
                    <p className="text-muted">Age: {match.age}</p>
                    <button className="btn btn-primary">View Profile</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
