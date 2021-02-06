import React from "react";
import {useState,useEffect} from 'react';
import Sawal from "./ans";
const Quiz = () => {
 const API_URL= "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple";
 const [question, setquestion] = useState([]);
 useEffect(() => {
     fetch(API_URL)
     .then((res)=> res.json())
     .then((data) =>{
         console.log(data);
         setquestion(data.results);
     })
 }, [])

  return (
    <>
    <Sawal info={question}/>
    </>
  );
};
export default Quiz;