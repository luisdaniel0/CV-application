export default function Button({ handleAllEdit }) {
  return (
    <>
      <div className="buttonContainer">
        <button type="submit" className="submitBtn">
          Add
        </button>
        <button type="button" className="editBtn" onClick={handleAllEdit}>
          Edit
        </button>
      </div>
    </>
  );
}
