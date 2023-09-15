// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router'


// const UserInfoPage = () => {

//     const router = useRouter();
//     const [data, setData] = useState([
//         {
//           AuthorID: 0,
//           FirstName: '',
//           LastName: '',
//           BirthDate: '',
//           Nationality: '',
//         },
//       ]);
//       const [loading, setLoading] = useState(true);
//       const [error, setError] = useState(null);
    
//       useEffect(() => {
//         const fetchData = async () => {
//           try {
//             const response = await fetch('http://localhost:3002/authors/${id}');
    
//             if (!response.ok) {
//               throw new Error('Network response was not ok');
//             }
    
//             const responseData = await response.json();
    
//             setData(responseData);
//             setLoading(false);
//           } catch (error) {
//             console.error('Error fetching data:', error);
//             setError('Error fetching data. Please try again later.');
//             setLoading(false);
//           }
//         };
    
//         fetchData();
//       }, []);

//     return (

//         <div> 
//           <h1>username</h1>
  
//          </div>
//             )
    
// }