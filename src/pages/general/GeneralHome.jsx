import { useState } from "react";
import Navbar from "../../components/Navbar";
import { Route, Routes } from "react-router-dom";
import NoPage from "../NoPage";
import Home from "../Home";
import Services from "../Services";
import AboutUs from "../AboutUs";
import ContactUs from "../ContactUs";
import GoLogin from "../GoLogin";
import Footer from "../../components/Footer";

function GeneralHome(props) {
  const [currentTab, setCurrentTab] = useState("home");

  try {
    return (
      <>
        <Navbar tabs={[]} setCurrentTab={setCurrentTab} currentTab={currentTab} toast={props.toast} navigate={props.navigate} />

        <Routes>
          <Route path="/" exact element={<Home toast={props.toast} setCurrentTab={setCurrentTab} />} />
          <Route path="/home" exact element={<Home toast={props.toast} setCurrentTab={setCurrentTab} />} />
          <Route path="/services" exact element={<Services toast={props.toast} setCurrentTab={setCurrentTab} />} />
          <Route path="/aboutUs" exact element={<AboutUs toast={props.toast} setCurrentTab={setCurrentTab} />} />
          <Route path="/contactUs" exact element={<ContactUs toast={props.toast} setCurrentTab={setCurrentTab} />} />
          <Route path="/profile" exact element={<GoLogin />} />
          <Route path="/medicines" exact element={<GoLogin />} />
          <Route path="/diseases" exact element={<GoLogin />} />
          <Route path="/diagnosis" exact element={<GoLogin />} />
          <Route path="/doctors" exact element={<GoLogin />} />
          <Route path="/*" exact element={<NoPage />} />
        </Routes>

        <Footer />
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default GeneralHome;
