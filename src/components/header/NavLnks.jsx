import React from 'react'
import { FaSearch, FaBell } from "react-icons/fa";
import { IoHomeSharp, IoPersonCircleSharp  } from "react-icons/io5";
import { BsFillPeopleFill, BsFillBriefcaseFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { RiCheckboxBlankFill } from "react-icons/ri";
import { NavLink } from 'react-router';

const NavLnks = ({to, name, fa}) => {
  return (
    <NavLink to={to} className={({isActive}) => isActive ? "flex flex-col items-center justify-center pb-2 border-b-2 border-black" : "flex flex-col items-center justify-center"}>
        {`${<${fa} size={'25px'}/>}`}
        <p className='hidden md:block text-[0.75rem]'>{name}</p>
    </NavLink>
  )
}

export default NavLnks
