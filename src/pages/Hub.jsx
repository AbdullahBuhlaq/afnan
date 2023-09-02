import { useEffect, useState } from "react";
import PatientHome from "./Patient/PatientHome";
import DoctorHome from "./Doctor/DoctorHome";
import { useNavigate } from "react-router-dom";
import AdminHome from "./admin/AdminHome";
import GeneralHome from "./general/GeneralHome";

function Hub(props) {
  const [hub, setHub] = useState("");
  const navigate = useNavigate();
  const [userInformation, setUserInformation] = useState({});
  useEffect(() => {
    try {
      const result = JSON.parse(localStorage.getItem("user"));
      if (result?.token) {
        setUserInformation({ ...result });
        if (result.userType == "patient") setHub("patient");
        else if (result.userType == "doctor") setHub("doctor");
        else setHub("admin");
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  try {
    return (
      <>{hub == "patient" ? <PatientHome userInformation={userInformation} toast={props.toast} navigate={navigate} /> : hub == "doctor" ? <DoctorHome userInformation={userInformation} toast={props.toast} navigate={navigate} /> : hub == "admin" ? <AdminHome userInformation={userInformation} toast={props.toast} navigate={navigate} /> : <GeneralHome toast={props.toast} navigate={navigate} />}</>
    );
  } catch (err) {
    console.log(err);
  }
}

export default Hub;
