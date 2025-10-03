// import React from 'react';
// import { useAuth } from '../contexts/AuthContext';

// export default function AuthDebug() {
//   const { currentUser, loading } = useAuth();

//   if (process.env.NODE_ENV !== 'development') {
//     return null;
//   }

//   return (
//     <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 9999 }}>
//       <div className="card" style={{ width: '300px', fontSize: '12px' }}>
//         <div className="card-header bg-info text-white">
//           <strong>Auth Debug</strong>
//         </div>
//         <div className="card-body">
//           <div className="mb-2">
//             <strong>Loading:</strong> {loading ? 'Yes' : 'No'}
//           </div>
//           <div className="mb-2">
//             <strong>User:</strong> {currentUser ? 'Logged In' : 'Not Logged In'}
//           </div>
//           {currentUser && (
//             <>
//               <div className="mb-2">
//                 <strong>Email:</strong> {currentUser.email}
//               </div>
//               <div className="mb-2">
//                 <strong>UID:</strong> {currentUser.uid.substring(0, 8)}...
//               </div>
//               <div className="mb-2">
//                 <strong>Email Verified:</strong> {currentUser.emailVerified ? 'Yes' : 'No'}
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
