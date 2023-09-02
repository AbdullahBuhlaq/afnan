import { useState } from "react";
import Navbar from "../../components/Navbar";
import patientNavbar from "../../constants/patientNavbar";
import { Route, Routes } from "react-router-dom";
import Doctors from "./Doctors";
import NoPage from "../NoPage";
import PatientProfile from "./PatientProfilePage";
import Home from "../Home";
import Services from "../Services";
import AboutUs from "../AboutUs";
import ContactUs from "../ContactUs";
import Footer from "../../components/Footer";

function PatientHome(props) {
  const [currentTab, setCurrentTab] = useState("profile");
  const [doctors, setDoctors] = useState([]);
  const [doctorsGet, setDoctorsGet] = useState(false);
  const [profile, setProfile] = useState({});
  const [profileGet, setProfileGet] = useState(false);

  try {
    return (
      <>
        <Navbar tabs={patientNavbar} setCurrentTab={setCurrentTab} currentTab={currentTab} toast={props.toast} userInformation={props.userInformation} navigate={props.navigate} />

        <Routes>
          <Route path="/" exact element={<Home toast={props.toast} setCurrentTab={setCurrentTab} />} />
          <Route path="/home" exact element={<Home toast={props.toast} setCurrentTab={setCurrentTab} />} />
          <Route path="/services" exact element={<Services toast={props.toast} setCurrentTab={setCurrentTab} />} />
          <Route path="/aboutUs" exact element={<AboutUs toast={props.toast} setCurrentTab={setCurrentTab} />} />
          <Route path="/contactUs" exact element={<ContactUs toast={props.toast} setCurrentTab={setCurrentTab} />} />
          <Route path="/profile" exact element={<PatientProfile userInformation={props.userInformation} toast={props.toast} setCurrentTab={setCurrentTab} profile={profile} setProfile={setProfile} setProfileGet={setProfileGet} profileGet={profileGet} />} />
          <Route path="/doctors" exact element={<Doctors userInformation={props.userInformation} toast={props.toast} setCurrentTab={setCurrentTab} doctors={doctors} setDoctors={setDoctors} setDoctorsGet={setDoctorsGet} doctorsGet={doctorsGet} />} />
          <Route path="/*" exact element={<NoPage />} />
        </Routes>

        <Footer />
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default PatientHome;
