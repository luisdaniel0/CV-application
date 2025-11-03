import { useState } from "react";
import Button from "./Button";
import CVPreview from "./CVPreview";

export default function Education() {
  const [educationInfoData, setEducationInfoData] = useState({
    school: "",
    degree: "",
    major: "",
    dateOfStudy: "",
  });

  const [isEditing, setIsEditing] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);
  }

  function handleInput(e) {
    const { name, value } = e.target;

    setEducationInfoData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleEdit() {
    setIsEditing(true);
  }
  return (
    <div className="educationContainer">
      <h2 className="educationformHeader">Education</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit} className="educationForm">
          <label>
            School:
            <input
              name="school"
              type="text"
              placeholder="New York University"
              onChange={handleInput}
              value={educationInfoData.school}
            />
          </label>
          <label>
            Degree:
            <input
              name="degree"
              type="text"
              placeholder="B.S.."
              onChange={handleInput}
              value={educationInfoData.degree}
            />
          </label>
          <label>
            Major studied:
            <input
              name="major"
              type="text"
              placeholder="Computer Science"
              onChange={handleInput}
              value={educationInfoData.major}
            />
          </label>
          <label>
            Dates Attended:
            <input
              name="dateOfStudy"
              type="text"
              placeholder="Sept. 2025"
              onChange={handleInput}
              value={educationInfoData.dateOfStudy}
            />
          </label>
          <Button />
        </form>
      ) : (
        <>
          <p>
            <strong>Name:</strong> {educationInfoData.school}
          </p>
          <p>
            <strong>Email:</strong> {educationInfoData.degree}
          </p>
          <p>
            <strong>Location:</strong> {educationInfoData.major}
          </p>
          <p>
            <strong>Portfolio:</strong> {educationInfoData.dateOfStudy}
          </p>
          <Button handleEdit={handleEdit} />
        </>
      )}
    </div>
  );
}
