import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from "../assets/Logo/logo1.png"
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../redux/slices/userSlice'

const Navbar = () => {

  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/');
  }

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className='bg-[#2C2C2C] w-full py-4'>
      <div className='container mx-auto flex justify-between items-center h-full max-w-[1200px] px-4'>
        {/* Logo */}
        <div className='w-[200px] sm:w-[250px] md:w-[300px]'>
          <Link to="/" >
            <img  src={Logo} alt='Logo' />
          </Link>
        </div>

        {/* Navigation Links and Buttons */}
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 lg:space-x-6 items-center text-white font-medium">
          <Link to='/' className="hover:text-[#AA5CED]">Home</Link>
          <Link to='/workouts' className="hover:text-[#AA5CED]" >Workouts</Link>


          {/* Conditional Links based on Authentication */}
          {isAuthenticated &&
            <Link to='/progress' className="hover:text-[#AA5CED]">Progress</Link>
          }
          {isAuthenticated &&
            <Link to='/profile' className="hover:text-[#AA5CED]">Profile</Link>
          }

          {/* Conditional Log Out Button */}
          {isAuthenticated &&
            <button onClick={handleLogout} className="bg-[#AA5CED] hover:bg-[#FF5722] text-white px-4 py-2 rounded-lg">Log Out</button>
          }

          {/* Conditional Log IN and sign up Buttons */}
          {!isAuthenticated &&
            <Link to="/login">
              <button className="bg-[#AA5CED] hover:bg-[#FF5722] text-white px-4 py-2 rounded-lg">Log In</button>
            </Link>
          }
          {!isAuthenticated &&
            <Link to="/signup">
              <button className="bg-[#AA5CED] hover:bg-[#FF5722] text-white px-4 py-2 rounded-lg">Sign Up</button>
            </Link>
          }

        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <span className="material-icons text-2xl text-[#E0E0E0]">{isOpen ? (
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="m12 12.708l-5.246 5.246q-.14.14-.344.15t-.364-.15t-.16-.354t.16-.354L11.292 12L6.046 6.754q-.14-.14-.15-.344t.15-.364t.354-.16t.354.16L12 11.292l5.246-5.246q.14-.14.345-.15q.203-.01.363.15t.16.354t-.16.354L12.708 12l5.246 5.246q.14.14.15.345q.01.203-.15.363t-.354.16t-.354-.16z" /></svg>
            </div>
          ) : (
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" fillRule="evenodd" d="M20.75 7a.75.75 0 0 1-.75.75H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 .75.75m0 5a.75.75 0 0 1-.75.75H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 .75.75m0 5a.75.75 0 0 1-.75.75H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 .75.75" clipRule="evenodd" /></svg>
            </div>
          )}</span>
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-1 text-[12px] sm:text-[14px] sm:gap-2 text-white font-medium px-4 pt-4">
          <Link to='/' className="hover:text-[#AA5CED]">Home</Link>
          <Link to='/workouts' className="hover:text-[#AA5CED]" >Workouts</Link>


          {/* Conditional Links based on Authentication */}
          {isAuthenticated &&
            <Link to='/progress' className="hover:text-[#AA5CED]">Progress</Link>
          }
          {isAuthenticated &&
            <Link to='/profile' className="hover:text-[#AA5CED]">Profile</Link>
          }

          {/* Conditional Log Out Button */}
          {isAuthenticated &&
            <button onClick={handleLogout} className="bg-[#AA5CED] hover:bg-[#FF5722] text-white w-[80px] sm:w-[100px] px-4 py-1 sm:py-2 rounded-sm sm:rounded-lg">Log Out</button>
          }

          {/* Conditional Log IN and sign up Buttons */}
          {!isAuthenticated &&
            <Link to="/login">
              <button className="bg-[#AA5CED] hover:bg-[#FF5722] text-white px-4 py-1 sm:py-2 rounded-sm sm:rounded-lg w-[80px] sm:w-[100px]">Log In</button>
            </Link>
          }
          {!isAuthenticated &&
            <Link to="/signup">
              <button className="bg-[#AA5CED] hover:bg-[#FF5722] text-white px-4 py-1 sm:py-2 rounded-sm sm:rounded-lg w-[80px] sm:w-[100px]">Sign Up</button>
            </Link>
          }

        </div>
      )}

    </div>
  )
}

export default Navbar