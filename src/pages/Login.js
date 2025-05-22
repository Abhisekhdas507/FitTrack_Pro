import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import { loginUser } from '../redux/slices/userSlice';
import { useDispatch } from 'react-redux'

const Login = () => {


    const navigate = useNavigate();
    const users = useSelector((state) => state.progress.users);
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }

    const [showPassword, setShowPassword] = useState(false);

    function formSubmit(e) {
        // console.log("Hero");
        e.preventDefault();
        const newUser = {
            email: formData.email,
            password: formData.password,
        }
        console.log(newUser.email);

        const validUser = users.find((e) => formData.email === e.email && e.password === formData.password);

        if (validUser) {
            dispatch(loginUser(newUser));
            // alert("Login Successful");
            toast.success("Login successfully!");
            navigate('/');
        } else {
            // alert("Invalid User");
            toast.error("Invalid User");
            setFormData({
                email: "",
                password: ""
            });
        }

    }


    return (
        <div className="bg-[#121212] min-h-screen flex justify-center items-center">
            {/* Login Card */}
            <div className='bg-[#1E1E1E] shadow-[0px_0px_10px_rgba(255,255,255,0.5)] p-6 sm:p-8 rounded-lg w-80 sm:w-96'>
                <h2 className='text-white text-[30px] xl:text-[36px] font-semibold mb-4'>Log In</h2>
                <div>
                    <form onSubmit={formSubmit}>
                        <label className='block text-white mb-0 sm:mb-2'>
                            <p className='text-[12px] sm:text-[14px] md:text-[18px]'>Email Address <sup className='text-red-500'>*</sup></p>
                            <input
                                required
                                type='email'
                                value={formData.email}
                                onChange={changeHandler}
                                placeholder='Enter email address'
                                name='email'
                                className='text-[12px] sm:text-[14px] md:text-[18px] w-full p-2 sm:p-3 bg-[#2C2C2C] text-white border border-[#444444] rounded-sm sm:rounded-lg mb-4'
                            />
                        </label>
                        <label className='block text-white mb-1 sm:mb-2'>
                            <p className='text-[12px] sm:text-[14px] md:text-[18px]'>Password <sup className='text-red-500'>*</sup></p>
                            <input
                                required
                                type={showPassword ? ("text") : ("password")}
                                value={formData.password}
                                onChange={changeHandler}
                                placeholder='Enter Password'
                                name='password'
                                className='text-[12px] sm:text-[14px] md:text-[18px] w-full p-2 sm:p-3 bg-[#2C2C2C] text-white border border-[#444444] rounded-sm sm:rounded-lg mb-4'
                            />
                            <Link to="#" className='text-[#AA5CED] hover:text-[#FF5722]'>
                                <p className='text-[12px] sm:text-[14px] md:text-[18px]'>
                                    Forgot Password
                                </p>
                            </Link>


                        </label>

                        <button type='submit' className='text-[12px] sm:text-[14px] md:text-[18px] w-full p-2 sm:p-3 bg-[#AA5CED] text-white rounded-sm sm:rounded-lg hover:bg-[#9C45A3]'>
                            Log In
                        </button>


                    </form>
                </div>
                <div className="flex items-center my-2 sm:my-4">
                    <div className="w-full h-[1px] bg-[#444444]"></div>
                    <p className="text-[14px] md:text-[18px] text-[#9E9E9E] font-medium mx-4">Or</p>
                    <div className="w-full h-[1px] bg-[#444444]"></div>
                </div>

                <div>
                    <button className="text-[12px] sm:text-[14px] md:text-[18px] w-full flex justify-center items-center rounded-sm sm:rounded-lg bg-[#2C2C2C] text-[#A3A3A3] border border-[#444444] px-4 py-2 gap-x-2">
                        <FcGoogle />
                        <p>Sign Up with Google</p>
                    </button>
                </div>

                <p className='text-[12px] text-[#5f82af] mt-1 text-center'>
                    Dont't have an account ? <Link to='/signup'> <span className='text-[#AA5CED]'>Sign up for free</span> </Link>
                </p>

            </div>
        </div>
    )
}

export default Login