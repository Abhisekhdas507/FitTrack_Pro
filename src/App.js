import { Route , Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Workouts from './pages/Workouts';
import WorkoutDetails from './pages/WorkoutDetails';
import Progress from './pages/Progress';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
   <div>
    <Navbar />

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/workouts' element={<Workouts/>} />
      <Route path='/workouts/:id' element={<WorkoutDetails/>} />
      <Route path='/progress' element={<Progress/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<SignUp/>} />
    </Routes>

    <Footer/>

   </div>
      
  );
}

export default App;
