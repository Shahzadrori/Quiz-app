
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
const Sawal = ({handleanswer,data : {
    question,correct_answer,incorrect_answers
}}) => {
  const shuffle = [correct_answer,...incorrect_answers]

  return (
    <>
      <div className="wraper">
          <div className="inner">
            <h2>{question} </h2>
            <Display onClick = {()=> handleanswer(shuffle[0])} option={shuffle[0]} />
            <Display onClick = {()=> handleanswer(shuffle[1])} option={shuffle[1]} />
            <Display onClick = {()=> handleanswer(shuffle[2])} option={shuffle[2]} />
            <Display onClick = {()=> handleanswer(shuffle[3])} option={shuffle[3]} />
            {/* <button type="submit">Submit</button> */}
          </div>
        
      </div>
    </>
  );
};
export default Sawal;