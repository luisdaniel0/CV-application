import GeneralInformation from "./components/GeneralInformation";
import Button from "./components/Button";
import "./App.css";
import Education from "./components/Education";
import Experience from "./components/Experience";
import { useState } from "react";
import CVPreview from "./components/CVPreview";

function App() {
  const [userData, setuserData] = useState({
    fullName: "",
    email: "",
    location: "",
    portfolio: "",
    photo: "",
    github: "",
    linkedin: "",
    school: "",
    degree: "",
    major: "",
    dateOfStudy: "",
    jobTitle: "",
    companyName: "",
    city: "",
    employmentDates: "",
    jobDescription: "",
  });
  const [editGeneral, setEditGeneral] = useState(false);
  const [editEducation, setEditEducation] = useState(false);
  const [editExperience, setEditExperience] = useState(false);
  const [file, setFile] = useState(null);

  function handleInput(e) {
    const { name, value, type } = e.target;

    setuserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (type === "file" && e.target.files[0]) {
      setFile(URL.createObjectURL(e.target.files[0]));
    }
  }

  function handleAllEdit() {
    setEditGeneral(false);
    setEditEducation(false);
    setEditExperience(false);
  }

  function handleAllSubmit(e) {
    e.preventDefault();
    setEditGeneral(true);
    setEditEducation(true);
    setEditExperience(true);
  }

  return (
    <>
      <div className="main">
        <div className="mainSections left">
          <form onSubmit={handleAllSubmit} className="formContainer">
            <GeneralInformation
              userData={userData}
              editGeneral={editGeneral}
              file={file}
              handleAllEdit={handleAllEdit}
              handleInput={handleInput}
              handleAllSubmit={handleAllSubmit}
            />
            <Education
              userData={userData}
              handleAllEdit={handleAllEdit}
              handleInput={handleInput}
              editEducation={editEducation}
              handleAllSubmit={handleAllSubmit}
            />
            <Experience
              userData={userData}
              handleAllEdit={handleAllEdit}
              handleInput={handleInput}
              editExperience={editExperience}
              handleAllSubmit={handleAllSubmit}
            />
            <Button handleAllEdit={handleAllEdit} />
          </form>
        </div>

        <div className="mainSections right">
          <CVPreview
            userData={userData}
            file={file}
            editGeneral={editGeneral}
            editEducation={editEducation}
            editExperience={editExperience}
          />
        </div>
      </div>
    </>
  );
}

export default App;
