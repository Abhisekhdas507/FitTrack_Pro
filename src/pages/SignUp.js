import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser, signUpUser } from '../redux/slices/userSlice';
import { toast } from 'react-toastify';


const SignUp = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    gender: "Male",
    password: "",
    confirmPassword: ""
  });

  function changeHandler(event) {
    setFormData((prevData) => (
      {
        ...prevData,
        [event.target.name]: event.target.value
      }
    ));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      // alert("Passwords do not match!");
      toast.error("Passwords do not match!");
      return;
    }

    const newUser = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      age: formData.age,
      gender: formData.gender,
      password: formData.password,
    }

    dispatch(signUpUser(newUser));
    dispatch(loginUser(newUser));
    navigate('/');
  }



  return (
    <div className="bg-[#121212] min-h-screen flex items-center justify-center p-4">
      <div className="bg-[#2C2C2C] shadow-[0px_0px_10px_rgba(255,255,255,0.5)] rounded-2xl p-4 sm:p-8 w-full max-w-lg">
        <div className="text-center mb-6">
          <p className="text-[30px] xl:text-[36px] text-[#FFFFFF] font-[Roboto] font-semibold mb-2">Get Started</p>
          <p className="text-[#9E9E9E] text-sm font-[Poppins]">
            Already a member ? <Link to="/login" className="text-[#AA5CED] hover:text-[#FF5722]"> <span>Log in</span> </Link>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-4 font-[Poppins]">

          {/* First Name and Last Name */}
          <div className="flex gap-4 font-[Poppins]">
            <div className="flex flex-col w-1/2">
              <label className="text-[#FFFFFF] mb-1">
                <p className='text-[12px] sm:text-[14px] md:text-[18px]'>First Name <sup>*</sup></p>
                <input
                  required
                  type="text"
                  name='firstName'
                  onChange={changeHandler}
                  placeholder='Enter First Name'
                  value={formData.firstName}
                  className="text-[12px] w-[150px] sm:w-full sm:text-[14px] md:text-[18px] bg-[#333333] text-[#FFFFFF] p-2 rounded-sm sm:rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AA5CED]"
                />
              </label>
            </div>
            <div className="flex flex-col w-1/2">
              <label className="text-[#FFFFFF] mb-1">
                <p className='text-[12px] sm:text-[14px] md:text-[18px]'>Last Name <sup>*</sup></p>
                <input
                  required
                  type="text"
                  name='lastName'
                  onChange={changeHandler}
                  placeholder='Enter Last Name'
                  value={formData.lastName}
                  className="text-[12px] w-[150px] sm:w-full sm:text-[14px] md:text-[18px] bg-[#333333] text-[#FFFFFF] p-2 rounded-sm sm:rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AA5CED]"
                />
              </label>
            </div>

          </div>
          {/* age and gender */}
          <div className="flex gap-4">
            <div className="flex flex-col w-1/2">
              <label className="text-[#FFFFFF] mb-1">
                <p className='text-[12px] sm:text-[14px] md:text-[18px]'>Age <sup>*</sup></p>
                <input
                  required
                  type="number"
                  name='age'
                  onChange={changeHandler}
                  placeholder='Enter your age'
                  value={formData.age}
                  className="text-[12px] sm:text-[14px] md:text-[18px] bg-[#333333] w-[150px] sm:w-full text-[#FFFFFF] p-2 rounded-sm sm:rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AA5CED]"
                />
              </label>
            </div>
            <div className="flex flex-col w-1/2">
              <label>
                <p className="text-[#FFFFFF] mb-1 text-[12px] sm:text-[14px] md:text-[18px]">Gender</p>
                <select
                  name='gender'
                  value={formData.gender}
                  onChange={changeHandler}
                  className="bg-[#333333] text-[12px] sm:text-[14px] md:text-[18px] text-[#FFFFFF] p-2 rounded-sm sm:rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AA5CED]"
                >
                  <option value="Male" >Male</option>
                  <option value="Female" >Female</option>
                  <option value="Other" >Other</option>
                </select>
              </label>
            </div>
          </div>

          {/* email */}
          <div className="flex flex-col">
            <label className="text-[#FFFFFF] mb-1">
              <p className='text-[12px] sm:text-[14px] md:text-[18px]'>Email Address <sup>*</sup></p>
              <input
                required
                type="email"
                name='email'
                onChange={changeHandler}
                placeholder='Enter your Email Address'
                value={formData.email}
                className="text-[12px] sm:text-[14px] md:text-[18px] bg-[#333333] text-[#FFFFFF] p-2 rounded-sm sm:rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AA5CED]"
              />
            </label>
          </div>

          {/* createPassword and confirm password */}
          <div className="flex gap-4">
            <div className="flex flex-col w-1/2">
              <label className="text-[#FFFFFF] mb-1">
                <p className='text-[12px] sm:text-[14px] md:text-[18px]'>Create Password <sup>*</sup></p>
                <input
                  required
                  type={showPassword ? ("text") : ("password")}
                  name='password'
                  onChange={changeHandler}
                  placeholder='Enter Password'
                  value={formData.password}
                  className="text-[12px] w-[150px] sm:w-full sm:text-[14px] md:text-[18px] bg-[#333333] text-[#FFFFFF] p-2 rounded-sm sm:rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AA5CED]"
                />
              </label>
            </div>
            <div className="flex flex-col w-1/2">
              <label className="text-[#FFFFFF] mb-1">
                <p className='text-[12px] sm:text-[14px] md:text-[18px]'>Confirm Password <sup>*</sup></p>
                <input
                  required
                  type={showConfirmPassword ? ("text") : ("password")}
                  name='confirmPassword'
                  onChange={changeHandler}
                  placeholder='Confirm Password'
                  value={formData.confirmPassword}
                  className="text-[12px] sm:text-[14px] md:text-[18px] bg-[#333333] w-[150px] sm:w-full text-[#FFFFFF] p-2 rounded-sm sm:rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AA5CED]"
                />
              </label>
            </div>

          </div>

          {/*Creacte Account Button */}
          <div className="flex justify-center mt-4">
            <button type='submit' className="text-[12px] sm:text-[14px] md:text-[18px] bg-[#AA5CED] hover:bg-[#FF5722] text-[#FFFFFF] py-2 px-6 rounded-sm sm:rounded-lg transition-colors duration-300">
              Create Account
            </button>
          </div>

        </form>

      </div>
    </div>
  )
}

export default SignUp