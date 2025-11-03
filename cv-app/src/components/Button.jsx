export default function Button({ handleEdit }) {
  return (
    <>
      <div className="buttonContainer">
        <button type="submit" className="submitBtn">
          Add
        </button>
        <button type="button" className="editBtn" onClick={handleEdit}>
          Edit
        </button>
      </div>
    </>
  );
}
