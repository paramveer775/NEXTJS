import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetUserDetails() {
  const [userIdToFetch, setUserIdToFetch] = useState('');
  const [author, setAuthor] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAuthorById = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`http://localhost:3002/authors/${userIdToFetch}`);

      if (response.status === 200) {
        const authorData = response.data;
        setAuthor(authorData);
      } else {
        throw new Error('Author not found');
      }
    } catch (error) {
      console.error('Error fetching author:', error);
      setError('Author not found or an error occurred while fetching author details.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userIdToFetch) {
      fetchAuthorById();
    }
  }, [userIdToFetch]);

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg text-center">
    <h2 className="text-xl font-semibold text-gray-700 mb-4">Get User Details</h2>
    <div className="mb-4 flex justify-center items-center">
      <label className="mr-2 text-gray-700">User ID:</label>
      <input
        className="border border-solid border-gray-400 focus:border-blue-500 focus:outline-none px-3 py-2 rounded bg-slate-600 text-gray-200"
        type="text"
        value={userIdToFetch}
        onChange={(e) => setUserIdToFetch(e.target.value)}
      />
      <button
        className="ml-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
        onClick={fetchAuthorById}
      >
        Get Details
      </button>
    </div>
  
    {loading && <div className="text-center mt-4">Loading...</div>}
    {error && <div className="text-red-500 mt-4">Error: {error}</div>}
    {author && (
      <div className="bg-white rounded shadow-lg p-4 mt-4">
        <h2 className="text-xl text-blue-500 font-semibold mb-2">Author Details</h2>
        <p className="text-gray-700">Author ID : {author.AuthorID}</p>
        <p className="text-gray-700">First Name : {author.FirstName}</p>
        <p className="text-gray-700">Last Name: {author.LastName}</p>
        <p className="text-gray-700">
          Birth Date: {new Date(author.BirthDate).toLocaleDateString()}
        </p>
        <p className="text-gray-700">Nationality: {author.Nationality}</p>
      </div>
    )}
  </div>
  
  
  );
}

export default GetUserDetails;




    // const handleDelete = async () => {
    //     try {
    //         const response = await axios.fetch(`http://localhost:3002/authors/${userIdToDelete}`);
    //         setDeletionStatus('User deleted successfully.');
    //     } catch (error) {
    //         console.error('Error deleting user:', error);
    //     }
    // };

    // return (
    //     <div>
    //         <h2>Delete User</h2>
    //         <label>
    //             User ID:
    //             <input className="border border-solid border-gray-400 focus:border-blue-500 focus:outline-none ml-2 bg-slate-600"
    //                 type="text"
    //                 value={userIdToDelete}
    //                 onChange={(e) => setUserIdToDelete(e.target.value)}
    //             />
    //         </label>
    //         <button className="ml-2" onClick={handleDelete}>Delete</button>
    //     </div>
//     );


    

//     <div>
     
//       <ul>
//         {data.map((author) => (
//           <li key={author.AuthorID}>
//             Author ID: {author.AuthorID}<br />
//             First Name: {author.FirstName}<br />
//             Last Name: {author.LastName}<br />
//             Birth Date: {new Date(author.BirthDate).toLocaleDateString()}<br />
//             Nationality: {author.Nationality}<br />
//           </li>
//         ))}
//       </ul>
//     </div>
 
// }

