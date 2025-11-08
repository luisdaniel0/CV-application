import GeneralInformation from "./components/GeneralInformation";

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
  const [editEducation, setEditEducation] = useState(true);
  const [editExperience, setEditExperience] = useState(true);
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

  function handleSubmit(e) {
    e.preventDefault();
    setEditGeneral(true);
  }

  function handleEdit() {
    setEditGeneral(false);
  }

  return (
    <>
      <div className="main">
        <div className="mainSections left">
          <GeneralInformation
            userData={userData}
            editGeneral={editGeneral}
            file={file}
            handleSubmit={handleSubmit}
            handleEdit={handleEdit}
            handleInput={handleInput}
          />
          <Education
            userData={userData}
            handleSubmit={handleSubmit}
            handleEdit={handleEdit}
            handleInput={handleInput}
          />
          <Experience
            userData={userData}
            handleSubmit={handleSubmit}
            handleEdit={handleEdit}
            handleInput={handleInput}
          />
        </div>
        <div className="mainSections right">
          <CVPreview
            userData={userData}
            file={file}
            editGeneral={editGeneral}
          />
        </div>
      </div>
    </>
  );
}

export default App;
