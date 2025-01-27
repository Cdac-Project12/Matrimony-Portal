import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import Modal from 'react-modal';

Modal.setAppElement('#root'); 

const ViewProfile = () => {
  const { name } = useParams();
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalEmoji, setModalEmoji] = useState('');

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

  const match = matches.find((m) => m.name === name);

  if (!match) {
    return (
      <Layout>
        <div className="container-fluid p-4">
          <h2 className="text-center text-danger">Profile not found</h2>
        </div>
      </Layout>
    );
  }

  const handleButtonClick = (action) => {
    if (action === 'send') {
      setModalMessage('Invitation message sent!');
      setModalEmoji('😊'); 
    } else if (action === 'report') {
      setModalMessage('Profile has been reported!');
      setModalEmoji('😞');
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Layout>
      <div className="container-fluid p-4 text-center">
        <div className="card shadow-lg p-4 rounded-lg">
          <img
            src={match.img}
            alt={match.name}
            className="rounded-circle mb-3 border border-5 border-light"
            style={{ width: '200px', height: '200px', objectFit: 'cover' }}
          />
          <h1 className="display-4 text-dark font-weight-bold mb-3">{match.name}</h1>
          <p className="text-muted lead">{match.bio}</p>
          <div className="mt-4 text-left">
            <p className="text-muted"><strong>Age:</strong> {match.age}</p>
            <p className="text-muted"><strong>Height:</strong> {match.height}</p>
            <p className="text-muted"><strong>Sex:</strong> {match.sex}</p>
            <p className="text-muted"><strong>Education:</strong> {match.education}</p>
          </div>
          <div className="mt-4">
            <button 
              className="btn btn-primary btn-lg mx-2" 
              onClick={() => handleButtonClick('send')}
            >
              Send Message
            </button>
            <button 
              className="btn btn-danger btn-lg mx-2" 
              onClick={() => handleButtonClick('report')}
            >
              Report Profile
            </button>
          </div>
        </div>
      </div>

      <Modal 
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Action Confirmation"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <div className="text-center">
          <h3 className="mb-3">{modalMessage}</h3>
          <h1 className="emoji">{modalEmoji}</h1>
          <button className="btn btn-secondary mt-3" onClick={closeModal}>Close</button>
        </div>
      </Modal>
    </Layout>
  );
};

export default ViewProfile;
