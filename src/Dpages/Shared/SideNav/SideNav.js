import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../../Context/AuthContext';
import { Button, SideContainer } from '../../../Styled-component/Styled-component';
import { Logo } from '../../../Styled-component/Styled-text';



const SideNav = () => {

  const { logOut, user } = useAuth();

  return (
    <SideContainer>
      <Logo>
        on<span>TRACK_Z</span>
      </Logo>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive, isPending }) =>
            isPending ? "menu" : isActive ? "menu active" : "menu unActive"
          }>Home</NavLink>
        </li>
        <li>
          <NavLink to="/classroom" className={({ isActive, isPending }) =>
            isPending ? "menu" : isActive ? "menu active" : "menu unActive"
          }>ClassRoom</NavLink>
        </li>
        {/* <li>
          <NavLink to="/attendance" className={({ isActive, isPending }) =>
            isPending ? "menu" : isActive ? "menu active" : "menu unActive"
          }>Attendance</NavLink>
        </li>
        <li>
          <NavLink to="/notice" className={({ isActive, isPending }) =>
            isPending ? "menu" : isActive ? "menu active" : "menu"
          }>Notice</NavLink>
        </li> */}
        {/* <li>
          <NavLink to="/takeattendance" className={({ isActive, isPending }) =>
            isPending ? "menu" : isActive ? "menu active" : "menu"
          }>Take Attendance</NavLink>
        </li> */}
        <li>
          <Link className='menu' to="/login">Login</Link>
        </li>
        <li>
          <Link className='menu' to="/register">register</Link>
        </li>
        {
          user && 
          <li>
            <Button className='menu' onClick={logOut}>SignOut</Button>
          </li>
        }
      </ul>
    </SideContainer>
  );
};

export default SideNav;