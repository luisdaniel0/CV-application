import { useState } from "react";
import Button from "./Button";
import CVPreview from "./CVPreview";

export default function GeneralInformation() {
  const [generalInfoData, setGeneralInfoData] = useState({
    fullName: "",
    email: "",
    location: "",
    portfolio: "",
    photo: "",
  });
  const [isEditing, setIsEditing] = useState(true);

  function handleInput(e) {
    const { name, value } = e.target;

    setGeneralInfoData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  return (
    <>
      <h2>General Information</h2>
      <form onSubmit={handleSubmit}>
        {isEditing ? (
          <>
            <label>
              Name:
              <input
                name="fullName"
                placeholder="John Smith"
                type="text"
                onChange={handleInput}
                value={generalInfoData.fullName}
              />
            </label>
            <label>
              Email:
              <input
                name="email"
                placeholder="example@email.com"
                type="email"
                onChange={handleInput}
                value={generalInfoData.email}
              />
            </label>
            <label>
              Location:
              <input
                name="location"
                placeholder="1 NW Miami"
                type="text"
                onChange={handleInput}
                value={generalInfoData.location}
              />
            </label>
            <label>
              Portfolio:
              <input
                name="portfolio"
                placeholder="example.com"
                type="text"
                onChange={handleInput}
                value={generalInfoData.portfolio}
              />
            </label>
            <label>
              Attach Photo
              <input
                name="photo"
                placeholder="your-photo.jpg"
                type="file"
                onChange={handleInput}
              />
            </label>
          </>
        ) : (
          <>
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
        )}
        <Button isEditing={isEditing} handleEdit={handleEdit} />
      </form>
    </>
  );
}
