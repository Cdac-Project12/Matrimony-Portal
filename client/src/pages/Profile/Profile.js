import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';

const Profile = () => {
  const [user, setUser] = useState({
    name: 'Prabhas Raju',
    email: 'prabhasraju@gmail.com',
    age: 28,
    gender: 'Male',
    bio: 'Marketing Specialist with a passion for photography and adventure.',
    location: 'San Francisco, USA',
    occupation: 'Marketing Specialist',
    maritalStatus: 'Single',
    hobbies: ['Photography', 'Hiking', 'Cooking'],
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(user);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCloseClick = () => {
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSaveClick = () => {
    setUser(formData); 
    setIsEditing(false);
  };

  return (
    <Layout>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card shadow-lg" style={{ width: '24rem' }}>
          <img
            src="https://i.pinimg.com/736x/7f/e7/cb/7fe7cb4ed3b692b581957a95f0f9774a.jpg"
            className="card-img-top rounded-circle mx-auto mt-4"
            alt="Profile"
            style={{ width: '150px' }}
          />
          <div className="card-body text-center">
            <h3 className="card-title mb-3">{user.name}</h3>
            <p className="text-muted">{user.bio}</p>
            <ul className="list-group list-group-flush text-start">
              <li className="list-group-item">
                <strong>Email:</strong> {user.email}
              </li>
              <li className="list-group-item">
                <strong>Age:</strong> {user.age}
              </li>
              <li className="list-group-item">
                <strong>Gender:</strong> {user.gender}
              </li>
              <li className="list-group-item">
                <strong>Location:</strong> {user.location}
              </li>
              <li className="list-group-item">
                <strong>Occupation:</strong> {user.occupation}
              </li>
              <li className="list-group-item">
                <strong>Marital Status:</strong> {user.maritalStatus}
              </li>
              <li className="list-group-item">
                <strong>Hobbies:</strong> {user.hobbies.join(', ')}
              </li>
            </ul>
            <button
              className="btn btn-primary mt-3"
              onClick={handleEditClick}
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {isEditing && (
        <div
          className="modal fade show d-flex justify-content-center align-items-center vh-100"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            animation: 'fadeIn 0.3s',
          }}
        >
          <div className="modal-dialog">
            <div className="modal-content shadow-lg">
              <div className="modal-header bg-primary text-white">
                <h5 className="modal-title">Edit Profile</h5>
                <button
                  type="button"
                  className="btn-close bg-white"
                  onClick={handleCloseClick}
                  style={{ filter: 'invert(1)' }}
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  {Object.keys(formData).map((key) => (
                    <div className="mb-3" key={key}>
                      <label
                        className="form-label fw-bold"
                        htmlFor={key}
                      >
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </label>
                      <input
                        type="text"
                        className="form-control shadow-sm"
                        id={key}
                        name={key}
                        value={formData[key]}
                        onChange={handleInputChange}
                        placeholder={`Enter your ${key}`}
                      />
                    </div>
                  ))}
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseClick}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSaveClick}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Profile;
