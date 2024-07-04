import { useEffect, useState } from "react";
import MedicineCard from "./MedicineCard";
import Search from "../../components/Search";
import searchOptions from "../../constants/searchOptions";
import compare from "../../constants/compare";
import requestOptions from "../../constants/requestOptions";
import AddMedicineForm from "./AddMedicineForm";
import EditMedicineForm from "./EditmedicineForm";
import { HiOutlineXMark } from "react-icons/hi2";
import { BsPlusCircle } from "react-icons/bs";
import Loading from "../Loading";

function Medicines(props) {
  useEffect(() => {
    props.setCurrentTab("medicines");
  }, []);
  const [search, setSearch] = useState({ field: "", word: "", operator: "" });
  async function getMedicines() {
    const response = await fetch(`${import.meta.env.VITE_URL}/medicine/all`, {
      ...requestOptions,
      headers: {
        ...requestOptions.headers,
        authorization: props.userInformation.token,
      },
      method: "GET",
    });
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

  const [firstRender, setFirstRender] = useState(true);
  const [items, setItems] = useState([]);
  useEffect(() => {
    try {
      let index = 1;
      const populateArray = async () => {
        try {
          const newArr = await Promise.all(
            Object.keys(props.medicines).map(
              async (medicineKey, medicineIndex) => {
                let medicineObject = {
                  name: props.medicines[medicineKey].name,
                  id: props.medicines[medicineKey].id,
                };
                const isTrue = await compare(
                  searchOptions["medicines"][search.field],
                  search.operator,
                  medicineObject[search.field],
                  search.word
                );
                if (isTrue) {
                  index += 1;
                  let curIndex = index;
                  return (
                    <MedicineCard
                      key={medicineIndex}
                      index={curIndex}
                      firstRender={firstRender}
                      medicine={medicineObject}
                      setCurrentEdit={setCurrentEdit}
                      deleteMedicine={deleteMedicine}
                    />
                  );
                }
              }
            )
          );
          setItems([...newArr]);
          if (newArr.length) setFirstRender(false);
        } catch (err) {
          console.log(err);
        }
      };
      populateArray();
    } catch (err) {
      console.log(err);
    }
  }, [props.medicines, search]);

  async function deleteMedicine(id) {
    const response = await fetch(
      `${import.meta.env.VITE_URL}/medicine/delete/${id}`,
      {
        ...requestOptions,
        method: "delete",
        headers: {
          ...requestOptions.headers,
          authorization: props.userInformation.token,
        },
      }
    );
    const data = await response.json();
    // const data = { success: true };
    if (data.success) {
      delete props.medicines[id];
      props.setMedicines({ ...props.medicines });
      props.toast.success("Medicine Deleted", {
        position: props.toast.POSITION.TOP_CENTER,
      });
    } else {
      console.log(data.error);
      props.toast.error(data.error, {
        position: props.toast.POSITION.TOP_CENTER,
      });
    }
  }

  const [addNew, setAddNew] = useState(false);
  const [currentEdit, setCurrentEdit] = useState(false);

  try {
    return (
      <>
        <Search page={"medicines"} search={search} setSearch={setSearch} />
        {!props.medicinesGet ? (
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
                  page={"medicines"}
                  search={search}
                  setSearch={setSearch}
                />
                <br />
                <h1 className="app-content-headerText">Medicines</h1>

                <div className="test-container">
                  <div
                    className="test-card"
                    style={{ cursor: "pointer", textAlign: "center" }}
                    onClick={() => setAddNew(true)}
                  >
                    <div
                      style={{
                        margin: "auto",
                        height: "24px",
                        fontSize: "35px",
                      }}
                    >
                      <BsPlusCircle />
                    </div>
                    <h3>{"Add Medicine "}</h3>
                  </div>
                  {items.map((item) => {
                    return item;
                  })}
                </div>
              </div>
            </div>

            <div
              className={"popup-box" + (addNew || currentEdit ? " show" : "")}
            >
              <div className="form-container">
                <span className="close">
                  <HiOutlineXMark
                    onClick={() => {
                      setAddNew(false);
                      setCurrentEdit(false);
                    }}
                  />
                </span>

                <h1>
                  {addNew
                    ? "Add Medicine"
                    : currentEdit
                    ? "Edit Medicine " + currentEdit.name
                    : ""}
                </h1>

                {addNew ? (
                  <AddMedicineForm
                    medicines={props.medicines}
                    setMedicines={props.setMedicines}
                    setAddNew={setAddNew}
                    userInformation={props.userInformation}
                    toast={props.toast}
                  />
                ) : null}
                {currentEdit ? (
                  <EditMedicineForm
                    medicines={props.medicines}
                    setMedicines={props.setMedicines}
                    currentEdit={currentEdit}
                    setCurrentEdit={setCurrentEdit}
                    userInformation={props.userInformation}
                    toast={props.toast}
                  />
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

export default Medicines;
