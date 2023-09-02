import { Fragment, useEffect, useState } from "react";
import AddDiagnosis from "./AddDiagnosis";
import { HiOutlineXMark } from "react-icons/hi2";
import Cards from "../../Cards/Cards";
import TableRow from "../../components/TableRow";
import TableHeader from "../../components/TableHeader";
import ProfileField from "../../components/ProfileField";
import diagnosisTabs from "../../constants/diagnosisTabs";
import { Slide, Fade, Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Search from "../../components/Search";
import compare from "../../constants/compare";
import searchOptions from "../../constants/searchOptions";
import AddMedicineForm from "../admin/AddMedicineForm";
import AddDiseaseForm from "../admin/AddDiseaseForm";

function PatientInfo(props) {
  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "400px",
  };
  const [addDiagnosis, setAddDiagnosis] = useState(false);
  const [addNewDisease, setAddNewDisease] = useState(false);
  const [addNewMedicine, setAddNewMedicine] = useState(false);

  const [showPic, setShowPic] = useState(false);

  const [items, setItems] = useState([]);
  const [search, setSearch] = useState({ field: "", word: "", operator: "" });

  useEffect(() => {
    try {
      let index = 1;
      const populateArray = async () => {
        try {
          const newArr = await Promise.all(
            props.patientInfo.diagnosis.map(async (diag, diagIndex) => {
              const isTrue = await compare(searchOptions["diagnosis"][search.field], search.operator, diag[search.field], search.word);
              if (isTrue) {
                index += 1;
                return <TableRow key={diagIndex} diagnosis={diag} setShowPic={setShowPic} />;
              }
            })
          );
          setItems([...newArr]);
        } catch (err) {
          console.log(err);
        }
      };
      if (props.patientInfo.diagnosis) populateArray();
    } catch (err) {
      console.log(err);
    }
  }, [props.patientInfo.diagnosis, search]);

  return (
    <>
      <section className="error-page">
        <div className="container1">
          <div className="wrapper">
            <div className="profile">
              <img src="images/profile.webp" />
              <h1>{props.patientInfo.infoPatient["user.name"]}</h1>

              <ProfileField name={"Current Disease"} value={props.patientInfo.infoPatient.disease_now} />
              <ProfileField name={"Birthday"} value={props.patientInfo.infoPatient.birthday} />
              <ProfileField name={"Blood Type"} value={props.patientInfo.infoPatient.bloodType} />
              <ProfileField name={"Height"} value={props.patientInfo.infoPatient.height + "m"} />
              <ProfileField name={"Weight"} value={props.patientInfo.infoPatient.weight + "K.g"} />
              <ProfileField name={"Gender"} value={props.patientInfo.infoPatient["user.gender"]} />
            </div>

            <div className="analysis">
              {props.patientInfo.diagnosis.length ? <Cards patientInfo={props.patientInfo} /> : null}
              <div className="app-content">
                <div className="app-content-header">
                  {props.patientInfo.diagnosis.length == 0 ? <span>No Diagnosis</span> : null}
                  <h1 className="app-content-headerText">YOUR MEDICAL RECORD</h1>
                </div>

                <div className="app-content-actions">
                  <div className="app-content-actions-wrapper">
                    <button className="action-button" onClick={() => setAddDiagnosis(true)}>
                      Add New Diagnosis
                    </button>
                  </div>
                </div>

                <Search page={"diagnosis"} search={search} setSearch={setSearch} />

                <div className="products-area-wrapper tableView">
                  <TableHeader tabs={diagnosisTabs} />

                  {items.map((item, diagIndex) => {
                    return item;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={"popup-box" + (addDiagnosis ? " show" : "")}>
        <div className="form-container">
          <span className="close">
            <HiOutlineXMark
              onClick={() => {
                setAddDiagnosis(false);
              }}
            />
          </span>

          <h1>{addDiagnosis ? "Add Diagnosis" : ""}</h1>
          {addDiagnosis ? (
            <AddDiagnosis
              setAddNewDisease={setAddNewDisease}
              setAddNewMedicine={setAddNewMedicine}
              setAddDiagnosis={setAddDiagnosis}
              setPatientInfo={props.setPatientInfo}
              patientInfo={props.patientInfo}
              diseases={props.diseases}
              setDiseases={props.setDiseases}
              medicines={props.medicines}
              setMedicines={props.setMedicines}
              profile={props.profile}
              userInformation={props.userInformation}
              toast={props.toast}
            />
          ) : null}
        </div>
      </div>
      <div className={"popup-box" + (addNewDisease ? " show" : "")}>
        <div className="form-container">
          <span className="close">
            <HiOutlineXMark
              onClick={() => {
                setAddNewDisease(false);
              }}
            />
          </span>

          <h1>{addNewDisease ? "Add Disease" : ""}</h1>
          {addNewDisease ? <AddDiseaseForm diseases={props.diseases} setDiseases={props.setDiseases} setAddNew={setAddNewDisease} userInformation={props.userInformation} toast={props.toast} /> : null}
        </div>
      </div>
      <div className={"popup-box" + (addNewMedicine ? " show" : "")}>
        <div className="form-container">
          <span className="close">
            <HiOutlineXMark
              onClick={() => {
                setAddNewMedicine(false);
              }}
            />
          </span>

          <h1>{addNewMedicine ? "Add Medicine" : ""}</h1>

          {addNewMedicine ? <AddMedicineForm medicines={props.medicines} setMedicines={props.setMedicines} setAddNew={setAddNewMedicine} userInformation={props.userInformation} toast={props.toast} /> : null}
        </div>
      </div>
      <div className={"popup-box" + (showPic ? " show" : "")}>
        <div className="form-container">
          <span className="close">
            <HiOutlineXMark
              onClick={() => {
                setShowPic(false);
              }}
            />
          </span>
          <h1>{showPic != false ? "Diagnosis Pictures" : ""}</h1>
          {showPic != false ? (
            <div className="slide-container">
              <Zoom scale={0.4}>
                {showPic.map((slideImage, index) => (
                  <div key={index}>
                    <div style={{ ...divStyle, backgroundImage: `url(${slideImage.path})` }}></div>
                  </div>
                ))}
              </Zoom>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default PatientInfo;
