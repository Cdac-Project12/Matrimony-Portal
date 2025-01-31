// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';
// import Layout from '../../components/Layout/Layout';

// const Matches = () => {
//   const user = useSelector((state) => state.user);

//   if (!user) {
//     return <Navigate to="/login" />;
//   }

//   const matches = [
//     {
//       name: 'Samantha Ruthprabhu',
//       bio: 'Loves hiking and photography.',
//       age: 28,
//       img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA5ABTIqdZJBItCts9_LFVwju2I0SiIYOahA&s',
//     },
//     {
//       name: 'Anushka Shetty',
//       bio: 'Adventurous and loves traveling.',
//       age: 25,
//       img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJBmLOg0R_1CQwY0Uw6Dsp7BFud3Al0ySXGQ&s',
//     },
//     {
//       name: 'Nayanthara',
//       bio: 'Tech enthusiast and gamer.',
//       age: 30,
//       img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUIHRdW2s6u7xR5D5ciXOli5owahPv_QaIfg&s',
//     },
//   ];

//   return (
//     <Layout>
//       <div className="container-fluid p-4">
//         <h1>Matches</h1>
//         <div className="row g-4">
//           {matches.map((match, index) => (
//             <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
//               <div className="card shadow-lg border-0 h-100">
//                 <div className="card-body text-center">
//                   <img
//                     src={match.img}
//                     className="card-img-top rounded-circle mx-auto mb-3"
//                     alt={match.name}
//                     style={{
//                       width: '150px',
//                       height: '150px',
//                       objectFit: 'cover',
//                     }}
//                   />
//                   <h3 className="card-title mb-2">{match.name}</h3>
//                   <p className="text-muted">{match.bio}</p>
//                   <p className="text-muted">Age: {match.age}</p>
//                   <button className="btn btn-primary">View Profile</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Matches;



// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Navigate, useNavigate } from 'react-router-dom';
// import Layout from '../../components/Layout/Layout';

// const Matches = () => {
//   const user = useSelector((state) => state.user);
//   const navigate = useNavigate();

//   if (!user) {
//     return <Navigate to="/login" />;
//   }

//   const matches = [
//     {
//       name: 'Samantha Ruthprabhu',
//       bio: 'Loves hiking and photography.',
//       age: 28,
//       img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA5ABTIqdZJBItCts9_LFVwju2I0SiIYOahA&s',
//     },
//     {
//       name: 'Anushka Shetty',
//       bio: 'Adventurous and loves traveling.',
//       age: 25,
//       img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJBmLOg0R_1CQwY0Uw6Dsp7BFud3Al0ySXGQ&s',
//     },
//     {
//       name: 'Nayanthara',
//       bio: 'Tech enthusiast and gamer.',
//       age: 30,
//       img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUIHRdW2s6u7xR5D5ciXOli5owahPv_QaIfg&s',
//     },
//   ];

//   return (
//     <Layout>
//       <div className="container-fluid p-4">
//         <h1>Matches</h1>
//         <div className="row g-4">
//           {matches.map((match, index) => (
//             <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
//               <div className="card shadow-lg border-0 h-100">
//                 <div className="card-body text-center">
//                   <img
//                     src={match.img}
//                     className="card-img-top rounded-circle mx-auto mb-3"
//                     alt={match.name}
//                     style={{
//                       width: '150px',
//                       height: '150px',
//                       objectFit: 'cover',
//                     }}
//                   />
//                   <h3 className="card-title mb-2">{match.name}</h3>
//                   <p className="text-muted">{match.bio}</p>
//                   <p className="text-muted">Age: {match.age}</p>
//                   <button
//                     className="btn btn-primary"
//                     onClick={() => navigate(`/view-profile/${match.name}`)}
//                   >
//                     View Profile
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Matches;



import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Layout from '../../components/Layout/Layout';

const Matches = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [matches, setMatches] = useState([]);
  const [filteredMatches, setFilteredMatches] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    age: '',
    caste: '',
    religion: '',
    profession: '',
  });

  useEffect(() => {
    if (!user) return;

    const fetchMatches = async () => {
      try {
        const response = await axios.post('http://localhost:8080/users/matches/find', {
          age: user.age,
          caste: user.caste,
          religion: user.religion,
          gender: user.gender,
          profession: user.profession,
          location: user.location,
          education: user.education,
        });

        setMatches(response.data);
        setFilteredMatches(response.data);
      } catch (error) {
        console.error('Error fetching matches:', error);
      }
    };

    fetchMatches();
  }, [user]);

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
        match.name.toLowerCase().includes(search.toLowerCase())
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
              <option value="Tacher">Teacher</option>
              <option value="Artist">Artist</option>
              <option value="Lawyer">Lawyer</option>
              <option value="Enterpreneur">Enterpreneur</option>
              
            </select>
          </div>
        </div>

        {/* Display Matches */}
        <div className="row g-4">
          {filteredMatches.length > 0 ? (
            filteredMatches.map((match, index) => (
              <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                <div className="card shadow-lg border-0 h-100">
                  <div className="card-body text-center">
                    <img
                      src={match.img || 'https://via.placeholder.com/150'}
                      className="card-img-top rounded-circle mx-auto mb-3"
                      alt={match.name}
                      style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                    />
                    <h3 className="card-title mb-2">{match.name}</h3>
                    <p className="text-muted">Age: {match.age}</p>
                    <p className="text-muted">Caste: {match.caste}</p>
                    <p className="text-muted">Religion: {match.religion}</p>
                    <p className="text-muted">Profession: {match.profession}</p>
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




