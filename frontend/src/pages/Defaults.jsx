import React, {useState, useEffect } from 'react';



const Defaults = () => {
    const dispatch = useDispatch();
    // const active = useSelector((state) => state.activeStatus.value);
    const [activePeriod, setActivePeriod] = useState('');
    
  return (

   <div className="min-h-screen mt-6 bg-gray-100">
      <div className='flex justify-center items-center h-16 gap-4 text-white text-2xl font-bold'>

        {/* <button className='bg-green-500 text-white px-6 py-3 rounded-full' onClick={setActivePeriod("Months")} >Months </button> */}
        <button className='bg-blue-300 grid  ounded-md px-8 py-4' onClick={setActivePeriod("Months")} >Years </button>
      </div>
  </div>
  )
} 

export default Defaults