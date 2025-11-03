export default function CVPreview({ generalInfoData, educationInfoData }) {
  return (
    <>
      <h2 className="cvPreview">CV-Preview</h2>
      <div className="generalInfo">
        <p>
          <strong>Name:</strong> {generalInfoData.fullName}
        </p>
        <p>
          <strong>Email:</strong> {generalInfoData.email}
        </p>
        <p>
          <strong>Location:</strong> {generalInfoData.location}
        </p>
        <p>
          <strong>Portfolio:</strong> {generalInfoData.portfolio}
        </p>
      </div>
      <div className="educationInfo">
        <p>
          <strong>School:</strong> {educationInfoData.school}
        </p>
        <p>
          <strong>Degree</strong> {educationInfoData.degree}
        </p>
        <p>
          <strong>Major</strong> {educationInfoData.major}
        </p>
        <p>
          <strong>Dates Attended:</strong> {educationInfoData.dateOfStudy}
        </p>
      </div>
    </>
  );
}
