import { useEffect, useState } from "react";
import requestOptions from "../../constants/requestOptions";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Joi from "joi";
import handleSave from "../../functions/handleSave";
import messages from "../../constants/messages";
import PatientInfo from "./PatientInfo";

function Diagnosis(props) {
  useEffect(() => {
    props.setCurrentTab("diagnosis");
  }, []);
  async function getSchedule(schedule) {
    let res = schedule;
    while (typeof res == "string") {
      res = JSON.parse(res);
    }
    return res;
  }
  async function getProfile() {
    try {
      const response = await fetch("http://localhost:3001/doctor/profile", { ...requestOptions, headers: { ...requestOptions.headers, authorization: props.userInformation.token }, method: "GET" });
      const data = await response.json();
      if (data.success) {
        let schedule = await getSchedule(data.data.schedule);

        props.setProfile({ ...data.data, name: data.data["user.name"], username: data.data["user.username"], gender: data.data["user.gender"], id: data.data["user.id"], schedule: schedule });
      } else {
        console.log(data.error);
        props.toast.error("Sorry, Error Happened in The Server", {
          position: props.toast.POSITION.TOP_CENTER,
        });
      }
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    try {
      if (!props.profileGet) {
        getProfile();
        props.setProfileGet(true);
      }
    } catch (err) {
      console.log(err);
    }
  }, []);
  async function getDiseases() {
    const response = await fetch("http://localhost:3001/diseaseType/all", { ...requestOptions, headers: { ...requestOptions.headers, authorization: props.userInformation.token }, method: "GET" });
    const data = await response.json();
    if (data.success) {
      let finalDiseases = {};
      await Promise.all(
        data.data.map(async (disease) => {
          finalDiseases[disease.id] = { ...disease };
        })
      );
      props.setDiseases({ ...finalDiseases });
    } else {
      console.log(data.error);
      props.toast.error("Sorry, Error Happened in The Server", {
        position: props.toast.POSITION.TOP_CENTER,
      });
    }
  }
  useEffect(() => {
    if (!props.diseasesGet) {
      getDiseases();
      props.setDiseasesGet(true);
    }
  }, []);
  async function getMedicines() {
    const response = await fetch("http://localhost:3001/medicine/all", { ...requestOptions, headers: { ...requestOptions.headers, authorization: props.userInformation.token }, method: "GET" });
    const data = await response.json();
    if (data.success) {
      let finalMedicines = {};
      await Promise.all(
        data.data.map(async (medicine) => {
          finalMedicines[medicine.id] = { ...medicine };
        })
      );
      props.setMedicines({ ...finalMedicines });
    } else {
      console.log(data.error);
      props.toast.error("Sorry, Error Happened in The Server", {
        position: props.toast.POSITION.TOP_CENTER,
      });
    }
  }
  useEffect(() => {
    if (!props.medicinesGet) {
      getMedicines();
      props.setMedicinesGet(true);
    }
  }, []);

  const [duringAdd, setDuringAdd] = useState(false);

  const [userInfo, setUserInfo] = useState({
    accessKey: "",
  });

  const [userInfoErrors, setUserInfoErrors] = useState({});
  const userInfoSchema = {
    accessKey: Joi.string().required().trim().messages(messages).label("Access Key"),
  };
  const joiUserInfo = Joi.object(userInfoSchema);

  const [patientInfo, setPatientInfo] = useState({});

  async function getUserInfo() {
    try {
      const newData = userInfo;
      const infoRequestOptions = {
        ...requestOptions,
        headers: { ...requestOptions.headers, authorization: props.userInformation.token },
        body: JSON.stringify({
          ...userInfo,
        }),
      };
      setDuringAdd(true);
      const response = await fetch("http://localhost:3001/doctor/info-patient", infoRequestOptions);
      const data = await response.json();
      if (data.success) {
        setPatientInfo({ ...data.data });
        props.toast.success("Patient Info Received", {
          position: props.toast.POSITION.TOP_CENTER,
        });
      } else {
        console.log(data.error);
        props.toast.error(data.error, {
          position: props.toast.POSITION.TOP_CENTER,
        });
      }
      setDuringAdd(false);
    } catch (err) {
      console.log(err);
    }
  }

  try {
    return (
      <>
        <div className="error-page">
          <div className="form-container" style={{ height: "175px", top: "0", left: "0", margin: "auto", marginTop: "10px", transform: "none", position: "relative" }}>
            <form style={{ height: "100px" }}>
              <div className="row">
                <Input placeholder={"Enter the patient access key"} label={"Access Key"} type={"text"} name={"accessKey"} onChange={handleSave} state={userInfo} setState={setUserInfo} errors={userInfoErrors} setErrors={setUserInfoErrors} schema={userInfoSchema} />
              </div>
            </form>
            <img src="" alt="" />
            <Button action={getUserInfo} text={"Request For Information"} disabled={duringAdd} joiObject={joiUserInfo} state={userInfo} setStateErrors={setUserInfoErrors} toast={props.toast} />
          </div>
          {Object.keys(patientInfo).length ? <PatientInfo setPatientInfo={setPatientInfo} patientInfo={patientInfo} diseases={props.diseases} setDiseases={props.setDiseases} medicines={props.medicines} setMedicines={props.setMedicines} profile={props.profile} userInformation={props.userInformation} toast={props.toast} /> : null}
        </div>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default Diagnosis;
