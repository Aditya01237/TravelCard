import { useState } from 'react';
import './App.css';
import Tours from './components/Tours';
import data from './data'

function App() {

  const [tours, setTours] = useState(data);

  function removeTour(id){
    const newTour = tours.filter(tour => tour.id !== id);
    setTours(newTour);
  }

  if(tours.length === 0)
  {
    return(
      <div className="flex flex-col justify-center items-center h-[100vh]">
        <h2 className="text-black text-2xl font-bold">No Tours Left</h2>
        <button className=" bg-[#EEEEEE] border-solid mt-[18px] py-[10px] px-[80px] border-1 border-white cursor-pointer hover:bg-white hover:text-black transition-all delay-50 rounded-md" onClick={()=> setTours(data)}>Refresh</button>
      </div>
    );
  }

  return (
    <div>
      <Tours tours = {tours} removeTour = {removeTour} />
    </div>
  );
}

export default App;
