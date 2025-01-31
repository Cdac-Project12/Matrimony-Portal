import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { fetchMatches } from '../../redux/actions'; // Importing the fetchMatches action
import Layout from '../../components/Layout/Layout';

const Matches = () => {
  const user = useSelector((state) => state.user); // User data from Redux store
  const navigate = useNavigate();
  const [matches, setMatches] = useState([]); // State to store the matches

  useEffect(() => {
    // If user data is not available, exit the effect early
    if (!user) return;

    // Function to fetch matching users based on preferences
    const fetchMatches = async () => {
      try {
        // Send user preferences to the backend to get matching profiles
        const response = await axios.post('http://localhost:8080/users/matches/find', {
          age: user.age,
          caste: user.caste,
          religion: user.religion,
          gender: user.gender,
          profession: user.profession,
          location: user.location, // Ensure location is part of user preferences
          education: user.education, // If education is part of preferences
        });

        setMatches(response.data); // Set the response data (matches) to state
      } catch (error) {
        console.error('Error fetching matches:', error); // Log any error that occurs during the API call
      }
    };

    fetchMatches(); // Call fetchMatches when user data is available
  }, [user]); // Depend on user data to re-fetch matches when user preferences change

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <Layout>
      <div className="container-fluid p-4">
        <h1>Matches</h1>
        <div className="row g-4">
          {matches.length > 0 ? (
            matches.map((match, index) => (
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
            ))
          ) : (
            <p>No matches found.</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Matches;



