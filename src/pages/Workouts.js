import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import WorkoutCard from '../components/WorkoutCard';
import Spinner from '../components/Spinner';

const Workouts = () => {

  // API Used Link -> https://github.com/yuhonas/free-exercise-db here I get description of exercise with images
  const [workouts, setWorkouts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredWorkouts, setFilteredWorkouts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 30;

  // Fetch Data
  useEffect(() => {
    async function fetchWorkouts() {
      setLoading(true);
      try {
        const response = await fetch('https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/dist/exercises.json');
        const data = await response.json();
        setWorkouts(data);
        setFilteredWorkouts(data);
        // console.log(data);
      } catch (error) {
        console.log("Failed to fetch workouts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchWorkouts();
  }, []);

  // Search Function
  const handleSearch = () => {
    const filteredData = workouts.filter(workout => workout.name.toLowerCase().includes(searchText.toLowerCase()));
    setFilteredWorkouts(filteredData);
    setCurrentPage(1);
  };

  // Pagination Logic
  const indexOfLastWorkout = currentPage * itemsPerPage;
  const indexOfFirstWorkout = indexOfLastWorkout - itemsPerPage;
  const currentWorkouts = filteredWorkouts.slice(indexOfFirstWorkout, indexOfLastWorkout);
  const totalPage = Math.ceil(filteredWorkouts.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // console.log(currentWorkouts);


  return (
    <div className='relative bg-[#121212] min-h-screen p-8'>
      {
        loading ? (<Spinner />) :
          (
            <div className='bg-[#2C2C2C] rounded-2xl shadow-lg shadow-[#00000066] p-6 w-full max-w-[1200px] mx-auto'>
              <h2 className='text-[#FFFFFF] text-2xl font-semibold mb-4'>Workouts</h2>
              <div className='mb-6'>
                <input
                  type='text'
                  placeholder='Search Workouts...'
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className='bg-[#333333] text-[#FFFFFF] placeholder-[#757575] p-2 rounded-lg w-full mb-4'
                />
                <button onClick={handleSearch}
                  className='bg-[#AA5CED] hover:bg-[#FF5722] text-[#FFFFFF] px-4 py-2 rounded-lg transition duration-300'
                >Search</button>
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                  currentWorkouts.length > 0 ? (
                    currentWorkouts.map((workout) => (
                      <WorkoutCard key={workout.id} workout={workout} />
                    ))
                  ) : (
                    <p className='text-[#9E9E9E]'>No Workouts Found </p>
                  )
                }
              </div>

              {/* Pagination Controls */}
              <div className='flex justify-between items-center mt-8'>
                <button
                  onClick={handlePrevPage}
                  className='text-[12px] sm:text-[14px] md:text-[18px] bg-[#AA5CED] hover:bg-[#FF5722] text-[#FFFFFF] px-2 sm:px-4 py-2 rounded-sm sm:rounded-lg transition duration-300'
                >
                  Previous
                </button>
                <span className='text-[12px] sm:text-[14px] md:text-[18px] text-[#9E9E9E]'>{`Page ${currentPage} of ${totalPage}`}</span>
                <button
                  onClick={handleNextPage}
                  className='text-[12px] sm:text-[14px] md:text-[18px] bg-[#AA5CED] hover:bg-[#FF5722] text-[#FFFFFF] px-2 sm:px-4 py-2 rounded-sm sm:rounded-lg transition duration-300'
                >
                  Next
                </button>


              </div>

            </div>
          )
      }


    </div>
  )
}

export default Workouts