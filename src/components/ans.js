
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
const Sawal = (data) => {
  var questioncount = 0;
  return (
    <>
      <div className="wraper">
        {data.info.length > 0 ? (
          <div className="inner">
            <h2>{data.info[questioncount].question} </h2>
            <Display option={data.info[questioncount].correct_answer} />
            <Display option={data.info[questioncount].incorrect_answers[0]} />
            <Display option={data.info[questioncount].incorrect_answers[1]} />
            <Display option={data.info[questioncount].incorrect_answers[2]} />
            <button type="submit">Submit</button>
            <div className="showarea" id="showscore" />
          </div>
        ) : (
          <h2 className="text-2xl text-grey font-bold">Loading...</h2>
        )}
      </div>
    </>
  );
};
export default Sawal;