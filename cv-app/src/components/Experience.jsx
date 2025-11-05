import { useState } from "react";
import Button from "./Button";

export default function Experience() {
  const [experienceData, setExperienceData] = useState({
    jobTitle: "",
    companyName: "",
    city: "",
    employmentDates: "",
    jobDescription: "",
  });
  const [isEditing, setIsEditing] = useState(true);

  const handleInput = (e) => {
    console.log(e);
    const { value, name } = e.target;
    console.log(value, name);

    setExperienceData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="experienceContainer">
      <h2 className="experienceHeader">Experience</h2>
      <form onSubmit={handleSubmit} className="experienceForm">
        {isEditing ? (
          <>
            <label>
              Job Title:
              <input
                type="text"
                name="jobTitle"
                placeholder="Software Engineer"
                onChange={handleInput}
              />
            </label>
            <label>
              Company Name:
              <input
                type="text"
                name="companyName"
                placeholder="Google"
                onChange={handleInput}
              />
            </label>
            <label>
              City:
              <input
                type="text"
                name="city"
                placeholder="New York City"
                onChange={handleInput}
              />
            </label>
            <label>
              Dates of Employment:
              <input
                type="text"
                name="employmentDates"
                placeholder="Jan 2020-June 2025"
                onChange={handleInput}
              />
            </label>
            <label>
              Job Description:
              <input
                type="text"
                name="jobDescription"
                placeholder="Developed main website features.."
                onChange={handleInput}
              />
            </label>
          </>
        ) : (
          <>
            <p>
              <strong>Job Title:</strong> {experienceData.jobTitle}
            </p>
            <p>
              <strong>Company:</strong> {experienceData.companyName}
            </p>
            <p>
              <strong>City:</strong> {experienceData.city}
            </p>
            <p>
              <strong>Dates of Employment</strong>{" "}
              {experienceData.employmentDates}
            </p>
          </>
        )}
        <Button handleEdit={handleEdit} />
      </form>
    </div>
  );
}
