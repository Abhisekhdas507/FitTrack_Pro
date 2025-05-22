import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { logWorkout } from '../redux/slices/progressSlice';
import Spinner from '../components/Spinner';
import { useSelector } from 'react-redux';

const WorkoutDetails = () => {

  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const { id } = useParams();
  const [workout, setWorkout] = useState(null);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function foundWorkOut() {
      setLoading(true);
      try {
        const response = await fetch('https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/dist/exercises.json');
        const data = await response.json();
        const findData = data.find((d) => d.id === id);
        setWorkout(findData || null);
      } catch (error) {
        console.log("Data not Found of given id ", error);
        setWorkout(null);
      } finally {
        setLoading(false);
      }
    }
    foundWorkOut();
  }, [id]);

  if (!workout) {
    return (
      <div>
        <p>Workout not found.</p>
      </div>
    );
  }


  return (

    <div className='relative bg-[#121212] min-h-screen p-8 flex justify-center items-center'>
      {
        loading ?
          (<Spinner />) :
          (
            <div className="bg-[#2C2C2C] max-w-[1200px] mx-auto p-4 sm:p-8 rounded-lg shadow-lg text-[#E0E0E0]">
              <h2 className="text-[20px] md:text-[30px] xl:text-[36px] font-semibold mb-2 sm:mb-4 text-[#AA5CED] font-[Roboto]">{workout.name}</h2>
              <p className="text-[12px] sm:text-[14px] md:text-[18px] text-gray-400 font-[Poppins]">Category: {workout.category || "Not available"}</p>
              <p className="text-[12px] sm:text-[14px] md:text-[18px] text-gray-400 font-[Poppins]">Force: {workout.force || "Not available"}</p>
              <p className="text-[12px] sm:text-[14px] md:text-[18px] text-gray-400 font-[Poppins]">Mechanic: {workout.mechanic || "Not available"} </p>
              <p className="text-[12px] sm:text-[14px] md:text-[18px] text-gray-400 font-[Poppins]">Equipment: {workout.equipment || "Not available"} </p>

              {/* Primary Muscles */}
              <h2 className="text-[16px] md:text-[25px] xl:text-[30px] font-medium mt-2 text-gray-200 font-[Roboto]">Primary Muscles:</h2>
              <ul className="text-[12px] sm:text-[14px] md:text-[18px] list-disc pl-6 mb-4 text-gray-400 font-[Poppins]">
                {
                  workout.primaryMuscles?.length ? (
                    workout.primaryMuscles.map((targetedMuscle, index) => (
                      <li key={index} className="text-gray-400 font-[Poppins]">{targetedMuscle}</li>
                    ))
                  ) : (
                    <li className="text-[#888888]">No information available.</li>
                  )
                }
              </ul>

              {/* Secondary Muscles */}
              <h2 className="text-[16px] md:text-[25px] xl:text-[30px]  font-medium text-gray-200 font-[Roboto]">Secondary Muscles:</h2>
              <ul className="text-[12px] sm:text-[14px] md:text-[18px] list-disc pl-6 mb-4">
                {
                  workout.secondaryMuscles?.length ? (
                    workout.secondaryMuscles.map((targetedMuscle, index) => (
                      <li key={index} className="text-gray-400 font-[Poppins]">{targetedMuscle}</li>
                    ))
                  ) : (
                    <li className="text-gray-400 font-[Poppins]">No information available.</li>
                  )
                }
              </ul>

              {/* Instructions */}
              <h2 className="text-[16px] md:text-[25px] xl:text-[30px]  font-medium mb-2 text-gray-200 font-[Roboto]">Instructions:</h2>
              <ul className="text-[12px] sm:text-[14px] md:text-[18px] list-disc pl-6 mb-4">
                {
                  workout.instructions?.length ? (
                    workout.instructions.map((step, index) => (
                      <li key={index} className="text-gray-400 font-[Poppins]">{step}</li>
                    ))
                  ) : (
                    <li className="text-gray-400 font-[Poppins]">No instructions available.</li>
                  )
                }
              </ul>

              {/* Images */}
              <div className="flex flex-col justify-center items-center flex-wrap gap-4 mb-4">
                {
                  workout.images?.length ? (
                    workout.images.map((img, index) => (
                      <div key={index} className="flex flex-col items-center gap-2">
                        <p className='text-[16px] md:text-[25px] xl:text-[30px] text-gray-200 font-[Roboto]'>STEP {index + 1}</p>
                        <img

                          src={`https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/${img}`}
                          alt={`${workout.name} - ${index + 1}`}
                          className="w-[600px] object-cover rounded-lg shadow-lg"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>

                    ))
                  ) : (
                    <p className="text-[#888888]">No images available.</p>
                  )
                }
              </div>

              {/* Save Workout  */}

              {isAuthenticated &&
                <div className='flex justify-center items-center'>
                  <button onClick={() => dispatch(logWorkout(workout))}
                    className="bg-[#AA5CED] px-3 sm:px-6 py-1 sm:py-3 rounded-sm sm:rounded-md hover:bg-[#FF5722] transition-colors"
                  >Save Workout</button>
                </div>
              }



            </div>
          )
      }
    </div>
  );
};

export default WorkoutDetails