import { useEffect, useState } from "react";
import DoctorCard from "./DoctorCard";
import Search from "../../components/Search";
import searchOptions from "../../constants/searchOptions";
import compare from "../../constants/compare";
import requestOptions from "../../constants/requestOptions";
import TableHeader from "../../components/TableHeader";
import diagnosisTabs from "../../constants/diagnosisTabs";
import doctorTabs from "../../constants/doctorTabs";
import CalendarInPatient from "./CalendarInPatient";
import Loading from "../Loading";

function Doctors(props) {
  const [currentSchedule, setCurrentSchedule] = useState(false);
  useEffect(() => {
    props.setCurrentTab("doctors");
  }, []);
  const [search, setSearch] = useState({ field: "", word: "", operator: "" });
  async function getDoctors() {
    const response = await fetch(`${process.env.REACT_APP_URL}/doctor/all`, {
      ...requestOptions,
      headers: {
        ...requestOptions.headers,
        authorization: props.userInformation.token,
      },
      method: "GET",
    });
    const data = await response.json();
    if (data.success) {
      props.setDoctors([...data.data]);
    } else {
      console.log(data.error);
      props.toast.error("Sorry, Error Happened in The Server", {
        position: props.toast.POSITION.TOP_CENTER,
      });
    }
  }
  useEffect(() => {
    if (!props.doctorsGet) {
      getDoctors();
      props.setDoctorsGet(true);
    }
  }, []);

  const [firstRender, setFirstRender] = useState(true);
  const [items, setItems] = useState([]);
  async function getSchedule(schedule) {
    let res = schedule;
    while (typeof res == "string") {
      res = JSON.parse(res);
    }
    return res;
  }
  useEffect(() => {
    try {
      let index = 1;
      const populateArray = async () => {
        try {
          const newArr = await Promise.all(
            props.doctors.map(async (doctor, doctorIndex) => {
              let doctorObject = {
                name: doctor["user.name"],
                username: doctor["user.username"],
                gender: doctor["user.gender"],
                address: doctor.address,
                medicalSpecialty: doctor.medicalSpecialty,
              };
              let schedule = await getSchedule(doctor.schedule);
              const isTrue = await compare(
                searchOptions["doctors"][search.field],
                search.operator,
                doctorObject[search.field],
                search.word
              );
              if (isTrue) {
                index += 1;
                let curIndex = index;
                return (
                  <DoctorCard
                    key={doctorIndex}
                    setCurrentSchedule={setCurrentSchedule}
                    firstRender={firstRender}
                    doctor={doctorObject}
                    image={doctor.image}
                    schedule={schedule}
                  />
                );
              }
            })
          );
          setItems([...newArr]);
          setFirstRender(false);
        } catch (err) {
          console.log(err);
        }
      };
      if (props.doctors) populateArray();
    } catch (err) {
      console.log(err);
    }
  }, [props.doctors, search]);

  try {
    return (
      <>
        {!props.doctorsGet ? (
          <Loading />
        ) : (
          <>
            <div className="error-page">
              <div
                className="doctors"
                style={{
                  height: "100%",
                  flex: "1 1",
                  maxHeight: "100%",
                  display: "flex",
                  flexDirection: "column",
                  padding: "16px 10%",
                }}
              >
                <Search
                  page={"doctors"}
                  search={search}
                  setSearch={setSearch}
                />
                <br />
                <h1 className="app-content-headerText">Doctors</h1>

                <div
                  className="products-area-wrapper tableView"
                  style={{
                    background: "white",
                    padding: "10px",
                    borderRadius: "15px",
                    boxShadow: "0 4px 13px #ccc",
                  }}
                >
                  <TableHeader tabs={doctorTabs} />
                  {items.map((item) => {
                    return item;
                  })}
                </div>
              </div>

              {currentSchedule != false ? (
                <CalendarInPatient schedule={currentSchedule} />
              ) : null}
            </div>
          </>
        )}
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default Doctors;
