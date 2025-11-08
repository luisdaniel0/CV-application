export default function GeneralInformation({
  userData,
  isEditing,
  handleInput,
  handleSubmit,
  handleEdit,
}) {
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
                value={userData.fullName}
              />
            </label>
            <label>
              Email:
              <input
                name="email"
                placeholder="example@email.com"
                type="email"
                onChange={handleInput}
                value={userData.email}
              />
            </label>
            <label>
              Location:
              <input
                name="location"
                placeholder="1 NW Miami"
                type="text"
                onChange={handleInput}
                value={userData.location}
              />
            </label>
            <label>
              Portfolio:
              <input
                name="portfolio"
                placeholder="example.com"
                type="text"
                onChange={handleInput}
                value={userData.portfolio}
              />
            </label>
            <label>
              LinkedIn:
              <input
                name="linkedin"
                placeholder="example.com"
                type="text"
                onChange={handleInput}
                value={userData.linkedin}
              />
            </label>
            <label>
              Github:
              <input
                name="github"
                placeholder="example.com"
                type="text"
                onChange={handleInput}
                value={userData.github}
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
            <button type="submit">Add</button>
          </>
        ) : (
          <>
            <button type="button" onClick={handleEdit}>
              Edit
            </button>
          </>
        )}
      </form>
    </>
  );
}
