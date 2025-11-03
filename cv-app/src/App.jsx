import GeneralInformation from "./components/GeneralInformation";

import "./App.css";
import Education from "./components/Education";
import Experience from "./components/Experience";

function App() {
  // school: "",
  // major: "",
  // degree: "",
  // dateOfStudy: "",
  // companyName: "",
  // position: "",
  // jobDesc: "",
  // startEndDate: "",

  return (
    <>
      <GeneralInformation />
      <Education />
      <Experience />
    </>
  );
}
//general information form component
// educational backround form component
// experience form component
// button components, submit/edit on every section
//preview resume component?

export default App;
