import React, { useState } from 'react';
import axios from 'axios';

function AddAuthor() {
  const [authorData, setAuthorData] = useState({
    FirstName: '',
    LastName: '',
    BirthDate: '',
    Nationality: '',
  });
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAuthorData({ ...authorData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post('http://localhost:3002/authors', authorData, {
        headers: {
          'Content-Type': 'application/json', // Set the content type to JSON
        },
      });

      if (response.status === 200) {
        setSuccess('Author added successfully');
        setAuthorData({
          FirstName: '',
          LastName: '',
          BirthDate: '',
          Nationality: '',
        });
      } else {
        throw new Error('Author could not be added');
      }
    } catch (err) {
      setError('Error adding author');
    }
  };

  return (
    <div className="bg-gray-400">
      <h2 class="justify-center text-center font-bold  text-xl">Add Author</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-gray-200 rounded-lg shadow-lg">
  <div className="mb-4">
    <label className="block text-gray-700">First Name :</label>
    <input
      className="w-full py-2 px-3 bg-black text-gray-200 border border-gray-300 rounded"
      type="text"
      name="FirstName"
      value={authorData.FirstName}
      onChange={handleInputChange}
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700">Last Name:</label>
    <input
      className="w-full py-2 px-3 bg-black text-gray-200 border border-gray-300 rounded"
      type="text"
      name="LastName"
      value={authorData.LastName}
      onChange={handleInputChange}
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700">Birth Date:</label>
    <input
      className="w-full py-2 px-3 bg-black text-gray-200 border border-gray-300 rounded"
      type="date"
      name="BirthDate"
      value={authorData.BirthDate}
      onChange={handleInputChange}
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700">Nationality:</label>
    <input
      className="w-full py-2 px-3 bg-black text-gray-200 border border-gray-300 rounded"
      type="text"
      name="Nationality"
      value={authorData.Nationality}
      onChange={handleInputChange}
    />
  </div>
  <div className="text-center">
    <button className="bg-red-500 hover:bg-gray-700 text-white py-2 px-4 rounded">
      Add Author
    </button>
  </div>
</form>

      {success && <div>{success}</div>}
      {error && <div>{error}</div>}
    </div>
  );
}

export default AddAuthor;
