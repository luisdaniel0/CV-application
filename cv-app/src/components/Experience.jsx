import Button from "./Button";

export default function Experience({
  userData,
  isEditing,
  handleEdit,
  handleInput,
  handleSubmit,
}) {
  return (
    <>
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
              <strong>Job Title:</strong> {userData.jobTitle}
            </p>
            <p>
              <strong>Company:</strong> {userData.companyName}
            </p>
            <p>
              <strong>City:</strong> {userData.city}
            </p>
            <p>
              <strong>Dates of Employment</strong> {userData.employmentDates}
            </p>
          </>
        )}
        <Button handleEdit={handleEdit} />
      </form>
    </>
  );
}
