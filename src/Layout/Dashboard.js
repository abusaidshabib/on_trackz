import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from '../Dpages/Shared/SideNav/SideNav';
import { MainLayout } from '../Styled-component/Layout-components';


const Dashboard = () => {
  return (
    <MainLayout>
      <SideNav></SideNav>
      <div></div>
      <Outlet></Outlet>
    </MainLayout>
  );
};

export default Dashboard;