export default function Experience({
  userData,
  handleInput,

  editExperience,
}) {
  return (
    <>
      <h2 className="experienceHeader">Experience</h2>

      <label>
        Job Title:
        <input
          type="text"
          name="jobTitle"
          placeholder="Software Engineer"
          onChange={handleInput}
          disabled={editExperience}
          value={userData.jobTitle}
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
          value={userData.companyName}
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
          value={userData.city}
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
          value={userData.employmentDates}
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
          value={userData.jobDescription}
        />
      </label>
    </>
  );
}
