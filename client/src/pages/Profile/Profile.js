import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../components/Layout/Layout';
import { updateUser } from '../../redux/actions';

const Profile = () => {
  const user = useSelector((state) => state.user); // Get user data from Redux store
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  // Fetch user details when the component mounts
  useEffect(() => {
    if (user && user.id) {
      setFormData({ ...user }); // Populate formData with user data when it is available
    }
  }, [user]);

  // Handle changes in input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Update the correct field in the state
    }));
  };

  // Handle click on edit button
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // Handle click on cancel button in the modal
  const handleCloseClick = () => {
    setIsEditing(false);
  };

  // Save the updated data
  const handleSaveClick = () => {
    if (formData.id) {
      dispatch(updateUser(formData)); // Dispatch action to update user data in Redux and backend
    }
    setIsEditing(false); // Close the modal after saving
  };

  // Display user data if it exists, otherwise show "Not available"
  const displayField = (field) => {
    return field && field !== '' ? field : 'Not available';
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
            <h3 className="card-title mb-3">{displayField(user.firstName)}</h3>
            <p className="text-muted">{displayField(user.bio)}</p>
            <ul className="list-group list-group-flush text-start">
              <li className="list-group-item">
                <strong>Email:</strong> {displayField(user.email)}
              </li>
              <li className="list-group-item">
                <strong>First Name:</strong> {displayField(user.firstName)}
              </li>
              <li className="list-group-item">
                <strong>Last Name:</strong> {displayField(user.lastName)}
              </li>
              <li className="list-group-item">
                <strong>Gender:</strong> {displayField(user.gender)}
              </li>
              <li className="list-group-item">
                <strong>Address:</strong> {displayField(user.address)}
              </li>
              <li className="list-group-item">
                <strong>Profession:</strong> {displayField(user.profession)}
              </li>
              <li className="list-group-item">
                <strong>Marital Status:</strong> {displayField(user.maritalStatus)}
              </li>
              <li className="list-group-item">
                <strong>Hobbies:</strong> {user.hobbies ? user.hobbies.split(',').join(', ') : 'Not available'}
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
                  {Object.keys(formData).filter(key => key !== 'id').map((key) => (
                    <div className="mb-3" key={key}>
                      <label
                        className="form-label fw-bold"
                        htmlFor={key}
                      >
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id={key}
                        name={key}
                        value={formData[key] || ''}
                        onChange={handleInputChange}
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
