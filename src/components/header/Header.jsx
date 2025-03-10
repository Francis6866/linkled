import React, { useRef, useState } from 'react'
import { FaSearch, FaBell } from "react-icons/fa";
import { IoHomeSharp, IoPersonCircleSharp  } from "react-icons/io5";
import { BsFillPeopleFill, BsFillBriefcaseFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { RiCheckboxBlankFill } from "react-icons/ri";
import { NavLink } from 'react-router';
import Drop from './Drop';






const Header = () => {
    const [focus, setFocus] = useState(false)
    const [show, setShow] = useState(false)
    const [biz, setBiz] = useState(false)
    const inputRef = useRef(null)

    const handleFocus = () => {
        inputRef.current.focus()
        setFocus(true)
    }
    const handleShow = () => {
        setShow(!show)
        setBiz(false)
    }
    const handleBiz = () => {
        setBiz(!biz)
        setShow(false)
    }


    console.log(focus);
  return (
    <header className='border-b border-[#ccc]'>
        <div className='md:w-[1120px] mx-auto flex md:gap-4 items-center justify-between h-full'>
            <div 
                onBlur={() => setFocus(false)} 
                className={`flex items-center gap-2 w-[15%]`}
            >
                <a href="" className='px-2 py-1 bg-[#0A66C2] font-bold text-amber-50'>in</a>
                <div className={`flex items-center md:bg-[#EDF3F8] p-2 rounded-[10px] gap-1 ${focus && 'w-screen border-2 border-black'} 'w-[15%]'}`}>
                    <FaSearch 
                         onClick={handleFocus}
                         role='button'
                    />
                    <input 
                         type="text"
                         placeholder='Search' 
                         className={`px-2 border-0 outline-0 grow-1 w-auto ${focus ? 'block w-screen' : 'hidden'} md:block`}
                         ref={inputRef}
                    />
                </div>
            </div>

            <nav className={`w-[85%] md:w-auto ${focus && 'hidden'}`}>
                <ul className='flex justify-evenly gap-6'>
                    <NavLink to="/" className={({isActive}) => isActive ? "flex flex-col items-center justify-center pb-2 border-b-2 border-black" : "flex flex-col items-center justify-center"}>
                        <IoHomeSharp size={'25px'}/>
                        <p className='hidden md:block text-[0.75rem]'>Home</p>
                    </NavLink>

                    <NavLink to="/network" className={({isActive}) => isActive ? "flex flex-col items-center justify-center pb-2 border-b-2 border-black" : "flex flex-col items-center justify-center"}>
                        <BsFillPeopleFill size={'25px'}/>
                        <p className='hidden md:block text-[0.75rem]'>My Network</p>
                    </NavLink>

                    <NavLink to="/jobs" className={({isActive}) => isActive ? "flex flex-col items-center justify-center pb-2 border-b-2 border-black" : "flex flex-col items-center justify-center"}>
                        <BsFillBriefcaseFill size={'25px'}/>
                        <p className='hidden md:block text-[0.75rem]'>Jobs</p>
                    </NavLink>
                    <NavLink to="/message" className={({isActive}) => isActive ? "flex flex-col items-center justify-center pb-2 border-b-2 border-black" : "flex flex-col items-center justify-center"}>
                        <AiFillMessage size={'25px'}/>
                        <p className='hidden md:block text-[0.75rem]'>Messaging</p>
                    </NavLink>
                    <NavLink to="/notify" className={({isActive}) => isActive ? "flex flex-col items-center justify-center pb-2 border-b-2 border-black" : "flex flex-col items-center justify-center"}>
                        <FaBell size={'25px'}/>
                        <p className='hidden md:block text-[0.75rem]'>Notification</p>
                    </NavLink>
                    <li className="flex flex-col items-center justify-center relative" onClick={handleShow}>
                        <IoPersonCircleSharp size={'25px'}/>
                        <p className='hidden md:block text-[0.75rem]'>Me</p>
                        {
                          show && <Drop />
                        }
                    </li>
                    <li className="flex flex-col items-center justify-center border-l-2 border-l-black pl-1.5 relative" onClick={handleBiz}>
                        <TbGridDots size={'25px'}/>
                        <p className='hidden md:block text-[0.75rem]'>For Business</p>
                        {
                          biz && <Drop />
                        }
                    </li>
                    <li className="flex flex-col items-center justify-center">
                        <RiCheckboxBlankFill size={'25px'}/>
                        <p className='hidden md:block text-[0.75rem]'>Try Premium for NGN0</p>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header