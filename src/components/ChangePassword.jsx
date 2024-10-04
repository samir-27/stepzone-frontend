import React, { useState } from 'react';

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword1: '',
    newPassword2: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (formData.newPassword1 !== formData.newPassword2) {
      setError('New passwords do not match');
    } else if (!formData.oldPassword || !formData.newPassword1 || !formData.newPassword2) {
      setError('All fields are required');
    } else {
      setError('');

    //   console.log('Password changed successfully!');
    }
  };

  return (
    <div>
      <form className="mt-6">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Enter Old Password
          </label>
          <input
            type="password"
            id="oldPassword"
            name="oldPassword"
            value={formData.oldPassword}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Enter New Password
          </label>
          <input
            type="password"
            id="newPassword1"
            name="newPassword1"
            value={formData.newPassword1}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Retype New Password
          </label>
          <input
            type="password"
            id="newPassword2"
            name="newPassword2"
            value={formData.newPassword2}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {error && <p className="text-red-500 font-semibold mb-4">{error}</p>}

        <button
          type="button"
          onClick={handleSubmit}
          className="bg-slate-500 hover:bg-slate-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Set Password
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
