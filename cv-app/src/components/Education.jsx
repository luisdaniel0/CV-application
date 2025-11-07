export default function Education({
  userData,
  isEditing,

  handleInput,
  handleSubmit,
}) {
  return (
    <>
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
              value={userData.school}
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
            />
          </label>
        </form>
      ) : (
        <>
          <p>
            <strong>Names:</strong> {userData.school}
          </p>
          <p>
            <strong>Email:</strong> {userData.degree}
          </p>
          <p>
            <strong>Location:</strong> {userData.major}
          </p>
          <p>
            <strong>Portfolio:</strong> {userData.dateOfStudy}
          </p>
        </>
      )}
    </>
  );
}
