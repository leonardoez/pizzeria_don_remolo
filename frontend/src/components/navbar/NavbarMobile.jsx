import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from '../../redux/authReducer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faBurger } from '@fortawesome/free-solid-svg-icons'

import './navbarMobile.css'
import logo from '../../assets/images/logo.jpg'
import { Layout } from '../layout/Layout';



// Hacer funcion de desplegado
export const NavbarMobile = () => {
  const logged = useSelector(store => store.auth.ok)
  const dispatch = useDispatch()

  useEffect(()=>{
  }, [logged])
  
  const handleLogout = () => {
    dispatch(logoutAction())
  }
  
  return (
    <div className="navbarMobile">
      <div className="navbarMobile-buttons">
        <div className="logo">
          <Link to="/">
            <img src={logo}></img>
            Don Remolo
          </Link>
        </div>
        <div className="navbarMobile-buttons_btn">
          <Layout />
        </div>
      </div>
      <div className="collapse">
        
      </div>
    </div>
  )
};