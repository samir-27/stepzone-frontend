import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword1: '',
    newPassword2: '',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const { id } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    setError('');
    setMessage('');

    if (formData.newPassword1 !== formData.newPassword2) {
      setError('New passwords do not match');
      return;
    }

    if (!formData.oldPassword || !formData.newPassword1 || !formData.newPassword2) {
      setError('All fields are required');
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/v1/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password: formData.newPassword1, // Backend expects "password"
          oldPassword: formData.oldPassword, // Send old password for verification if required
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage(result.message || 'Password updated successfully');
        setFormData({
          oldPassword: '',
          newPassword1: '',
          newPassword2: '',
        });
      } else {
        setError(result.message || 'Error updating password');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('An unexpected error occurred');
    }
  };

  return (
    <div className="mt-6">
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700 font-bold mb-2">
            Enter Old Password
          </label>
          <input
            type="password"
            name="oldPassword"
            value={formData.oldPassword}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-bold mb-2">
            Enter New Password
          </label>
          <input
            type="password"
            name="newPassword1"
            value={formData.newPassword1}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-bold mb-2">
            Retype New Password
          </label>
          <input
            type="password"
            name="newPassword2"
            value={formData.newPassword2}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {error && <p className="text-red-500 font-semibold">{error}</p>}
        {message && <p className="text-green-500 font-semibold">{message}</p>}

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
