import React from 'react'
import { useNavigate } from 'react-router-dom'

const WorkoutCard = ({ workout }) => {

    const navigate = useNavigate();
    return (
        <div>
            <div className="bg-[#2C2C2C] p-6 rounded-xl shadow-md shadow-[#00000033] hover:shadow-lg hover:shadow-[#00000066] transition duration-300">
                <h2 className="text-[#FFFFFF] text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{workout.name}</h2>
                <img
                    src={`https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/${workout.images[0]}`}
                    alt={workout.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-4n0 object-cover rounded-lg mb-4"
                />
                <p className="text-[12px] sm:text-[14px] md:text-[18px] text-[#9E9E9E] text-sm mb-1 sm:mb-2">Duration: 10 to 20 mins</p>
                <p className="text-[12px] sm:text-[14px] md:text-[18px] text-[#FFFFFF] mb-1 sm:mb-2">Difficulty: <span className="text-[#AA5CED]">{workout.level || "Beginner"}</span> </p>
                <p className="text-[12px] sm:text-[14px] md:text-[18px] text-[#9E9E9E] mb-1 sm:mb-2">Equipment : {workout.equipment || "No data Found"}</p>
                <p className="text-[12px] sm:text-[14px] md:text-[18px] text-[#9E9E9E] mb-1 sm:mb-2">Force : {workout.force || "No data Found"} </p>
                <p className="text-[12px] sm:text-[14px] md:text-[18px] text-[#9E9E9E] mb-2 sm:mb-4">Mechanic : {workout.mechanic || "No data Found"}</p>
                <button onClick={() => navigate(`/workouts/${workout.id}`)}
                    className="text-[12px] sm:text-[14px] md:text-[18px] bg-[#AA5CED] text-[#FFFFFF] px-2 sm:px-4 py-2 rounded-sm sm:rounded-lg hover:bg-[#FF5722] transition duration-300"
                >View Details
                </button>
            </div>
        </div>
    )
}

export default WorkoutCard