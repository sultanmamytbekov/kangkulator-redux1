// useSelector
 //useDispatch
 import './App.css';
 import { useEffect, useState } from "react";
 import { useDispatch, useSelector } from "react-redux";
import Hero from './companents/Hero';
 
const savedTasks = JSON.parse(localStorage.getItem("mode"))
 
 function App({result})  {
  const [dark , setDark] = useState(false|| savedTasks)
  localStorage.setItem("mode", JSON.stringify(dark));
   const balance = useSelector((state) => {
     console.log(state);
      return state.money ;
   }) ;
   const dispatch = useDispatch();
    
     useEffect(() => {       
     const local = localStorage.getItem("res");       
     if (local) {      
     dispatch({  type: "ADD_MONEY",payload: local});
     }}, [dispatch]);

     useEffect(() => {
     localStorage.setItem("res", balance);
     }, [balance]);
    
 const span = [ balance , result]
  return (
     <div style={{background:dark ? 'black' : '' , height:'780px'  , transition:dark ? '1s' : '1s'}} id="App">
      <div style={{marginBottom:'40px'}}><Hero dark={dark} setDark={setDark}/></div>
       <div className="container">
         <div className="app">
           <input
           onKeyDown={(e) => {
            if (e.key === '1'){
              dispatch({ type : 'ADD_MONEY' , payload : '1'  })
            } else if (e.key === '2'){
              dispatch({ type : 'ADD_MONEY' , payload : '2'  })
            }else if (e.key === '3'){
              dispatch({ type : 'ADD_MONEY' , payload : '3'  })
            }else if (e.key === '4'){
              dispatch({ type : 'ADD_MONEY' , payload : '4'  })
            }else if (e.key === '5'){
              dispatch({ type : 'ADD_MONEY' , payload : '5'  })
            }else if (e.key === '6'){
              dispatch({ type : 'ADD_MONEY' , payload : '6'  })
            }else if (e.key === '7'){
              dispatch({ type : 'ADD_MONEY' , payload : '7'  })
            }else if (e.key === '8'){
              dispatch({ type : 'ADD_MONEY' , payload : '8'  })
            }else if (e.key === '9'){
              dispatch({ type : 'ADD_MONEY' , payload : '9'  })
            }else if (e.key === '0'){
              dispatch({ type : 'ADD_MONEY' , payload :  balance.length !== 0 ? '0' : ""  })
            }else if (e.key === '+'){
              dispatch({ type : 'ADD_MONEY' , payload :  balance.length !== 0 ? '+' : ""  })
            }else if (e.key === '-'){
              dispatch({ type : 'ADD_MONEY' , payload :  balance.length !== 0 ? '-' : ""  })
            }else if (e.key === '*'){
              dispatch({ type : 'ADD_MONEY' , payload :  balance.length !== 0 ? '*' : ""  })
            }else if (e.key === '/'){
              dispatch({ type : 'ADD_MONEY' , payload :  balance.length !== 0 ? '/' : ""  })
            }else if (e.key === '.'){
              dispatch({ type : 'ADD_MONEY' , payload :  balance.length !== 0 ? '.' : ""  })
            }else if (e.key === '%'){
              dispatch({ type : 'ADD_MONEY' , payload :  balance.length !== 0 ? '%' : ""  })
            }else if (e.key === 'Backspace'){
              // dispatch({ type : 'ADD_MONEY' , payload :  })
                localStorage.removeItem('res')
            }else if (e.key === 'Enter'){
              const result = eval(balance);
              dispatch({
              type : 'ADD_MONEY' ,payload : balance.length !== 0 ? '' +  "=" + "" + result : ""  ,
            });
            }
           }}
             style={{
            fontSize:'25px',
            fontFamily:'sans-serif',
            fontWeight:'400',
           color: "white" ,
           outline: "none",
           }} className='block-text' type="text" value={balance}/>
           {/* <div className="btns">
             <button className="btn2" onClick={() => dispatch({ type : 'GET_MONEY' , payload : 10  })} >get money</button>
             <button className="btn1" onClick={() => dispatch({ type : 'ADD_MONEY' , payload : 10 })} >add money</button> 
           </div> */}
           <div className="block-btn">
             <a href="">
                 <button onClick={() => {
                   localStorage.removeItem('res')  }}
                 className="block1">C</button>
             </a>
               <button style={{fontSize:'32px'}}  onClick={() => {
                   localStorage.removeItem('res')  
                   dispatch({ type : 'ADD_MONEY' ,payload : balance.length !== 0 ? '**2' : ""  })
                  }}
                   
                className="block2" >x²</button>
              <button
              onClick={() => dispatch({ type : 'ADD_MONEY' ,payload : balance.length !== 0 ? '%' : ""  })} 
              className="block3">%</button>
              <button 
               onClick={() => dispatch({ type : 'ADD_MONEY' ,  payload : balance.length !== 0 ? '/' : ""   })} 
              className="block4">/</button>
              <button 
             
               onClick={() => dispatch({ type : 'ADD_MONEY' , payload : '1'  })} 
               className="block7">1</button>
              <button  
               onClick={() => dispatch({ type : 'ADD_MONEY' , payload : '2'  })} 
               className="block8">2</button>
              <button 
               onClick={() => dispatch({ type : 'ADD_MONEY' , payload : '3'  })} 
               className="block9">3</button>
               <button   
               onClick={() => dispatch({ type : 'ADD_MONEY' , payload : balance.length !== 0 ? '*' : ""  })} 
               className="block6">*</button>
               <button 
               onClick={() => dispatch({ type : 'ADD_MONEY' , payload : '4'  })} 
               className="block10">4</button>
 
               <button 
               onClick={() => dispatch({ type : 'ADD_MONEY' , payload : '5'  })} 
               className="block11">5</button>
 
               <button
               onClick={() => dispatch({ type : 'ADD_MONEY' , payload : '6'  })} 
               className="block12">6</button>
             
               
                  <button
                    onClick={() => dispatch({ type : 'ADD_MONEY' ,  payload : balance.length !== 0 ? '-' : ""   })} 
                   className="block5">-</button>
                
                   <button    
                   onClick={() => dispatch({ type : 'ADD_MONEY' , payload : '7'  })} 
                   className="block13">7</button>
 
                  <button   
                   onClick={() => dispatch({ type : 'ADD_MONEY' , payload : '8'  })} 
                   className="block14">8</button>
 
                 <button 
                  onClick={() => dispatch({ type : 'ADD_MONEY' , payload : '9'  })} 
                  className="block15">9</button>
 
                 <button 
                  onClick={() => dispatch({ type : 'ADD_MONEY' ,  payload : balance.length !== 0 ? '+' : ""   })} 
                  className="block16">+</button><button 
                  onClick={() => dispatch({ type : 'ADD_MONEY' , payload :  balance.length !== 0 ? '0' : ""  })} 
                  className="block16">0</button><button 
                  onClick={() => dispatch({ type : 'ADD_MONEY' , payload :  balance.length !== 0 ? '00' : ""   })} 
                  className="block16">00</button><button 
                  onClick={() => dispatch({ type : 'ADD_MONEY' ,  payload : balance.length !== 0 ? '.' : ""   })} 
                  className="block16">.</button>
                         
                  <button  
                   onClick={() => {
                   const result = eval(balance);
                  dispatch({
                  type : 'ADD_MONEY' ,payload : balance.length !== 0 ? '' +  "=" + "" + result : ""  ,
                });
               }} 
                className="block17">=</button>
         </div>
       </div>
     </div>
   </div>
 );
};

export default App;
