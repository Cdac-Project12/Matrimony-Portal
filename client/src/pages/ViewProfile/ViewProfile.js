// import React from 'react';
// import { useParams } from 'react-router-dom';

// const ViewProfile = () => {
//   const { id } = useParams(); // Get profile ID from URL

//   // Example profile data (replace with API fetch in real application)
//   const profiles = [
//     {
//       id: '1',
//       name: 'Samantha Ruthprabhu',
//       age: 28,
//       bio: 'Loves traveling, cooking, and photography.',
//       img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA5ABTIqdZJBItCts9_LFVwju2I0SiIYOahA&s',
//     },
//     {
//       id: '2',
//       name: 'Anushka Shetty',
//       age: 25,
//       bio: 'Avid reader and passionate about fitness.',
//       img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJBmLOg0R_1CQwY0Uw6Dsp7BFud3Al0ySXGQ&s',
//     },
//     // Add more profiles...
//   ];

//   const profile = profiles.find((p) => p.id === id);

//   if (!profile) {
//     return <p>Profile not found!</p>;
//   }

//   return (
//     <div className="container mt-4">
//       <div className="text-center">
//         <img
//           src={profile.img}
//           alt={profile.name}
//           className="rounded-circle mb-3"
//           style={{ width: '150px', height: '150px' }}
//         />
//         <h2>{profile.name}</h2>
//         <p>Age: {profile.age}</p>
//         <p>{profile.bio}</p>
//       </div>
//     </div>
//   );
// };

// export default ViewProfile;
