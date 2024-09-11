import Hero from './components/Hero'
import Generator from './components/Generator'
import Workout from './components/Workout'
import { useState } from 'react'
import { generateWorkout } from './utils/functions';

function App() {
  const [workout, setWorkout] = useState(null);
  const [choice, setChoice] = useState('individual');
  const [muscles, setMuscles] = useState([]);
  const [goal, setGoal] = useState('strength_power');

  function updateWorkout() {
    console.log("Muscles selected: ", muscles);
    console.log("Choice: ", choice);
    console.log("Goal: ", goal);

    if (muscles.length < 1) {
      console.log("No muscles selected, returning.");
      return;
    }

    let newWorkout = generateWorkout({ choice, muscles, goal });
    console.log("Generated Workout: ", newWorkout);
    setWorkout(newWorkout);
    window.location.href='#workout'
  }

  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r 
    from-slate-700 to-slate-950 text-white text-sm sm:text-base'>
      <Hero />
      <Generator 
        choice={choice} setChoice={setChoice}
        muscles={muscles} setMuscles={setMuscles}
        goal={goal} setGoal={setGoal}
        updateWorkout={updateWorkout}
      />
     
      {workout && (<Workout workout={workout} />)}
    </main>
  );
}

export default App;
