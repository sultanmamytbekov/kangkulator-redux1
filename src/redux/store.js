import { createStore } from "redux";
import { Reducer } from "./Reducer";

export const store = createStore(Reducer)










// import React from 'react';
// import { useDispatch, useSelector } from "react-redux";
// import { LuDelete } from "react-icons/lu";

// const Hero = () => {
//   const balance = useSelector((state) => {
//     return state.money;
//   });

//   const dispatch = useDispatch();

//   const handleCalculate = () => {
//     const result = eval(balance);
//     dispatch({ type: "ADD_MONY", payload: ' ' + '=' + ' ' + result });

    // Save the result to localStorage
//     localStorage.setItem('calculatorResult', result);
//   };

//   return (
//     <div>
//       {/* Your existing JSX code */}
//       {/* ... */}
      
//       <button
//         onClick={() => handleCalculate()}
//         className="block20"
//       >
//         =
//       </button>
//     </div>
//   );
// };

// export default Hero;
