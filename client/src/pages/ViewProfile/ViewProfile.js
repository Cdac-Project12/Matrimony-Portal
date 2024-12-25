import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';

const ViewProfile = () => {
  const { name } = useParams();

  // Mock data for matches
  const matches = [
    {
      name: 'Samantha Ruthprabhu',
      bio: 'Loves hiking and photography.',
      age: 28,
      height: '5ft 6in',
      sex: 'Female',
      education: 'Master’s in Computer Science',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA5ABTIqdZJBItCts9_LFVwju2I0SiIYOahA&s',
    },
    {
      name: 'Anushka Shetty',
      bio: 'Adventurous and loves traveling.',
      age: 25,
      height: '5ft 7in',
      sex: 'Female',
      education: 'Bachelor’s in Business Administration',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJBmLOg0R_1CQwY0Uw6Dsp7BFud3Al0ySXGQ&s',
    },
    {
      name: 'Nayanthara',
      bio: 'Tech enthusiast and gamer.',
      age: 30,
      height: '5ft 5in',
      sex: 'Female',
      education: 'PhD in Artificial Intelligence',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUIHRdW2s6u7xR5D5ciXOli5owahPv_QaIfg&s',
    },
  ];

  // Find the specific match based on the name parameter
  const match = matches.find((m) => m.name === name);

  if (!match) {
    return (
      <Layout>
        <div className="container-fluid p-4">
          <h2>Profile not found</h2>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container-fluid p-4 text-center">
        <img
          src={match.img}
          alt={match.name}
          className="rounded-circle mb-3"
          style={{ width: '200px', height: '200px', objectFit: 'cover' }}
        />
        <h1>{match.name}</h1>
        <p className="text-muted">{match.bio}</p>
        <div className="mt-4">
          <p className="text-muted"><strong>Age:</strong> {match.age}</p>
          <p className="text-muted"><strong>Height:</strong> {match.height}</p>
          <p className="text-muted"><strong>Sex:</strong> {match.sex}</p>
          <p className="text-muted"><strong>Education:</strong> {match.education}</p>
        </div>
      </div>
    </Layout>
  );
};

export default ViewProfile;
