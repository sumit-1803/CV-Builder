// A section to add practical experience (company name, position title, main responsibilities of your jobs, date from and until when you worked for that company)

import { useState } from "react";

export function Experience(){
  const [editing, setEditing] = useState(false); // Track if the input is being edited
  const [companyName,setcompanyName] = useState("Company-Name");
  const [position,setposition] = useState("Position-At-Company");
  const [responsibilities,setresponsibilities] = useState("Responsibilities-At-Company");

  const handlecompanyClick = () => {
    setEditing(true); // Set editing to true when the input is clicked
  };
  const handlepositionClick = () => {
    setEditing(true); // Set editing to true when the input is clicked
  };
  const handleresponsibilitiesClick = () => {
    setEditing(true); // Set editing to true when the input is clicked
  };

  const handleEducationBlur = () => {
    setEditing(false); // Set editing to false when the input loses focus
  };

  const handlecompanyChange = (event) => {
    setcompanyName(event.target.value); // Update the education text in real-time as the user types
  };
  const handlepositionChange = (event) => {
    setposition(event.target.value); // Update the education text in real-time as the user types
  };
  const handleresponsibilitiesChange = (event) => {
    setresponsibilities(event.target.value); // Update the education text in real-time as the user types
  };

  return (
    <>
    <h2>Experience : </h2>
      <div className="educontainer">
        {/* <=========Company name===========> */}
        {editing ? (
          <input
            type="text"
            value={companyName}
            onBlur={handleEducationBlur}
            onChange={handlecompanyChange}
          />
        ) : (
          <h4 id="Edu" onClick={handlecompanyClick}>
            {companyName}
          </h4>
        )}

        {/* <=========position title===========> */}
        {editing ? (
            <input
              type="text"
              value={position}
              onBlur={handleEducationBlur}
              onChange={handlepositionChange}
            />
          ) : (
            <h4 id="Edu" onClick={handlepositionClick}>
              {position}
            </h4>
          )}

        {/* <=========responsibilities===========> */}
         {editing ? (
            <input
              type="text"
              value={responsibilities}
              onBlur={handleEducationBlur}
              onChange={handleresponsibilitiesChange}
            />
          ) : (
            <h4 id="Edu" onClick={handleresponsibilitiesClick}>
              {responsibilities}
            </h4>
          )}
      </div>
    </>
  );
}