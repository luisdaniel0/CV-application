export default function CVPreview({
  userData,
  file,
  editGeneral,
  editEducation,
  editExperience,
}) {
  return (
    <>
      <h2 className="cvPreview">Your Resume:</h2>
      {editGeneral && editEducation && editExperience ? (
        <div className="renderedResume">
          <div className="generalInfo">
            <div className="nameHeader">
              <div className="avatar">
                {file && <img src={file} alt="uploaded-photo" />}
              </div>
              <h3 className="name">
                {userData.fullName} {userData.email} {userData.location}
              </h3>
            </div>
            <div className="contactInfo">
              <p className="socials">
                {userData.portfolio} {userData.linkedin} {userData.github}
              </p>
            </div>
          </div>
          <div className="educationInfo">
            <p className="school">{userData.school}</p>
            <p className="degree">{userData.degree}</p>
            <p className="major">{userData.major}</p>
            <p className="schoolDate">{userData.dateOfStudy}</p>
          </div>
          <div className="experienceInfo">
            <p className="jobTitle">{userData.jobTitle}</p>
            <p className="companyName">{userData.companyName}</p>
            <p className="city">{userData.city}</p>
            <p className="employmentDate">{userData.employmentDates}</p>
            <p className="jobDescription">{userData.jobDescription}</p>
          </div>
        </div>
      ) : (
        <h2>Editing CV..</h2>
      )}
    </>
  );
}
