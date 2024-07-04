import { useEffect, useState } from "react";
import DiseaseCard from "./DiseaseCard";
import Search from "../../components/Search";
import searchOptions from "../../constants/searchOptions";
import compare from "../../constants/compare";
import requestOptions from "../../constants/requestOptions";
import AddDiseaseForm from "./AddDiseaseForm";
import EditDiseaseForm from "./EditDiseaseForm";
import { HiOutlineXMark } from "react-icons/hi2";

import { BsPlusCircle } from "react-icons/bs";
import Loading from "../Loading";
function Diseases(props) {
  useEffect(() => {
    props.setCurrentTab("diseases");
  }, []);
  const [search, setSearch] = useState({ field: "", word: "", operator: "" });
  async function getDiseases() {
    const response = await fetch(
      `${import.meta.env.VITE_URL}/diseaseType/all`,
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

  const [firstRender, setFirstRender] = useState(true);
  const [items, setItems] = useState([]);
  useEffect(() => {
    try {
      let index = 1;
      const populateArray = async () => {
        try {
          const newArr = await Promise.all(
            Object.keys(props.diseases).map(
              async (diseaseKey, diseaseIndex) => {
                let diseaseObject = {
                  name: props.diseases[diseaseKey].name,
                  id: props.diseases[diseaseKey].id,
                };
                const isTrue = await compare(
                  searchOptions["diseases"][search.field],
                  search.operator,
                  diseaseObject[search.field],
                  search.word
                );
                if (isTrue) {
                  index += 1;
                  let curIndex = index;
                  return (
                    <DiseaseCard
                      key={diseaseIndex}
                      index={curIndex}
                      firstRender={firstRender}
                      disease={diseaseObject}
                      setCurrentEdit={setCurrentEdit}
                      deleteDisease={deleteDisease}
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
  }, [props.diseases, search]);

  async function deleteDisease(id) {
    const response = await fetch(
      `${import.meta.env.VITE_URL}/diseaseType/delete/${id}`,
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
      delete props.diseases[id];
      props.setDiseases({ ...props.diseases });
      props.toast.success("Disease Type Deleted", {
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
        {!props.diseasesGet ? (
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
                  page={"diseases"}
                  search={search}
                  setSearch={setSearch}
                />
                <br />
                <h1 className="app-content-headerText">Diseases</h1>

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
                    <h3>{"Add Disease "}</h3>
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
                    ? "Add Disease Type"
                    : currentEdit
                    ? "Edit Disease Type " + currentEdit.name
                    : ""}
                </h1>

                {addNew ? (
                  <AddDiseaseForm
                    diseases={props.diseases}
                    setDiseases={props.setDiseases}
                    setAddNew={setAddNew}
                    userInformation={props.userInformation}
                    toast={props.toast}
                  />
                ) : null}
                {currentEdit ? (
                  <EditDiseaseForm
                    diseases={props.diseases}
                    setDiseases={props.setDiseases}
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

export default Diseases;
