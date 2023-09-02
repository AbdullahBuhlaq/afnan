import { Fragment, useEffect, useState } from "react";
import requestOptions from "../../constants/requestOptions";
import EditDoctorProfile from "./EditDoctorProfile";
import ChangePassword from "../../components/ChangePassword";
import { HiOutlineXMark } from "react-icons/hi2";
import Calendar from "./Calendar";
import ProfileField from "../../components/ProfileField";
import Loading from "../Loading";

function DoctorProfile(props) {
  useEffect(() => {
    props.setCurrentTab("profile");
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

  const [edit, setEdit] = useState(false);
  const [changePasswordPopup, setChangePasswordPopup] = useState(false);

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
                    <img src={!props.profile.image || props.profile.image == "" ? "images/profile.webp" : props.profile.image} />
                    <h1>{props.profile.name}</h1>

                    <ProfileField name={"User Name"} value={props.profile.username} />
                    <ProfileField name={"Medical Specialty"} value={props.profile.medicalSpecialty} />
                    <ProfileField name={"Address"} value={props.profile.address} />
                    <ProfileField name={"Gender"} value={props.profile.gender} />

                    <div className="app-content-actions">
                      <div className="app-content-actions-wrapper">
                        <button className="action-button profile-button" onClick={() => setEdit(true)}>
                          Edit Profile
                        </button>
                        <button className="action-button profile-button" onClick={() => setChangePasswordPopup(true)}>
                          Change Password
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="analysis">
                    <div className="app-content">
                      <Calendar profile={props.profile} setProfile={props.setProfile} userInformation={props.userInformation} toast={props.toast} />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className={"popup-box" + (edit || changePasswordPopup ? " show" : "")}>
              <div className="form-container">
                <span className="close">
                  <HiOutlineXMark
                    onClick={() => {
                      setEdit(false);
                      setChangePasswordPopup(false);
                    }}
                  />
                </span>

                <h1>{edit ? "Edit Profile" : changePasswordPopup ? "Change Password" : ""}</h1>
                {edit ? <EditDoctorProfile profile={props.profile} setProfile={props.setProfile} setEdit={setEdit} userInformation={props.userInformation} toast={props.toast} /> : null}
                {changePasswordPopup ? <ChangePassword setChangePasswordPopup={setChangePasswordPopup} userInformation={props.userInformation} toast={props.toast} /> : null}
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

export default DoctorProfile;
