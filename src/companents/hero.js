import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { CgDarkMode } from "react-icons/cg";
import uniqid from "uniqid";

const Hero = ({dark , setDark}) => {
  const [tasks, setTasks] = useState([]);
  const [result, setResult] = useState('');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks ));
  }, [tasks]);

  const addTask = () => {
    // if (result.length !== 0) {
      const newTask = {
        id: uniqid(),
        title: result
      };
      setTasks([...tasks, newTask]);
      setResult(balance);
    // }
  };

  const balance = useSelector((state) => {
    return state.money;
  });
  // const filter = tasks.filter((el) => {
  //   return el.length > 0
  // }) 

  return (
    <div  className='delete'>
      <input onChange={(e) => setResult(e.target.value)} value={result} type="text" />
      <button onClick={() => addTask()}>Save</button>
     <div style={{display:'flex' , position:"absolute" , left: '221px', top: '-9px'}}>
     <a href="">

     <button style={{width:'50px' , height:'50px' , marginLeft:'30px' , borderRadius:'10px' , fontSize:"35px" , display:'flex' , alignItems:'center' , justifyContent:"center"}} onClick={() => (
        localStorage.removeItem('tasks')
      )} ><AiFillDelete/></button> </a>
      <button onClick={() => setDark(!dark)} style={{width:'50px' , height:'50px' , marginLeft:'30px' , borderRadius:'10px' , fontSize:"35px" , display:'flex' , alignItems:'center' , justifyContent:"center"}}><CgDarkMode/></button>
     </div>

    
      <ul>
        {tasks.map(el => (
          <p style={{margin:'0 0 0 -30px' , fontSize:"20px" ,color:dark ? '#fff' : 'black'}}>{el.title}</p>
        ))}
      </ul>
    </div>
  );
};

export default Hero;
