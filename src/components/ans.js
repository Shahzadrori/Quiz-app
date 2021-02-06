
import { Button } from "bootstrap";
import React from "react";

const Display = (answer,classname) => {
  return (
    <>
 
      {/* <label name="answer">{answer.option}</label> */}
      <br />
    </>
  );
};
const Sawal = ({handleanswer,data : {
    question,correct_answer,incorrect_answers
}}) => {
  const shuffle = [correct_answer,...incorrect_answers].sort(()=> Math.random() - 0.5);

  return (
    <>
      <div className="wraper">
          <div className="inner">
            <h2>{question} </h2>
            {shuffle.map( answer => (
              <>
              <Button className={correct_answer === answer ? 'bg-purple-300' : '' } onClick = {()=> handleanswer(answer)} option={answer} />
              <button type="radio" name="answer" className={`${correct_answer === answer ? 'bg-purple-300' : ''}bg-white p-4 text-purple-800 font-semibold rounded shadow`} onClick={ ()=> handleanswer(answer)}  > {answer} </button>
              </>
            ))}
            {/* <Display classname={correct_answer === shuffle[1] ? alert('You got it') : '' } onClick = {()=> handleanswer(shuffle[1])} option={shuffle[1]} />
            <Display classname={correct_answer === shuffle[2] ? alert('You got it') : '' } onClick = {()=> handleanswer(shuffle[2])} option={shuffle[2]} />
            <Display classname={correct_answer === shuffle[3] ? alert('You got it') : ''  } onClick = {()=> handleanswer(shuffle[3])} option={shuffle[3]} />
            <button type="submit">Submit</button> */}
          </div>
        
      </div>
    </>
  );
};
export default Sawal;