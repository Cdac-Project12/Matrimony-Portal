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

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMatches, setFilteredMatches] = useState(matches || []);
  const [filters, setFilters] = useState({
    age: '',
    caste: '',
    religion: '',
    profession: '',
  });

  useEffect(() => {
    // If user data is available, fetch matches based on user preferences
    if (user) {
      dispatch(fetchMatches(user.id)); // Dispatch action to fetch matches for the logged-in user
    }
  }, [user, dispatch]); // Dependency on user, re-fetch matches if user changes

  useEffect(() => {
    setFilteredMatches(matches);
  }, [matches]);

  // If user is not logged in, redirect to login page
  if (!user) {
    return <Navigate to="/login" />;
  }

  // Handle Search
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    filterMatches(event.target.value, filters);
  };

  // Handle Filter Change
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);
    filterMatches(searchTerm, updatedFilters);
  };

  // Filter Matches Based on Search & Filters
  const filterMatches = (search, appliedFilters) => {
    let results = matches;

    if (search) {
      results = results.filter((match) =>
        match.firstName.toLowerCase().includes(search.toLowerCase())
      );
    }

    Object.keys(appliedFilters).forEach((key) => {
      if (appliedFilters[key]) {
        results = results.filter((match) => match[key] === appliedFilters[key]);
      }
    });

    setFilteredMatches(results);
  };

  return (
    <Layout>
      <div className="container-fluid p-4">
        <h1>Matches</h1>
        
        {/* Search Bar */}
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={handleSearch}
        />

        {/* Filters */}
        <div className="row mb-4">
          <div className="col-md-3">
            <select className="form-select" name="age" onChange={handleFilterChange}>
              <option value="">Filter by Age</option>
              <option value="18-25">18-25</option>
              <option value="26-35">26-35</option>
              <option value="36-45">36-45</option>
              <option value="46-60">46-60</option>
            </select>
          </div>
          <div className="col-md-3">
            <select className="form-select" name="caste" onChange={handleFilterChange}>
              <option value="">Filter by Caste</option>
              <option value="General">General</option>
              <option value="OBC">OBC</option>
              <option value="SC">SC</option>
              <option value="ST">ST</option>
            </select>
          </div>
          <div className="col-md-3">
            <select className="form-select" name="religion" onChange={handleFilterChange}>
              <option value="">Filter by Religion</option>
              <option value="Hindu">Hindu</option>
              <option value="Muslim">Muslim</option>
              <option value="Christian">Christian</option>
              <option value="Sikh">Sikh</option>
            </select>
          </div>
          <div className="col-md-3">
            <select className="form-select" name="profession" onChange={handleFilterChange}>
              <option value="">Filter by Profession</option>
              <option value="Engineer">Engineer</option>
              <option value="Doctor">Doctor</option>
              <option value="Teacher">Teacher</option>
              <option value="Artist">Artist</option>
              <option value="Lawyer">Lawyer</option>
              <option value="Entrepreneur">Entrepreneur</option>
            </select>
          </div>
        </div>

        {/* Display Matches */}
        <div className="row g-4">
          {loading ? (
            <p>Loading matches...</p>
          ) : error ? (
            <p className="text-danger">{error}</p>
          ) : filteredMatches.length > 0 ? (
            filteredMatches.map((match, index) => (
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
