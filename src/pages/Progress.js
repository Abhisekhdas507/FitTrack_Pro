import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetProgress } from '../redux/slices/progressSlice';
import Diet from '../assets/Progress/diet.jpg'
import routine from '../assets/Progress/routine.png'
import exercise from '../assets/Progress/exercise.jpg'
import fitness from '../assets/Progress/fitness.jpg'
import { toast } from 'react-toastify';

const Progress = () => {

  const user = useSelector((state) => state.user.user);
  // const storedUsers = useSelector((state) => state.progress.users);

  const storedUsers = JSON.parse(localStorage.getItem("fittrack_users")) || [];
  const currentUser = storedUsers.find((u) => u.email === user.email);

  const dispatch = useDispatch();

  const [suggestions, setSuggestions] = useState({ diet: '', exercise: '', routine: '', fitness: ''});

  const generateSuggestions = () => {
    if (!currentUser.age || !currentUser.weight || !currentUser.dietaryPreference || !currentUser.activityLevel || !currentUser.fitnessGoal) {
      // alert("Please fill out your profile first to get suggestions.");
      toast.info("Please fill out your profile firt to get suggestions.");
      return;
    }

    const ageGroup = currentUser.age <= 17 ? '12-17' :
      currentUser.age <= 30 ? '18-30' :
        currentUser.age <= 45 ? '31-45' :
          currentUser.age <= 60 ? '46-60' : '60+';

    const activityLevel = currentUser.activityLevel;
    const dietaryPreference = currentUser.dietaryPreference;
    const fitnessGoal = currentUser.fitnessGoal;

    console.log(fitnessGoal);
    console.log(dietaryPreference);

    const routineSuggestions = {
      '12-17': {
        'Sedentary': 'Morning: 10-min walk. Afternoon: Light stretching. Evening: 15-min walk.',
        'Lightly Active': 'Morning: 15-min jog. Afternoon: 5-min stretch. Evening: 20-min workout.',
        'Moderately Active': 'Morning: 20-min run. Afternoon: Light stretching. Evening: 30-min workout.',
        'Very Active': 'Morning: 30-min HIIT. Afternoon: 10-min stretch. Evening: 45-min workout.'
      },
      '18-30': {
        'Sedentary': 'Morning: 15-min walk or light stretching. Afternoon: 10-min meditation. Evening: 30-min walk.',
        'Lightly Active': 'Morning: 20-min jog. Afternoon: 5-min stretch. Evening: 30-min workout.',
        'Moderately Active': 'Morning: 30-min run. Afternoon: Light stretching. Evening: 45-min workout.',
        'Very Active': 'Morning: 45-min HIIT. Afternoon: 15-min stretch. Evening: 1-hour workout.'
      },
      '31-45': {
        'Sedentary': 'Morning: 20-min walk. Afternoon: 5-min stretch. Evening: 30-min walk.',
        'Lightly Active': 'Morning: 30-min walk. Afternoon: Desk exercises. Evening: 30-min strength training.',
        'Moderately Active': 'Morning: 45-min run. Afternoon: 10-min walk. Evening: 1-hour workout.',
        'Very Active': 'Morning: 1-hour circuit training. Afternoon: 15-min yoga. Evening: 1-hour sports activity.'
      },
      '46-60': {
        'Sedentary': 'Morning: 20-min walk. Afternoon: 5-min stretch. Evening: 30-min walk.',
        'Lightly Active': 'Morning: 30-min walk. Afternoon: Light stretching. Evening: 30-min workout.',
        'Moderately Active': 'Morning: 40-min walk. Afternoon: 15-min yoga. Evening: 45-min workout.',
        'Very Active': 'Morning: 1-hour cardio. Afternoon: 20-min stretch. Evening: 1-hour strength training.'
      },
      '60+': {
        'Sedentary': 'Morning: 15-min walk. Afternoon: 5-min stretch. Evening: 15-min walk.',
        'Lightly Active': 'Morning: 20-min walk. Afternoon: 10-min yoga. Evening: 20-min walk.',
        'Moderately Active': 'Morning: 30-min walk. Afternoon: 15-min stretch. Evening: 30-min walk.',
        'Very Active': 'Morning: 45-min walk. Afternoon: 20-min yoga. Evening: 45-min walk.'
      }
    };

    const dietSuggestions = {
      'Vegetarian': "Breakfast: Oatmeal with almond milk. Lunch: Lentil and vegetable curry. Dinner: Grilled tofu with quinoa.",
      'Vegan': "Breakfast: Smoothie bowl with soy milk. Lunch: Chickpea wrap. Dinner: Stuffed bell peppers.",
      'Keto': "Breakfast: Scrambled eggs with avocado. Lunch: Grilled chicken salad. Dinner: Salmon with zucchini noodles.",
      'Low Carb': "Breakfast: Omelette with spinach. Lunch: Turkey stir fry. Dinner: Zucchini noodles with meatballs.",
      'Non Vegetarians': "Breakfast: Eggs and turkey sausage. Lunch: Grilled chicken breast with brown rice. Dinner: Baked fish with steamed vegetables."
    };

    const exerciseSuggestions = {
      'Sedentary': "15-min walk in the morning. 10-min bodyweight exercises in the evening.",
      'Lightly Active': "30-min walk in the morning. 20-min low-impact cardio in the evening.",
      'Moderately Active': "45-min HIIT in the morning. 20-min evening walk.",
      'Very Active': "1-hour cardio in the morning. 30-min yoga in the evening."
    };

    const fitnessGoalSuggestions = {
  '12-17': {
    'Lose Weight': 'Encourage active play, team sports, and outdoor games. Focus on healthy snacks and portion control.',
    'Gain Muscle': 'Introduce bodyweight exercises and light resistance training under supervision. Ensure a protein-rich, balanced diet.',
    'Improve Endurance': 'Engage in sports, swimming, and running. Increase activity duration gradually.',
    'Increase Flexibility': 'Include basic yoga and stretching exercises. Focus on posture and form.',
    'Maintain Weight': 'Promote regular physical activity and healthy eating habits. Limit screen time and sugary foods.'
  },
  '18-30': {
    'Lose Weight': 'Incorporate high-intensity workouts like HIIT, cycling, and running. Maintain a calorie deficit with nutrient-dense foods.',
    'Gain Muscle': 'Focus on heavy compound lifts, progressive overload, and protein-rich meals. Include adequate recovery days.',
    'Improve Endurance': 'Include steady-state cardio and interval training. Gradually increase workout duration.',
    'Increase Flexibility': 'Practice yoga, dynamic stretches, and mobility drills regularly. Focus on hip and shoulder flexibility.',
    'Maintain Weight': 'Balance strength training and cardio. Monitor caloric intake to stay within maintenance levels.'
  },
  '31-45': {
    'Lose Weight': 'Combine low-impact cardio with strength training. Opt for nutrient-dense, low-calorie meals.',
    'Gain Muscle': 'Incorporate split training routines and compound lifts. Focus on form and recovery.',
    'Improve Endurance': 'Mix running, cycling, and rowing with strength training. Prioritize hydration and rest.',
    'Increase Flexibility': 'Incorporate pilates, yoga, and static stretching post-workout. Target tight areas.',
    'Maintain Weight': 'Maintain a balanced routine with moderate-intensity workouts and a clean, nutrient-rich diet.'
  },
  '46-60': {
    'Lose Weight': 'Engage in brisk walking, swimming, and light resistance training. Keep meals light and nutrient-dense.',
    'Gain Muscle': 'Include bodyweight exercises, resistance bands, and low-impact strength training.',
    'Improve Endurance': 'Prioritize low-impact cardio like cycling or elliptical workouts.',
    'Increase Flexibility': 'Incorporate daily stretching routines and joint mobility exercises.',
    'Maintain Weight': 'Focus on maintaining muscle mass through strength training and light cardio.'
  },
  '60+': {
    'Lose Weight': 'Prioritize walking, water aerobics, and low-impact activities. Focus on portion control.',
    'Gain Muscle': 'Use light resistance bands and bodyweight exercises to preserve muscle tone.',
    'Improve Endurance': 'Engage in low-impact aerobic activities like swimming or walking.',
    'Increase Flexibility': 'Perform seated stretches and gentle yoga to maintain joint mobility.',
    'Maintain Weight': 'Balance diet and gentle exercise. Include strength and flexibility workouts to support health.'
  }
};


    setSuggestions({
      diet: dietSuggestions[dietaryPreference] || 'No diet suggestions available.',
      exercise: exerciseSuggestions[activityLevel] || 'No exercise suggestions available.',
      routine: routineSuggestions[ageGroup][activityLevel] || 'No routine suggestions available.',
      fitness: fitnessGoalSuggestions[ageGroup][fitnessGoal] || 'No fitnessgoal suggestions available.'
    });

    
  };

 
  return (
    <div className="bg-[#121212] min-h-screen p-6">
      <div className="bg-[#2C2C2C] p-4 sm:p-8 rounded-lg shadow-lg max-w-[800px] mx-auto text-[#FFFFFF]">
        <h2 className="text-[20px] md:text-[30px] xl:text-[36px] font-semibold mb-3 sm:mb-6 text-[#AA5CED] font-[Roboto]">Workout Progress</h2>

        <div className="mb-2 sm:mb-4 text-[12px] sm:text-[14px] md:text-[18px] text-gray-400 font-[Poppins]">
          <p>Name: {currentUser?.firstName} {currentUser?.lastName}</p>
          <p>Age: {currentUser?.age}</p>
          <p>Weight: {currentUser?.weight}</p>
          <p>Dietary Preference: {currentUser?.dietaryPreference}</p>
          <p>Activity Level: {currentUser?.activityLevel}</p>
          <p>Fitness Goal: {currentUser?.fitnessGoal}</p>
        </div>

        <div className="mb-2 sm:mb-4 text-[12px] sm:text-[14px] md:text-[18px] text-gray-400 font-[Poppins]">
          {currentUser.workout && currentUser.workout.length > 0 ? (
            currentUser.workout.map((log, index) => (
              <div key={index} className="mb-2">
                <p>Start Date of Exercise</p>
                <p>Date: {new Date(log.date).toLocaleDateString()}</p>
                <p>Exercise: {log.name}</p>
              </div>
            ))
          ) : (
            <p>No progress data available.</p>
          )}
        </div>

        <div className='flex justify-between'>
          <button onClick={generateSuggestions} className='text-[12px] sm:text-[14px] md:text-[18px] bg-[#AA5CED] px-2 sm:px-4 py- rounded-sm sm:rounded-lg text-[#FFFFFF] hover:bg-[#FF5722]'>Get Suggestions</button>
          <button className="text-[12px] sm:text-[14px] md:text-[18px] bg-[#FF5722] px-2 sm:px-4  py-2 rounded-sm sm:rounded-lg text-[#FFFFFF] hover:bg-[#AA5CED]" onClick={() => dispatch(resetProgress())}>Reset Progress</button>
        </div>



        <div className="mt-3 sm:mt-6">
          <h3 className="text-[16px] md:text-[25px] xl:text-[30px]  font-semibold mb-2 text-gray-200 font-[Roboto]">Suggestions:</h3>

          <div className="mt-6 flex flex-wrap justify-center gap-4 text-gray-200 font-[Roboto]">
            <div className="bg-[#1E1E1E] p-4 rounded-lg shadow-lg min-h-[100px] w-[300px]">
              <img src={Diet} alt="Diet" loading="lazy" decoding="async" className="w-full h-48 object-cover rounded-lg mb-2" />
              <h4 className="text-[16px] md:text-[25px] xl:text-[30px]  font-semibold mb-2">Diet Plan:</h4>
              <p className='text-[12px] sm:text-[14px] md:text-[18px]'>{suggestions.diet}</p>
            </div>

            <div className="bg-[#1E1E1E] p-4 rounded-lg shadow-lg min-h-[100px] w-[300px]">
              <img src={exercise} alt="Exercise" loading="lazy" decoding="async" className="w-full h-48 object-cover rounded-lg mb-2" />
              <h4 className="text-[16px] md:text-[25px] xl:text-[30px]  font-semibold mb-2">Exercise Plan:</h4>
              <p className='text-[12px] sm:text-[14px] md:text-[18px]'>{suggestions.exercise}</p>
            </div>

            <div className="bg-[#1E1E1E] p-4 rounded-lg shadow-lg min-h-[100px] w-[300px]">
              <img src={routine} alt="Routine" loading="lazy" decoding="async" className="w-full h-48 object-cover rounded-lg mb-2" />
              <h4 className="text-[16px] md:text-[25px] xl:text-[30px]  font-semibold mb-2">Routine:</h4>
              <p className='text-[12px] sm:text-[14px] md:text-[18px]'>{suggestions.routine}</p>
            </div>

            <div className="bg-[#1E1E1E] p-4 rounded-lg shadow-lg min-h-[100px] w-[300px]">
              <img src={fitness} alt="Routine" loading="lazy" decoding="async" className="w-full h-48 object-cover rounded-lg mb-2" />
              <h4 className="text-[16px] md:text-[25px] xl:text-[30px]  font-semibold mb-2">Fitness Goal:</h4>
              <p className='text-[12px] sm:text-[14px] md:text-[18px]'>{suggestions.fitness}</p>
            </div>


          </div>


        </div>
      </div>
    </div>
  );
};

export default Progress;
