import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { fetchMatches } from '../../redux/actions'; // Importing the fetchMatches action
import Layout from '../../components/Layout/Layout';

const Matches = () => {
  const user = useSelector((state) => state.user); // User data from Redux store
  const matches = useSelector((state) => state.matches); // Matches from Redux store
  const loading = useSelector((state) => state.loading); // Loading state from Redux
  const error = useSelector((state) => state.error); // Error state from Redux
  const dispatch = useDispatch(); // To dispatch actions
  const navigate = useNavigate();

  useEffect(() => {
    // If user data is available, fetch matches based on user preferences
    if (user) {
      dispatch(fetchMatches(user.id)); // Dispatch action to fetch matches for the logged-in user
    }
  }, [user, dispatch]); // Dependency on user, re-fetch matches if user changes

  // If user is not logged in, redirect to login page
  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <Layout>
      <div className="container-fluid p-4">
        <h1>Matches</h1>
        {loading ? (
          <p>Loading matches...</p>
        ) : error ? (
          <p className="text-danger">{error}</p>
        ) : matches && matches.length > 0 ? (
          <div className="row g-4">
            {matches.map((match, index) => (
              <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                <div className="card shadow-lg border-0 h-100">
                  <div className="card-body text-center">
                    <img
                      src={match.img || 'https://media.istockphoto.com/id/1681388313/vector/cute-baby-panda-cartoon-on-white-background.jpg?s=612x612&w=0&k=20&c=qFrzn8TqONiSfwevvkYhys1z80NAmDfw3o-HRdwX0d8='}
                      className="card-img-top rounded-circle mx-auto mb-3"
                      alt={match.firstName}
                      style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                    />
                    <h3 className="card-title mb-2">{match.firstName}</h3>
                    <p className="text-muted">Profession: {match.profession}</p>
                    <p className="text-muted">Marital Status: {match.maritalStatus}</p>
                    <p className="text-muted">Date of Birth: {match.dateOfBirth}</p>
                    <button
                      className="btn btn-primary"
                      onClick={() => navigate(`/view-profile/${match.id}`)}
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No matches found.</p>
        )}
      </div>
    </Layout>
  );
};

export default Matches;
