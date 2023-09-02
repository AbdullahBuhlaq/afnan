import { useState } from "react";
import doctorNavbar from "../../constants/doctorNavbar";
import Navbar from "../../components/Navbar";
import DoctorProfile from "./DoctorProfilePage";
import { Route, Routes } from "react-router-dom";
import NoPage from "../NoPage";
import Diagnosis from "./Diagnosis";
import Home from "../Home";
import Services from "../Services";
import AboutUs from "../AboutUs";
import ContactUs from "../ContactUs";
import Footer from "../../components/Footer";

function DoctorHome(props) {
  const [currentTab, setCurrentTab] = useState("profile");
  const [profile, setProfile] = useState({});
  const [profileGet, setProfileGet] = useState(false);
  const [diseases, setDiseases] = useState({});
  const [diseasesGet, setDiseasesGet] = useState(false);
  const [medicines, setMedicines] = useState({});
  const [medicinesGet, setMedicinesGet] = useState(false);

  return (
    <>
      <Navbar tabs={doctorNavbar} setCurrentTab={setCurrentTab} currentTab={currentTab} toast={props.toast} userInformation={props.userInformation} navigate={props.navigate} />

      <Routes>
        <Route path="/" exact element={<Home toast={props.toast} setCurrentTab={setCurrentTab} />} />
        <Route path="/home" exact element={<Home toast={props.toast} setCurrentTab={setCurrentTab} />} />
        <Route path="/services" exact element={<Services toast={props.toast} setCurrentTab={setCurrentTab} />} />
        <Route path="/aboutUs" exact element={<AboutUs toast={props.toast} setCurrentTab={setCurrentTab} />} />
        <Route path="/contactUs" exact element={<ContactUs toast={props.toast} setCurrentTab={setCurrentTab} />} />
        <Route path="/profile" exact element={<DoctorProfile userInformation={props.userInformation} toast={props.toast} setCurrentTab={setCurrentTab} profile={profile} setProfile={setProfile} setProfileGet={setProfileGet} profileGet={profileGet} />} />
        <Route
          path="/diagnosis"
          exact
          element={
            <Diagnosis
              userInformation={props.userInformation}
              toast={props.toast}
              setCurrentTab={setCurrentTab}
              medicines={medicines}
              setMedicines={setMedicines}
              setMedicinesGet={setMedicinesGet}
              medicinesGet={medicinesGet}
              diseases={diseases}
              setDiseases={setDiseases}
              setDiseasesGet={setDiseasesGet}
              diseasesGet={diseasesGet}
              profile={profile}
              setProfile={setProfile}
              setProfileGet={setProfileGet}
              profileGet={profileGet}
            />
          }
        />
        <Route path="/*" exact element={<NoPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default DoctorHome;
