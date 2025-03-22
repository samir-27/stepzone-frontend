import React, { useEffect, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const MyProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    profile_img: '',
  });
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: ''
  });
  const [message, setMessage] = useState('');
  const { id } = useParams();

  const getUser = async () => {
    try {
      let response = await fetch(`http://localhost:5000/api/v1/getuser/${id}`);
      const data = await response.json();

      if (data && data.user) {
        const userData = data.user;
        setUser(userData);
        setForm({
          fullName: userData.name || '',
          email: userData.email || '',
          phone: userData.phone || '',
          address: userData.address || '',
        });
      } else {
        console.error("User data not found");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    getUser();
  }, [id]);

  const handleForm = (e) => {
    setForm((prevForm) => ({
      ...prevForm,
      [e.target.name]: e.target.value,
    }));
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      const formData = new FormData();
      formData.append('name', form.fullName);
      formData.append('phone', form.phone);
      formData.append('address', form.address);

      if (selectedImage) {
        formData.append('profile_img', selectedImage);
      }

      const response = await fetch(`http://localhost:5000/api/v1/users/${id}`, {
        method: 'PUT',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("User updated successfully");

        // Update the user state with new information immediately
        setUser((prevUser) => ({
          ...prevUser,
          name: form.fullName,
          phone: form.phone,
          address: form.address,
          profile_img: selectedImage ? URL.createObjectURL(selectedImage) : prevUser.profile_img,
        }));

        setIsEditing(false);
        setSelectedImage(null); // Clear the selected image after saving
      } else {
        setMessage("Error updating user");
      }
    } catch (error) {
      console.error("Error updating user:", error);
      setMessage("Error updating user");
    }
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setForm({
      fullName: user.name || '',
      email: user.email || '',
      phone: user.phone || '',
      address: user.address || '',
    });
  };

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  return (
    <div className="mx-auto mt-10 bg-white">
      <div className="flex items-center justify-center mb-4">
        {user?.profile_img ? (
          <img
            src={user.profile_img}
            alt="Profile"
            className="w-32 h-32 object-cover rounded-full border-2 border-gray-300"
          />
        ) : (
          <FaUserCircle className="w-32 h-32 text-gray-400" />
        )}
      </div>

      {message && <p className="text-center text-green-500">{message}</p>}

      {isEditing && (
        <div className="text-center">
          <input
            type="file"
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>
      )}

      <form className="mt-6">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="fullName">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={form.fullName}
            disabled={!isEditing}
            onChange={handleForm}
            className={`w-full p-2 border rounded ${isEditing ? 'bg-white' : 'bg-gray-100'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            disabled
            onChange={handleForm}
            className="w-full p-2 border rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
            Phone No
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={form.phone}
            disabled={!isEditing}
            onChange={handleForm}
            className={`w-full p-2 border rounded ${isEditing ? 'bg-white' : 'bg-gray-100'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="address">
            Address
          </label>
          <textarea
            id="address"
            name="address"
            value={form.address}
            disabled={!isEditing}
            onChange={handleForm}
            rows="2"
            cols="5"
            className={`w-full p-2 border rounded ${isEditing ? 'bg-white' : 'bg-gray-100'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          ></textarea>
        </div>



        <div className="flex justify-between mt-6">
          {isEditing ? (
            <>
              <button
                type="button"
                onClick={handleSaveClick}
                className="bg-sky-900 hover:bg-sky-700 text-white w-32 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Save
              </button>
              <button
                type="button"
                onClick={handleCancelClick}
                className="bg-red-500 hover:bg-red-700 text-white w-32 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={handleEditClick}
              className="bg-blue-500 hover:bg-blue-400 text-white w-32 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Edit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MyProfile;
