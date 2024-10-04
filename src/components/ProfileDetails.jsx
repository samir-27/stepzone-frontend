import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';

const MyProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const initialFormData = {
    fullName: 'name surname',
    email: 'mymail123@gmail.com',
    phone: '9857445125',
  };

  const [form, setForm] = useState(initialFormData);

  const handleForm = (e) => {
    setForm({
      [e.target.name]: e.target.value,
    });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setForm(initialFormData);
  };

  const handleImageChange = (event) => {
    const selectedFile = event.target.files && event.target.files[0];
    if (selectedFile) {
      setSelectedImage(selectedFile);
    }
  };

  return (
    <div className="mx-auto mt-10 bg-white">
      <div className="flex items-center justify-center mb-4">
        {selectedImage ? (
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Selected"
            className="w-32 h-32 object-cover rounded-full border-2 border-gray-300"
          />
        ) : (
          <FaUserCircle className="w-32 h-32 text-gray-400" />
        )}
      </div>

      <div className="text-center">
        <label className="block mb-2 text-gray-700 font-bold">Upload a New Photo</label>
        <input
          type="file"
          onChange={handleImageChange}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
      </div>

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
            disabled={true}
            onChange={handleForm}
            className={`w-full p-2 border rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500`}
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
              className="bg-slate-500 hover:bg-slate-400 text-white w-32 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
