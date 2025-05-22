import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';


const AuthRoutes: React.FC = () => {
  return (
    <Routes >
      <Route path="/" element={<SignIn />} />
      <Route path="SignUp" element={<SignUp />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AuthRoutes;