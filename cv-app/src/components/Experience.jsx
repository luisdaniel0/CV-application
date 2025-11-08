import Button from "./Button";

export default function Experience({
  userData,
  isEditing,
  handleEdit,
  handleInput,
  handleSubmit,
  handleExperienceInfo,
  handleExperienceSubmit,
  editExperience,
}) {
  return (
    <>
      <h2 className="experienceHeader">Experience</h2>
      <form onSubmit={handleExperienceSubmit} className="experienceForm">
        <label>
          Job Title:
          <input
            type="text"
            name="jobTitle"
            placeholder="Software Engineer"
            onChange={handleInput}
            disabled={editExperience}
          />
        </label>
        <label>
          Company Name:
          <input
            type="text"
            name="companyName"
            placeholder="Google"
            onChange={handleInput}
            disabled={editExperience}
          />
        </label>
        <label>
          City:
          <input
            type="text"
            name="city"
            placeholder="New York City"
            onChange={handleInput}
            disabled={editExperience}
          />
        </label>
        <label>
          Dates of Employment:
          <input
            type="text"
            name="employmentDates"
            placeholder="Jan 2020-June 2025"
            onChange={handleInput}
            disabled={editExperience}
          />
        </label>
        <label>
          Job Description:
          <input
            type="text"
            name="jobDescription"
            placeholder="Developed main website features.."
            onChange={handleInput}
            disabled={editExperience}
          />
        </label>
        <button type="submit">Add</button>
        <button type="button" onClick={handleExperienceInfo}>
          Edit
        </button>
      </form>
    </>
  );
}
