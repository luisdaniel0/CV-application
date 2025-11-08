export default function Education({
  userData,
  handleEducationInfo,
  handleInput,
  handleEducationSubmit,
  editEducation,
}) {
  return (
    <>
      <h2 className="educationformHeader">Education</h2>

      <form onSubmit={handleEducationSubmit} className="educationForm">
        <label>
          School:
          <input
            name="school"
            type="text"
            placeholder="New York University"
            onChange={handleInput}
            value={userData.school}
            disabled={editEducation}
          />
        </label>
        <label>
          Degree:
          <input
            name="degree"
            type="text"
            placeholder="B.S.."
            onChange={handleInput}
            value={userData.degree}
            disabled={editEducation}
          />
        </label>
        <label>
          Major studied:
          <input
            name="major"
            type="text"
            placeholder="Computer Science"
            onChange={handleInput}
            value={userData.major}
            disabled={editEducation}
          />
        </label>
        <label>
          Dates Attended:
          <input
            name="dateOfStudy"
            type="text"
            placeholder="Sept. 2025"
            onChange={handleInput}
            value={userData.dateOfStudy}
            disabled={editEducation}
          />
        </label>
        <button type="submit">Add</button>
        <button type="button" onClick={handleEducationInfo}>
          Edit
        </button>
      </form>
    </>
  );
}
