import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Profile = () => {

  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();


  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    weight: "",
    email: "",
    dietaryPreference: "",
    activityLevel: "",
    fitnessGoal: "",
    medicalConditions: ""
  });

  // Load user data on mount
  useEffect(() => {
    if (user) {
      const storedUsers = JSON.parse(localStorage.getItem("fittrack_users")) || [];
      console.log(storedUsers);
      const currentUser = storedUsers.find((u) => u.email === user.email);
      console.log(currentUser);

      setFormData({
        firstName: currentUser?.firstName || user.firstName,
        lastName: currentUser?.lastName || user.lastName,
        age: currentUser?.age || user.age || "",
        weight: currentUser?.weight || "",
        email: user.email,
        dietaryPreference: currentUser?.dietaryPreference || "",
        activityLevel: currentUser?.activityLevel || "",
        fitnessGoal: currentUser?.fitnessGoal || "",
        medicalConditions: currentUser?.medicalConditions || ""
      });
    }
  }, [user]);


  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = () => {
    console.log(formData);
    const users = JSON.parse(localStorage.getItem("fittrack_users")) || [];

    const updatedUsers = users.map((u) => {
      if (u.email === formData.email) {
        return {
          ...u,
          firstName: formData.firstName,
          lastName: formData.lastName,
          age: formData.age,
          weight: formData.weight,
          dietaryPreference: formData.dietaryPreference,
          activityLevel: formData.activityLevel,
          fitnessGoal: formData.fitnessGoal,
          medicalConditions: formData.medicalConditions
        };
      }
      return u;
    });

    localStorage.setItem("fittrack_users", JSON.stringify(updatedUsers));
    // alert("Profile updated successfully!");
    toast.success("Profile updated successfully!");
  };

   const handleLogout = () => {
    dispatch(logoutUser());
     navigate('/');
  }


  return (
    <div className="bg-[#121212] min-h-screen flex items-center justify-center p-6">
      <div className="bg-[#2C2C2C] p-8 rounded-lg shadow-lg max-w-lg w-full text-gray-400 font-[Poppins]">
        <h2 className="text-2xl font-semibold mb-4 sm:mb-6 text-[#AA5CED] font-[Roboto]">User Profile</h2>
        <div className="space-y-2 sm:space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-[#AA5CED]">
              First Name:
            </span>
            <input className="w-full mt-1 p-2 bg-[#1A1A1A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AA5CED]" name="firstName" value={formData.firstName} onChange={handleChange} />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-[#AA5CED]">Last Name:</span>
            <input className="w-full mt-1 p-2 bg-[#1A1A1A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AA5CED]" name="lastName" value={formData.lastName} onChange={handleChange} />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-[#AA5CED]">Age: </span>
            <input className="w-full mt-1 p-2 bg-[#1A1A1A]  rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AA5CED]" name="age" value={formData.age} onChange={handleChange} />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-[#AA5CED]">Weight: </span>
            <input className="w-full mt-1 p-2 bg-[#1A1A1A]  rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AA5CED]" name="weight" value={formData.weight} onChange={handleChange} />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-[#AA5CED]">Dietary Preferences:</span>
            <select className="w-full mt-1 p-2 bg-[#1A1A1A]  rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AA5CED]" name="dietaryPreference" value={formData.dietaryPreference} onChange={handleChange}>
              <option value="">Select...</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Vegan">Vegan</option>
              <option value="Keto">Keto</option>
              <option value="Gluten-Free">Gluten-Free</option>
              <option value="Paleo">Paleo</option>
              <option value="Low Carb">Low Carb</option>
              <option value="High Protein">High Protein</option>
              <option value="Dairy-Free">Dairy-Free</option>
              <option value="Nut-Free">Nut-Free</option>
              <option value="Non Vegetarians">Non Vegetarians</option>
            </select>
          </label>

          <label className="block">
            <span className="text-sm font-medium text-[#AA5CED]">Activity Level:</span>
            <select className="w-full mt-1 p-2 bg-[#1A1A1A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AA5CED]" name="activityLevel" value={formData.activityLevel} onChange={handleChange}>
              <option value="">Select...</option>
              <option value="Sedentary">Sedentary</option>
              <option value="Lightly Active">Lightly Active</option>
              <option value="Moderately Active">Moderately Active</option>
              <option value="Very Active">Very Active</option>
            </select>
          </label>

          {/* <label className="block">
            <span className="text-sm font-medium text-[#AA5CED]">Fitness Goal (e.g., Lose Weight, Gain Muscle):</span>
            <input className="w-full mt-1 p-2 bg-[#1A1A1A] text-[#FFFFFF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AA5CED]" name="fitnessGoal" value={formData.fitnessGoal} onChange={handleChange} />
          </label> */}

           <label className="block">
            <span className="text-sm font-medium text-[#AA5CED]">Fitness Goal:</span>
            <select className="w-full mt-1 p-2 bg-[#1A1A1A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AA5CED]" name="fitnessGoal" value={formData.fitnessGoal} onChange={handleChange}>
              <option value="">Select...</option>
              <option value="Lose Weight">Lose Weight</option>
              <option value="Gain Muscle">Gain Muscle</option>
              <option value="Improve Endurance">Improve Endurance</option>
              <option value="Increase Flexibility">Increase Flexibility</option>
              <option value="Maintain Weight">Maintain Weight</option>
            </select>
          </label>

          {/* <label className="block">
            <span className="text-sm font-medium text-[#AA5CED]"> Medical Conditions (e.g., Diabetes, Hypertension): </span>
            <input className="w-full mt-1 p-2 bg-[#1A1A1A] text-[#FFFFFF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AA5CED]" name="medicalConditions" value={formData.medicalConditions} onChange={handleChange} />
          </label> */}

            <label className="block">
            <span className="text-sm font-medium text-[#AA5CED]">Medical Conditions:</span>
            <select className="w-full mt-1 p-2 bg-[#1A1A1A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AA5CED]" name="medicalConditions" value={formData.medicalConditions} onChange={handleChange}>
              <option value="">Select...</option>
              <option value="None">None</option>
              <option value="Diabetes">Diabetes</option>
              <option value="Hypertension">Hypertension</option>
              <option value="Asthma">Asthma</option>
              <option value="Heart Disease">Heart Disease</option>
              <option value="Arthritis">Arthritis</option>
              <option value="Other">Other</option>
            </select>
          </label>

        </div>


        <p><i>AI Tip: Drink water after your workout!</i></p>

        <div className="mt-4 sm:mt-6 flex justify-between">
          <button onClick={handleSave} className="bg-[#AA5CED] px-2 sm:px-4 py-2 rounded-sm sm:rounded-lg text-[#FFFFFF] hover:bg-[#FF5722]">Save Info</button>
          <button onClick={handleLogout} className="bg-[#FF5722] px-2 sm:px-4 py-2 rounded-sm sm:rounded-lg text-[#FFFFFF] hover:bg-[#AA5CED]">Logout</button>
        </div>

      </div>
    </div>
  )
}

export default Profile