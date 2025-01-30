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
          location: user.location, // ✅ Add location
        });

        setMatches(response.data);
      } catch (error) {
        console.error('Error fetching matches:', error);
      }
    };

    fetchMatches();
  }, [user]); // ✅ Depend only on `user`

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


