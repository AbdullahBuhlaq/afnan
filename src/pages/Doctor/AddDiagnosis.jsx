import { useState } from "react";
import messages from "../../constants/messages";
import Joi from "joi";
import Input from "../../components/Input";
import handleSave from "../../functions/handleSave";
import requestOptions from "../../constants/requestOptions";
import Button from "../../components/Button";
import Select from "../../components/Select";
import axios from "axios";

function AddDiagnosisForm(props) {
  const [duringAdd, setDuringAdd] = useState(false);
  const [images, setImages] = useState({});

  const [diagnosis, setDiagnosis] = useState({
    blood_pressure: "",
    sugar: "",
    heart_beat: "",
    cholesterol: "",
    diseaseTypeId: "",
    medicineId: "",
    description: "",
    note: "",
  });

  const [diagnosisErrors, setDiagnosisErrors] = useState({});
  const diagnosisSchema = {
    blood_pressure: Joi.string()
      .trim()
      .pattern(/^[0-9]{2}\/[0-9]{2}$/)
      .allow(null, "")
      .messages({
        ...messages,
        "string.pattern.base": "{{#label}} must be like : 02/02",
      })
      .label("Blood Pressure"),
    sugar: Joi.number()
      .integer()
      .min(60)
      .max(350)
      .empty(Joi.allow(null))
      .messages(messages)
      .label("Sugar"),

    heart_beat: Joi.number()
      .integer()
      .min(0)
      .max(150)
      .empty(Joi.allow(null))
      .messages(messages)
      .label("Heart Rate"),
    cholesterol: Joi.number()
      .integer()
      .min(100)
      .max(400)
      .empty(Joi.allow(null))
      .messages(messages)
      .label("Cholesterol"),
    diseaseTypeId: Joi.number()
      .integer()
      .required()
      .min(1)
      .messages(messages)
      .label("Disease"),
    medicineId: Joi.number()
      .integer()
      .required()
      .min(1)
      .messages(messages)
      .label("Medicine"),
    description: Joi.string()
      .required()
      .trim()
      .messages(messages)
      .label("Description"),
    note: Joi.string().required().trim().messages(messages).label("Note"),
  };
  const joiDiagnosis = Joi.object(diagnosisSchema);

  async function addDiagnosis() {
    try {
      const infoRequestOptions = {
        ...requestOptions,
        headers: {
          ...requestOptions.headers,
          authorization: props.userInformation.token,
        },
        body: JSON.stringify({
          ...diagnosis,
          userId: props.patientInfo.infoPatient["user.id"],
        }),
      };
      setDuringAdd(true);

      const newData = diagnosis;
      const url = `${import.meta.env.VITE_URL}/doctor/add-diagnosis`;

      setDuringAdd(true);
      let formData = new FormData();
      Object.keys(images).map((image) => {
        formData.append("images", images[image]);
      });
      Object.keys(newData).map((key) => {
        formData.append(key, newData[key]);
      });
      formData.append("userId", props.patientInfo.infoPatient["user.id"]);

      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: props.userInformation.token,
        },
      });
      const data = response.data;

      if (data.success) {
        props.setPatientInfo({
          ...props.patientInfo,
          diagnosis: [
            ...props.patientInfo.diagnosis,
            {
              ...newData,
              diagnosisId: data.data.diagnosisId,
              createdAt: new Date().toISOString(),
              "medicine.name": props.medicines[newData.medicineId].name,
              "diseaseType.name": props.diseases[newData.diseaseTypeId].name,
              "doctor.medicalSpecialty": props.profile.medicalSpecialty,
              "doctor.address": props.profile.address,
              "doctor.user.id": props.profile["user.id"],
              "doctor.user.name": props.profile["user.name"],
              "doctor.user.gender": props.profile["user.gender"],
              pictures: data.data.pathImages,
            },
          ],
        });
        props.setAddDiagnosis(false);
        props.toast.success("Diagnosis Added", {
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
        <form>
          <div className="row">
            <Input
              placeholder={""}
              label={"Blood Pressure"}
              type={"text"}
              name={"blood_pressure"}
              onChange={handleSave}
              state={diagnosis}
              setState={setDiagnosis}
              errors={diagnosisErrors}
              setErrors={setDiagnosisErrors}
              schema={diagnosisSchema}
            />
            <Input
              placeholder={""}
              label={"Sugar Level"}
              type={"number"}
              name={"sugar"}
              onChange={handleSave}
              state={diagnosis}
              setState={setDiagnosis}
              errors={diagnosisErrors}
              setErrors={setDiagnosisErrors}
              schema={diagnosisSchema}
            />
            <Input
              placeholder={""}
              label={"Heart Rate"}
              type={"number"}
              name={"heart_beat"}
              onChange={handleSave}
              state={diagnosis}
              setState={setDiagnosis}
              errors={diagnosisErrors}
              setErrors={setDiagnosisErrors}
              schema={diagnosisSchema}
            />
            <Input
              placeholder={""}
              label={"Cholesterol"}
              type={"number"}
              name={"cholesterol"}
              onChange={handleSave}
              state={diagnosis}
              setState={setDiagnosis}
              errors={diagnosisErrors}
              setErrors={setDiagnosisErrors}
              schema={diagnosisSchema}
            />
            <Select
              label={"Disease"}
              addNew={props.setAddNewDisease}
              placeholder={"Choose the disease..."}
              list={props.diseases}
              name={"diseaseTypeId"}
              onChange={handleSave}
              state={diagnosis}
              setState={setDiagnosis}
              errors={diagnosisErrors}
              setErrors={setDiagnosisErrors}
              schema={diagnosisSchema}
            />
            <Select
              label={"Medicine"}
              addNew={props.setAddNewMedicine}
              placeholder={"Choose the medicine..."}
              list={props.medicines}
              name={"medicineId"}
              onChange={handleSave}
              state={diagnosis}
              setState={setDiagnosis}
              errors={diagnosisErrors}
              setErrors={setDiagnosisErrors}
              schema={diagnosisSchema}
            />
            <Input
              placeholder={""}
              label={"Description"}
              type={"text"}
              name={"description"}
              onChange={handleSave}
              state={diagnosis}
              setState={setDiagnosis}
              errors={diagnosisErrors}
              setErrors={setDiagnosisErrors}
              schema={diagnosisSchema}
            />
            <Input
              placeholder={""}
              label={"Note"}
              type={"text"}
              name={"note"}
              onChange={handleSave}
              state={diagnosis}
              setState={setDiagnosis}
              errors={diagnosisErrors}
              setErrors={setDiagnosisErrors}
              schema={diagnosisSchema}
            />
            <div className="column" style={{ position: "relative" }}>
              <h3>Diagnosis Pictures</h3>
              <input
                type="file"
                name=""
                id=""
                onChange={async (event) => {
                  setImages(event.target.files);
                }}
                multiple={true}
              />
            </div>
          </div>
        </form>
        <Button
          action={addDiagnosis}
          text={"Add"}
          disabled={duringAdd}
          joiObject={joiDiagnosis}
          state={diagnosis}
          setStateErrors={setDiagnosisErrors}
          toast={props.toast}
        />
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default AddDiagnosisForm;
