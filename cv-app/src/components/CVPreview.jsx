export default function CVPreview({ generalInfoData }) {
  return (
    <>
      <h2 className="cvPreview">CV-Preview</h2>
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
    </>
  );
}
