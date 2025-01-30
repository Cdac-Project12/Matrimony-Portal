import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { savePreferences } from "../../redux/actions";

const SelectPreferences = () => {
  const dispatch = useDispatch();

  // Get user details from Redux state
  const user = useSelector((state) => state.user); // Adjust path based on your store structure

  const [preferences, setPreferences] = useState({
    religion: "",
    caste: "",
    profession: "",
    gender: "",
    ageRange: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPreferences((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user || !user.id) {
      console.error("User ID is missing. Cannot save preferences.");
      return;
    }
    console.log("Preferences Submitted:", preferences);
    
    // Dispatch action to save preferences with user ID
    dispatch(savePreferences(user.id, preferences));
  };

  return (
    <div className="container mt-4">
      <h2>Select Your Preferences</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Religion</label>
          <select
            name="religion"
            className="form-control"
            value={preferences.religion}
            onChange={handleChange}
          >
            <option value="">Select Religion</option>
            <option value="Hindu">Hindu</option>
            <option value="Muslim">Muslim</option>
            <option value="Christian">Christian</option>
            <option value="Sikh">Sikh</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Caste</label>
          <select
            name="caste"
            className="form-control"
            value={preferences.caste}
            onChange={handleChange}
          >
            <option value="">Select Caste</option>
            <option value="General">General</option>
            <option value="OBC">OBC</option>
            <option value="SC">SC</option>
            <option value="ST">ST</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Profession</label>
          <select
            name="profession"
            className="form-control"
            value={preferences.profession}
            onChange={handleChange}
          >
            <option value="">Select Profession</option>
            <option value="Engineer">Engineer</option>
            <option value="Doctor">Doctor</option>
            <option value="Teacher">Teacher</option>
            <option value="Artist">Artist</option>
            <option value="Lawyer">Lawyer</option>
            <option value="Entrepreneur">Entrepreneur</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Gender</label>
          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={preferences.gender === "Male"}
                onChange={handleChange}
              />{" "}
              Male
            </label>
            <label className="ms-3">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={preferences.gender === "Female"}
                onChange={handleChange}
              />{" "}
              Female
            </label>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Age Range</label>
          <select
            name="ageRange"
            className="form-control"
            value={preferences.ageRange}
            onChange={handleChange}
          >
            <option value="">Select Age Range</option>
            <option value="18-25">18-25</option>
            <option value="26-35">26-35</option>
            <option value="36-45">36-45</option>
            <option value="46-60">46-60</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Save Preferences
        </button>
      </form>
    </div>
  );
};

export default SelectPreferences;
