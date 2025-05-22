import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from '../Pages/SignIn';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
    </Routes>
  );
};

export default AppRoutes;