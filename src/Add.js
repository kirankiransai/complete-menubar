import React, { useState } from "react";
import axios from "axios";
import "./AddRowPopup.css";
// import "./success.css";

const Add = ({ fetchres, tooglePopup, showSidebar }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [formData, setFormData] = useState({
    country: "",
    sales: "",
    changes: "",
    image: null,
  });

  const [errors, setErrors] = useState({});
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };
  const handleSuccessPopupClose = () => {
    setShowSuccessPopup(false);
    setFormData({ country: "", sales: "", changes: "", image: null });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.keys(newErrors).length === 0) {
      const data = new FormData();
      data.append("country", formData.country);
      data.append("sales", formData.sales);
      data.append("changes", formData.changes);
      data.append("image", formData.image);

      try {
        const response = await axios.post("http://localhost:8080/upload", data);
        console.log(response.data);
        // Handle successful response
        if (response) {
          // response
          //   .status(200)
          //   .json({ message: "registeration successful", data });
          console.log("response");
          tooglePopup();
          setShowPopup(false);
          setFormData({
            country: "",
            sales: "",
            changes: "",
            image: null,
          });
          setShowSuccessAlert(true); // Show success alert
          setTimeout(() => {
            setShowSuccessAlert(false); // Hide success alert after 3 seconds
          }, 3000);
        }
      } catch (error) {
        console.error(error);
        // Handle error
      }
    } else {
      setErrors(newErrors);
    }
    fetchres();
  };
  const validateForm = () => {
    const newErrors = {};

    if (!formData.country) {
      newErrors.country = "Country is required";
    }

    if (!formData.sales) {
      newErrors.sales = "Sales is required";
    }

    if (!formData.changes) {
      newErrors.changes = "Changes is required";
    }

    if (!formData.image) {
      newErrors.image = "Image is required";
    }

    return newErrors;
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const newErrors = validateForm();
  return (
    <>
      <button
        onClick={togglePopup}
        className={`btn btn-primary ${showSidebar ? "btn1" : "btn2"}`}
      >
        Add Row
      </button>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <div className="popup-content">
              <span className="close-button" onClick={togglePopup}>
                &times;
              </span>
              <h2>Add Row</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleInputChange}
                />
                {errors.country && (
                  <small className="error-message">{errors.country}</small>
                )}
                <input
                  type="text"
                  name="sales"
                  placeholder="Sales"
                  value={formData.sales}
                  onChange={handleInputChange}
                />
                {errors.sales && (
                  <small className="error-message">{errors.sales}</small>
                )}
                <input
                  type="text"
                  name="changes"
                  placeholder="Changes"
                  value={formData.changes}
                  onChange={handleInputChange}
                />
                {errors.changes && (
                  <small className="error-message">{errors.changes}</small>
                )}
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                {errors.image && (
                  <small className="error-message">{errors.image}</small>
                )}
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      )}
      {showSuccessAlert && (
        <div className="success-alert">
          <p>Data inserted successfully!</p>
        </div>
      )}
      {/* {showSuccessPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <div className="popup-content">
              <h2>Success</h2>
              <p>Data inserted successfully!</p>
              <button onClick={handleSuccessPopupClose}>OK</button>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
};

export default Add;
