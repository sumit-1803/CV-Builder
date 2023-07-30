import { useState } from "react";
import "./App.css";
import { Experience } from "./Experience";
import { Summary } from "./summary";


function App() {
  const [schoolName, setschoolName] = useState("School-Name"); // Initial text for the editable field
  const [title, settitle] = useState("Title-Of-Study"); 
  const [date, setdate] = useState("Date-Of-Study"); 
  const [editing, setEditing] = useState(false); // Track if the input is being edited

  const handleEducationClick = () => {
    setEditing(true); // Set editing to true when the input is clicked
  };
  const handletitleClick = () => {
    setEditing(true); // Set editing to true when the input is clicked
  };
  const handledateClick = () => {
    setEditing(true); // Set editing to true when the input is clicked
  };

  const handleEducationBlur = () => {
    setEditing(false); // Set editing to false when the input loses focus
  };

  const handleEducationChange = (event) => {
    setschoolName(event.target.value); // Update the education text in real-time as the user types
  };
  const handletitleChange = (event) => {
    settitle(event.target.value); // Update the education text in real-time as the user types
  };
  const handledateChange = (event) => {
    setdate(event.target.value); // Update the education text in real-time as the user types
  };

  return (
    <>
    
        <h1>CV Builder</h1>
      <div className="container">


        {/* Section for name and email */}
        <section className="heading">
          <label htmlFor="">Name : </label>
          <input type="text" name="" id="" />

          <label htmlFor="">Email : </label>
          <input type="text" name="" id="" />

          <label htmlFor="">Phone No: </label>
          <input type="text" name="" id="" />
        </section>
        {/* Section for name and email */}
      <Summary></Summary>

        <h2>Educational Experience : </h2>
        {/* Check if editing is true to render input, otherwise render h4 */}

        <div className="educontainer">
          {/* <=========school name===========> */}
          {editing ? (
            <input
              type="text"
              value={schoolName}
              onBlur={handleEducationBlur}
              onChange={handleEducationChange}
            />
          ) : (
            <h4 id="Edu" onClick={handleEducationClick}>
              {schoolName}
            </h4>
          )}


          {/* <=========title of study ===========> */}
          {editing ? (
            <input
              type="text"
              value={title}
              onBlur={handleEducationBlur}
              onChange={handletitleChange}
            />
          ) : (
            <h4 id="Edu" onClick={handletitleClick}>
              {title}
            </h4>
          )}


          {/* <=========date of study ===========> */}
          {editing ? (
            <input
              type="text"
              value={date}
              onBlur={handleEducationBlur}
              onChange={handledateChange}
            />
          ) : (
            <h4 id="Edu" onClick={handledateClick}>
              {date}
            </h4>
          )}
        </div>
      <Experience></Experience>
      </div>


    </>
  );
}

export default App;
