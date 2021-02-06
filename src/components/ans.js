
import React from "react";

const Display = (answer) => {
  return (
    <>
      <input type="radio" name="answer" className="options"  />
      <label name="answer">{answer.option}</label>
      <br />
    </>
  );
};
const Sawal = ({data : {
    question,correct_answer,incorrect_answers
}}) => {
  return (
    <>
      <div className="wraper">
          <div className="inner">
            <h2>{question} </h2>
            <Display onClick = {()=> handleanswer(true)} option={correct_answer} />
            <Display onClick = {()=> handleanswer(false)} option={incorrect_answers[0]} />
            <Display onClick = {()=> handleanswer(false)} option={incorrect_answers[1]} />
            <Display onClick = {()=> handleanswer(false)} option={incorrect_answers[2]} />
            {/* <button type="submit">Submit</button> */}
          </div>
        
      </div>
    </>
  );
};
export default Sawal;