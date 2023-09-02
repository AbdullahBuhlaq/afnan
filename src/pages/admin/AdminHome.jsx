import { useState } from "react";
import adminNavbar from "../../constants/adminNavbar";
import Navbar from "../../components/Navbar";
import { Route, Routes } from "react-router-dom";
import NoPage from "../NoPage";
import Medicines from "./Medicines";
import Diseases from "./Diseases";
import Home from "../Home";
import Services from "../Services";
import AboutUs from "../AboutUs";
import ContactUs from "../ContactUs";
import Footer from "../../components/Footer";

function AdminHome(props) {
  const [currentTab, setCurrentTab] = useState("medicines");
  const [medicines, setMedicines] = useState({});
  const [medicinesGet, setMedicinesGet] = useState(false);
  const [diseases, setDiseases] = useState({});
  const [diseasesGet, setDiseasesGet] = useState(false);

  return (
    <>
      <Navbar tabs={adminNavbar} setCurrentTab={setCurrentTab} currentTab={currentTab} toast={props.toast} userInformation={props.userInformation} navigate={props.navigate} />

      <Routes>
        <Route path="/" exact element={<Home setCurrentTab={setCurrentTab} toast={props.toast} />} />
        <Route path="/home" exact element={<Home setCurrentTab={setCurrentTab} toast={props.toast} />} />
        <Route path="/services" exact element={<Services setCurrentTab={setCurrentTab} toast={props.toast} />} />
        <Route path="/aboutUs" exact element={<AboutUs setCurrentTab={setCurrentTab} toast={props.toast} />} />
        <Route path="/contactUs" exact element={<ContactUs setCurrentTab={setCurrentTab} toast={props.toast} />} />
        <Route path="/medicines" exact element={<Medicines userInformation={props.userInformation} setCurrentTab={setCurrentTab} toast={props.toast} medicines={medicines} setMedicines={setMedicines} setMedicinesGet={setMedicinesGet} medicinesGet={medicinesGet} />} />
        <Route path="/diseases" exact element={<Diseases userInformation={props.userInformation} setCurrentTab={setCurrentTab} toast={props.toast} diseases={diseases} setDiseases={setDiseases} setDiseasesGet={setDiseasesGet} diseasesGet={diseasesGet} />} />
        <Route path="/*" exact element={<NoPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default AdminHome;
