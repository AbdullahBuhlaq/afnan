import { Fragment, useEffect, useState } from "react";
import requestOptions from "../../constants/requestOptions";
import EditPatientProfile from "./EditPatientProfile";
import ChangePassword from "../../components/ChangePassword";
import { HiOutlineXMark } from "react-icons/hi2";
import Cards from "../../Cards/Cards";
import TableHeader from "../../components/TableHeader";
import diagnosisTabs from "../../constants/diagnosisTabs";
import TableRow from "../../components/TableRow";
import ProfileField from "../../components/ProfileField";
import { Slide, Fade, Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import searchOptions from "../../constants/searchOptions";
import compare from "../../constants/compare";
import Search from "../../components/Search";
import Loading from "../Loading";

function PatientProfile(props) {
  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "400px",
  };
  useEffect(() => {
    props.setCurrentTab("profile");
  }, []);
  async function getProfile() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_URL}/patient/profile`,
        {
          ...requestOptions,
          headers: {
            ...requestOptions.headers,
            authorization: props.userInformation.token,
          },
          method: "GET",
        }
      );
      const data = await response.json();
      if (data.success) {
        props.setProfile({
          ...data.data,
          infoPatient: {
            ...data.data.infoPatient,
            gender: data.data.infoPatient["user.gender"],
            name: data.data.infoPatient["user.name"],
            username: data.data.infoPatient["user.username"],
          },
        });
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

  const [edit, setEdit] = useState(false);
  const [changePasswordPopup, setChangePasswordPopup] = useState(false);
  const [showPic, setShowPic] = useState(false);

  const [items, setItems] = useState([]);
  const [search, setSearch] = useState({ field: "", word: "", operator: "" });

  useEffect(() => {
    try {
      let index = 1;
      const populateArray = async () => {
        try {
          const newArr = await Promise.all(
            props.profile.diagnosis.map(async (diag, diagIndex) => {
              const isTrue = await compare(
                searchOptions["diagnosis"][search.field],
                search.operator,
                diag[search.field],
                search.word
              );
              if (isTrue) {
                index += 1;
                return (
                  <TableRow
                    key={diagIndex}
                    diagnosis={diag}
                    setShowPic={setShowPic}
                  />
                );
              }
            })
          );
          setItems([...newArr]);
        } catch (err) {
          console.log(err);
        }
      };
      if (props.profile.diagnosis) populateArray();
    } catch (err) {
      console.log(err);
    }
  }, [props.profile, search]);

  try {
    return (
      <>
        {Object.keys(props.profile).length == 0 ? (
          <Loading />
        ) : (
          <>
            <section className="error-page">
              <div className="container1">
                <div className="wrapper">
                  <div className="profile">
                    <img src="images/profile.webp" />
                    <h1>{props.profile.infoPatient.name}</h1>

                    <ProfileField
                      name={"User Name"}
                      value={props.profile.infoPatient.username}
                    />
                    <ProfileField
                      name={"Access Key"}
                      value={props.profile.infoPatient.accessKey}
                    />
                    <ProfileField
                      name={"Current Disease"}
                      value={props.profile.infoPatient.disease_now}
                    />
                    <ProfileField
                      name={"Birthday"}
                      value={new Date(
                        props.profile.infoPatient.birthday
                      ).toLocaleString("default", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    />
                    <ProfileField
                      name={"Blood Type"}
                      value={props.profile.infoPatient.bloodType}
                    />
                    <ProfileField
                      name={"Height"}
                      value={props.profile.infoPatient.height + "m"}
                    />
                    <ProfileField
                      name={"Weight"}
                      value={props.profile.infoPatient.weight + "K.g"}
                    />
                    <ProfileField
                      name={"Gender"}
                      value={props.profile.infoPatient.gender}
                    />

                    <div className="app-content-actions">
                      <div className="app-content-actions-wrapper">
                        <button
                          className="action-button profile-button"
                          onClick={() => setEdit(true)}
                        >
                          Edit Profile
                        </button>
                        <button
                          className="action-button profile-button"
                          onClick={() => setChangePasswordPopup(true)}
                        >
                          Change Password
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="analysis">
                    {props.profile.diagnosis.length ? (
                      <Cards patientInfo={props.profile} />
                    ) : null}
                    <div className="app-content">
                      <div className="app-content-header">
                        {props.profile.diagnosis.length == 0
                          ? "No Diagnosis"
                          : null}
                        <h1 className="app-content-headerText">
                          YOUR MEDICAL RECORD
                        </h1>
                      </div>

                      <Search
                        page={"diagnosis"}
                        search={search}
                        setSearch={setSearch}
                      />

                      <div className="products-area-wrapper tableView">
                        <TableHeader tabs={diagnosisTabs} />

                        {items.map((item) => {
                          return item;
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div
              className={
                "popup-box" + (edit || changePasswordPopup ? " show" : "")
              }
            >
              <div className="form-container">
                <span className="close">
                  <HiOutlineXMark
                    onClick={() => {
                      setEdit(false);
                      setChangePasswordPopup(false);
                    }}
                  />
                </span>

                <h1>
                  {edit
                    ? "Edit Profile"
                    : changePasswordPopup
                    ? "Change Password"
                    : ""}
                </h1>
                {edit ? (
                  <EditPatientProfile
                    profile={props.profile}
                    setProfile={props.setProfile}
                    setEdit={setEdit}
                    userInformation={props.userInformation}
                    toast={props.toast}
                  />
                ) : null}
                {changePasswordPopup ? (
                  <ChangePassword
                    setChangePasswordPopup={setChangePasswordPopup}
                    userInformation={props.userInformation}
                    toast={props.toast}
                  />
                ) : null}
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
                          <div
                            style={{
                              ...divStyle,
                              backgroundImage: `url(${slideImage.path})`,
                            }}
                          ></div>
                        </div>
                      ))}
                    </Zoom>
                  </div>
                ) : null}
              </div>
            </div>
          </>
        )}
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default PatientProfile;
