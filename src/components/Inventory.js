import React from "react";
import { useState } from "react";

const Inventory = () => {
  const [values1, setValues1] = useState("");
  const [values2, setValues2] = useState("");
  const [values3, setValues3] = useState("");
  const handleSubmit = (e) => {
e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}> 
      <div>
        <h2> Inventory </h2>
      </div>
      <div>
        <p>
          To improve accuracy, answer each question quickly with your first 'gut
          instinct'. You will not be able to go back and change answers after
          clicking next.
        </p>
        <select
          name="q1"
          onChange={(e) => setValues1(e.target.value)}
          value={values1}>
          <Options />
        </select>
      </div>
      <div>
        <p>
          I learn the most when the lesson engages my sense of <em>sight</em>.
        </p>
        <select
          name="q2"
          onChange={(e) => setValues2(e.target.value)}
          value={values2}>
          <Options />
        </select>
      </div>
      <div>
        <p>
          I learn the most when the lesson engages my sense of <em>hearing</em>.
        </p>
        <select
          name="q3"
          onChange={(e) => setValues3(e.target.value)}
          value={values3}>
          <Options />
        </select>
      </div>
     <div className='form-buttons' > <button disabled={
        !values1 || !values2 || !values3
     }>Submit</button></div>
    </form>
  );
};
const Options = () => {
  return [
    <option key="prompt" value="" disabled>
      Select one...
    </option>,
    <option key="1" value={1}>
      Strongly Disagree
    </option>,
    <option key="2" value={2}>
      Disagree
    </option>,
    <option key="3" value={3}>
      {" "}
      Neutral{" "}
    </option>,
    <option key="4" value={4}>
      {" "}
      Agree{" "}
    </option>,
    <option key="5" value={5}>
      {" "}
      Strongly Agree{" "}
    </option>,
  ];
};
export default Inventory;

// {
//     "code": "section1",
//     "type": "section",
//     "instructions": "To improve accuracy, answer each question quickly with your first 'gut instinct'. You will not be able to go back and change answers after clicking next."
//   },
//   {
//     "code":"q1",
//     "type": "likert",
//     "stem": "I learn the most when the lesson engages my sense of <em>sight</em>.",
//     "scale": "Agreement"
//   },
//   {
//     "code":"q2",
//     "type": "likert",
//     "stem": "I learn the most when the lesson engages my sense of <em>hearing</em>.",
//     "scale": "Agreement"
//   },
