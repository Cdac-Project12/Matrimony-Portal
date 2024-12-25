import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';

const Matches = () => {
  const user = useSelector((state) => state.user);


  if (!user) {
    return <Navigate to="/login" />;
  }

 
  const matches = [
    { name: 'Samantha Ruthprabhu', bio: 'Loves hiking and photography.', age: 28 },
    { name: 'Anushka Shetty', bio: 'Adventurous and loves traveling.', age: 25 },
    { name: 'Nayanthara', bio: 'Tech enthusiast and gamer.', age: 30 },
  ];

  return (
    <Layout>
      <div className="container-fluid p-4">
        <h1>Matches</h1>
        <div className="row g-4">
          {matches.map((match, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
              <div className="card shadow-lg border-0 h-100">
                <div className="card-body text-center">
                  <img
                    src="https://via.placeholder.com/150"
                    className="card-img-top rounded-circle mx-auto mb-3"
                    alt={match.name}
                    style={{ width: '150px' }}
                  />
                  <h3 className="card-title mb-2">{match.name}</h3>
                  <p className="text-muted">{match.bio}</p>
                  <p className="text-muted">Age: {match.age}</p>
                  <button className="btn btn-primary">View Profile</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Matches;