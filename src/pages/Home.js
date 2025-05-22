import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import heroSection from '../assets/HomePage/hero section.jpg';
import trackYourWork from '../assets/HomePage/Track your work.jpg';
import VisualizeYourProgress from '../assets/HomePage/success.png';
import Ai from '../assets/HomePage/AI.jpg'
import suggestion from '../assets/HomePage/progress.png';
import mobileFriendly from '../assets/HomePage/mobile friendly.png';



const Home = () => {

  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  return (
    <div className="bg-[#121212] min-h-screen py-10 sm:py-16">
      <div className="max-w-[1200px] mx-auto px-4 space-y-10 sm:space-y-16">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-8 bg-[#2C2C2C] p-4 sm:p-8 rounded-lg shadow-lg">
          <div className="flex-1 space-y-4">
            <h1 className="text-[20px] md:text-[30px] xl:text-[36px] font-bold text-gray-200 font-[Roboto]">Welcome to FitTrack Pro</h1>
            <p className="text-[12px] sm:text-[14px] md:text-[18px] text-gray-400 font-[Poppins]">
              Track your fitness journy, log workouts, monitor progress, and get AI-powered coaching.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link to='/workouts' className="text-[12px] sm:text-[14px] md:text-[18px] bg-[#FF5722] font-[Poppins] px-3 sm:px-6 py-2 rounded-md hover:bg-[#FF7043] transition">Start a Workout</Link>
              {isAuthenticated &&
                <Link to='/progress' className="text-[12px] sm:text-[14px] md:text-[18px] bg-[#AA5CED] font-[Poppins] px-6 py-2 rounded-md hover:bg-[#BA68C8] transition">View Progress</Link>
              }
              {
                isAuthenticated &&
                <Link to='/profile' className="text-[12px] sm:text-[14px] md:text-[18px] bg-[#29B6F6] font-[Poppins] px-6 py-2 rounded-md hover:bg-[#4FC3F7] transition">Your Profile</Link>
              }

            </div>
          </div>
          <div className="flex-1">
            <img src={heroSection} alt="Fitness" className="w-full rounded-lg shadow-lg" />
          </div>
        </section>

        {/* Track Workouts Section */}
        <section className="bg-[#1A1A1A] p-4 sm:p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between gap-8">
          {/* image of exercise */}
          <img src={trackYourWork} alt="Workouts" className="w-full md:w-[40%] rounded-lg shadow-lg md:h-[600px] object-cover" />
          <div className="flex-1">
            <h2 className="text-[20px] md:text-[30px] xl:text-[36px] font-semibold mb-4 text-gray-200 font-[Roboto]">Track Your Workouts</h2>
            <p className="text-[12px] sm:text-[14px] md:text-[18px] mb-2 sm:mb-4 text-gray-400 font-[Poppins]">Easily log your sets, reps, duration, and calories. Get insights into your training routines and stay organized effortlessly.</p>
            <p className='text-[12px] sm:text-[14px] md:text-[18px] text-gray-400 font-[Poppins]'>Whether you're lifting weights, running, or practicing yoga, FitTrack Pro keeps your data safe and accessible anytime, anywhere.</p>
          </div>
        </section>

        {/* Progress Section */}
        <section className="bg-[#2B2B2B] p-4 sm:p-8 rounded-lg shadow-lg flex flex-col md:flex-row-reverse items-center justify-between gap-8">
          {/* image inticate the progress chart */}
          <img src={VisualizeYourProgress} alt="Progress" className="w-full md:w-1/2 rounded-lg shadow-lg" />
          <div className="flex-1">
            <h2 className="text-[20px] md:text-[30px] xl:text-[36px] font-semibold mb-4 text-gray-200 font-[Roboto]">Visualize Your Progress</h2>
            <p className="text-[12px] sm:text-[14px] md:text-[18px] mb-2 sm:mb-4 text-gray-400 font-[Poppins]">See your journey in real-time through progress charts and goal tracking. Stay motivated and focused on your fitness milestones.</p>
            <p className="text-[12px] sm:text-[14px] md:text-[18px] mb-2 sm:mb-4 text-gray-400 font-[Poppins]">Stay motivated by tracking your progress with easy-to-read charts and analytics. Visualize your gains and celebrate every milestone.</p>
            <p className='text-[12px] sm:text-[14px] md:text-[18px] text-gray-400 font-[Poppins]'>From weight tracking to workout intensity, every metric is recorded and displayed in beautiful graphs to keep you on track.</p>
          </div>
        </section>


        {/* AI Tips Section */}
        <section className="bg-[#1F1F1F] p-4 sm:p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between gap-8">
          {/* image of Ai Technology */}
          <img src={Ai} alt="AI Coaching" className="w-full md:w-1/2 rounded-lg shadow-lg" />
          <div className="flex-1">
            <h2 className="text-[20px] md:text-[30px] xl:text-[36px] font-semibold mb-4 text-gray-200 font-[Roboto]">AI-Powered Coaching</h2>
            <p className='text-[12px] sm:text-[14px] md:text-[18px] mb-2 sm:mb-4 text-gray-400 font-[Poppins]'>Get smart, personalized recommendations from our integrated AI coach. Improve your workouts, avoid plateaus, and grow efficiently.</p>
            <p className="text-[12px] sm:text-[14px] md:text-[18px] mb-2 sm:mb-4 text-gray-400 font-[Poppins]">Receive smart, personalized workout recommendations based on your past workouts and fitness goals. Avoid plateaus and maximize your potential.</p>
            <p className='text-[12px] sm:text-[14px] md:text-[18px] text-gray-400 font-[Poppins]'>Our AI coach learns from your performance and suggests improvements to keep you growing stronger, smarter, and fitter.</p>
          </div>
        </section>


        {/* Profile section */}
        <section className="bg-[#292929] p-4 sm:p-8 rounded-lg shadow-lg flex flex-col md:flex-row-reverse items-center justify-between gap-8">
          {/* image profile , user */}
          <img src={suggestion} alt="Profile" className="w-full md:w-1/2 rounded-lg shadow-lg" />
          <div className="flex-1">
            <h2 className="text-[20px] md:text-[30px] xl:text-[36px] font-semibold mb-4 text-gray-200 font-[Roboto]">Your Fitness Profile</h2>
            <p className="text-[12px] sm:text-[14px] md:text-[18px] mb-2 sm:mb-4 text-gray-400 font-[Poppins]">Build a personalized profile with your fitness goals, preferences , and history. Everything you need is saved securely in one place.</p>
            <p className="text-[12px] sm:text-[14px] md:text-[18px] mb-2 sm:mb-4 text-gray-400 font-[Poppins]">Create a personalized profile to keep track of your fitness journey. Record personal records, goals, and achievements all in one place.</p>
            <p className='text-[12px] sm:text-[14px] md:text-[18px] text-gray-400 font-[Poppins]'>Your profile is your fitness passport. Stay consistent and watch yourself transform over time.</p>
          </div>
        </section>


        {/* Mobile Friendly */}
        <section className="bg-[#1D1D1D] p-4 sm:p-8rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between gap-8">
          {/* image mobile, app unsplash */}
          <img src={mobileFriendly} alt="Mobile" className="w-full md:w-1/2 rounded-lg shadow-lg" />
          <div className="flex-1">
            <h2 className="text-[20px] md:text-[30px] xl:text-[36px] font-semibold mb-2 sm:mb-4 text-gray-200 font-[Roboto]">Track Anytime, Anywhere</h2>
            <p className="text-[12px] sm:text-[14px] md:text-[18px] mb-2 sm:mb-4 text-gray-400 font-[Poppins]">Our responsive design ensures that you can log workouts, view progress, and access coaching on any device — at the gym, home, or on the go.</p>
            <p className='text-[12px] sm:text-[14px] md:text-[18px] text-gray-400 font-[Poppins]'>No matter where you are, FitTrack Pro has you covered with seamless, user-friendly access.</p>
          </div>
        </section>

      </div>
    </div>
  )
}

export default Home