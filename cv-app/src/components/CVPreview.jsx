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
              <div className="name">
                <b>{userData.fullName}</b>
              </div>
              <b>
                <div>{userData.email}</div>
                <div>{userData.location}</div>
              </b>
            </div>
            <div className="contactInfo">
              <p>
                <b>Portfolio: </b>
                {userData.portfolio}
              </p>
              <p>
                <b>LinkedIn: </b>
                {userData.linkedin}
              </p>
              <p>
                <b>Github: </b>
                {userData.github}
              </p>
            </div>
          </div>
          <div className="educationInfo">
            <h3>Education</h3>
            <div className="school">
              <b>University: </b>
              <br></br>
              {userData.school}
            </div>
            <div className="degree">
              <b>Degree: </b>
              <br></br>
              {userData.degree}
            </div>
            <div className="major">
              <b>Major: </b>
              <br></br>
              {userData.major}
            </div>
            <div className="schoolDate">
              <b>Dates </b>
              <br></br>
              {userData.dateOfStudy}
            </div>
          </div>
          <div className="experienceInfo">
            <h3>Experience</h3>
            <div className="jobTitle">
              <b>{userData.jobTitle}</b>
              <div className="companyName">
                <b>{userData.companyName}</b>
              </div>
            </div>
            <div className="city">
              <b>City: </b>
              {userData.city}
            </div>
            <div className="employmentDate">
              <b>Dates: </b>
              {userData.employmentDates}
            </div>
            <div className="jobDescription">
              <b>Duties:</b>
              <br></br> {userData.jobDescription}
            </div>
          </div>
        </div>
      ) : (
        <h2>Editing CV..</h2>
      )}
    </>
  );
}
