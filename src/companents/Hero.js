import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { CgDarkMode } from "react-icons/cg";
import uniqid from "uniqid";

const Hero = ({ dark, setDark }) => {
  const [tasks, setTasks] = useState([]);
  const [result, setResult] = useState("");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    const newTask = {
      id: uniqid(),
      title: result,
    };
    setTasks([...tasks, newTask]);
    setResult(balance);
  };

  const balance = useSelector((state) => {
    return state.money;
  });
  return (
    <div className="delete">
      <div style={{display:'flex' , alignItems:'center' , marginLeft:"30px"}}>
      <input
        onChange={(e) => setResult(e.target.value)}
        value={result}
        type="namber"
      />
      <button onClick={() => addTask()}>Save</button>
      <a href="">
          <button
            style={{
              width: "50px",
              height: "50px",
              marginLeft: "30px",
              borderRadius: "10px",
              fontSize: "35px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => localStorage.removeItem("tasks")}
          >
            <AiFillDelete />
          </button>{" "}
        </a>
      </div>
      <div style={{display:"flex" , alignItems:"center"}}>
      <div
        style={{
          display: "flex",
          left: "221px",
          top: "-9px",
        }}
      >
       
        <button
          onClick={() => setDark(!dark)}
          style={{
            width: "50px",
            height: "50px",
            marginLeft: "30px",
            borderRadius: "10px",
            fontSize: "35px",
            marginRight: "15px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CgDarkMode />
        </button>
      </div>

      <ul className="ul" style={{
        position:'absolute',
        left: "8px",
        top:"80px",
        background:'none',
        width: "250px",
        borderRadius:'10px',
        // border: '1px solid #FFF',
        

  //       background: 'rgb(61,128,201)',
  // background: 'linear-gradient(180deg, rgba(61,128,201,1) 13%, rgba(110,25,194,1) 43%, rgba(179,1,172,0.9640231092436975) 79%)'

      }} >
        {tasks.map((el) => (
          <p
            style={{
              background:"none",
              fontSize: "20px",
              color:  "#fff",
              fontFamily: "sans-serif",
              fontWeight: "400"
            }}
          >
            {el.title}
          </p>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default Hero;
