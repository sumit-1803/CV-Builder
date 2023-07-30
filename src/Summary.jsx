import { useState } from "react"

export function Summary() {
  const [Summary, setSummary] = useState("Summary...");
  const [editing, setEditing] = useState(false); // Track if the input is being edited
  const handleSummaryClick = () => {
    setEditing(true); // Set editing to true when the input is clicked
  };
  const handleEducationBlur = () => {
    setEditing(false); // Set editing to false when the input loses focus
  };
  const handleSummaryChange = (event) => {
    setSummary(event.target.value); // Update the education text in real-time as the user types
  };
  return (
    <>
      <h2>Summary : </h2>

      {/* <=========Company name===========> */}
      {editing ? (
        <input
          type="text"
          className="summaryInput"
          value={Summary}
          onBlur={handleEducationBlur}
          onChange={handleSummaryChange}
        />
      ) : (
        <h4 id="Edu" onClick={handleSummaryClick}>
          {Summary}
        </h4>
      )}
    </>
  );
}
