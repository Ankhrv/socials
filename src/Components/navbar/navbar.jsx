import React from 'react';
import s1 from './navbar.module.css';
import { NavLink } from "react-router-dom";
import '../../App.css';

const setActive = ({isActive}) => isActive ? 'active-link' : 'notactive' ;
const setActive2 = ({isActive}) => isActive ? 'active-link2' : 'notactive2' ;
const setActive3 = ({isActive}) => isActive ? 'active-link3' : 'notactive3' ;
const setActive4 = ({isActive}) => isActive ? 'active-link4' : 'notactive4' ;
const setActive5 = ({isActive}) => isActive ? 'active-link5' : 'notactive5' ;
const Navbar = () => {
    return    (
    <nav className={s1.nav}>
    <div className={s1.item}>
    <NavLink to='/profile' className={setActive} style={{ textDecoration: 'none'}}>Profile</NavLink>
      </div><div className={s1.item}>
      <NavLink to='/dialogs' className={setActive2} style={{ textDecoration: 'none'}}>Messages</NavLink>
      </div><div className={s1.item}>
      <NavLink to='/' className={setActive3} style={{ textDecoration: 'none'}}>News</NavLink>
      </div><div className={s1.item}>
      <NavLink to='/' className={setActive4} style={{ textDecoration: 'none'}}>Music</NavLink>
      </div><div className={s1.item}>
      <NavLink to='/' className={setActive5} style={{ textDecoration: 'none'}}>Setings</NavLink>
      </div>
  </nav>
    )
}

export default Navbar;