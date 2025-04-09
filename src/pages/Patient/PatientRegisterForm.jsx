import { useState } from "react";
import messages from "../../constants/messages";
import Joi from "joi";
import Input from "../../components/Input";
import handleSave from "../../functions/handleSave";
import selectOptions from "../../constants/selectOptions";
import Select from "../../components/Select";
import requestOptions from "../../constants/requestOptions";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import CheckPasswordInput from "../../components/CheckPassword";
import AccessKey from "../../components/AccessKey";
import { MdOutlineArrowForwardIos } from "react-icons/md";

function PatientRegisterForm(props) {
  const navigate = useNavigate();
  const [duringAdd, setDuringAdd] = useState(false);

  const [patient, setPatient] = useState({
    username: "",
    password: "",
    gender: "",
    name: "",
    birthday: "",
    weight: "",
    height: "",
    bloodType: "",
    accessKey: "",
    disease_now: "",
  });

  const [patientErrors, setPatientErrors] = useState({});
  const patientSchema = {
    name: Joi.string()
      .required()
      .min(2)
      .max(50)
      .trim()
      .messages(messages)
      .label("Name"),
    gender: Joi.string().required().messages(messages).label("Gender"),
    bloodType: Joi.string().required().messages(messages).label("Blood Type"),
    birthday: Joi.date().required().messages(messages).label("Birth Date"),
    weight: Joi.number()
      .integer()
      .required()
      .min(1)
      .max(500)
      .messages(messages)
      .label("Weight"),
    height: Joi.number()
      .integer()
      .required()
      .min(1)
      .max(300)
      .messages(messages)
      .label("Height"),
    password: Joi.string()
      .required()
      .min(8)
      .max(50)
      .messages(messages)
      .label("Password"),
    username: Joi.string()
      .trim()
      .pattern(/[a-zA-Z]+[a-zA-Z0-9\_\.]*$/)
      .min(3)
      .max(30)
      .required()
      .messages({
        ...messages,
        "string.pattern.base":
          "{{#label}} must contain just numbers and letters ",
      })
      .label("User Name"),
    accessKey: Joi.string()
      .required()
      .trim()
      .messages(messages)
      .label("Access Key"),
    disease_now: Joi.string().empty(Joi.allow(null)),
  };
  const joiPatient = Joi.object(patientSchema);

  async function register() {
    try {
      const newData = patient;
      const infoRequestOptions = {
        ...requestOptions,
        body: JSON.stringify({
          ...patient,
        }),
      };
      setDuringAdd(true);
      const response = await fetch(
        `${process.env.REACT_APP_URL}/auth/signup-patient`,
        infoRequestOptions
      );
      const data = await response.json();
      if (data.success) {
        localStorage.setItem(
          "user",
          JSON.stringify({
            token: data.data.token,
            id: data.data.id,
            userType: "patient",
          })
        );
        props.toast.success("Welcome!", {
          position: props.toast.POSITION.TOP_CENTER,
        });
        navigate("/home");
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
        <div className="form-container">
          <span
            onClick={() => {
              props.setStepNumber(0);
            }}
          >
            <MdOutlineArrowForwardIos />
          </span>
          <h1>{"Create un Account With Us"}</h1>

          <form>
            <div className="row">
              <Input
                placeholder={""}
                label={"Name"}
                type={"text"}
                name={"name"}
                onChange={handleSave}
                state={patient}
                setState={setPatient}
                errors={patientErrors}
                setErrors={setPatientErrors}
                schema={patientSchema}
              />
              <Input
                placeholder={""}
                label={"User Name"}
                type={"text"}
                name={"username"}
                onChange={handleSave}
                state={patient}
                setState={setPatient}
                errors={patientErrors}
                setErrors={setPatientErrors}
                schema={patientSchema}
              />
              <Input
                placeholder={""}
                label={"Password"}
                type={"password"}
                name={"password"}
                onChange={handleSave}
                state={patient}
                setState={setPatient}
                errors={patientErrors}
                setErrors={setPatientErrors}
                schema={patientSchema}
              />
              <CheckPasswordInput
                password={patient.password}
                errors={patientErrors}
                setErrors={setPatientErrors}
              />
              <Select
                label={"Gender"}
                placeholder={"Choose gender..."}
                list={selectOptions.gender}
                name={"gender"}
                onChange={handleSave}
                state={patient}
                setState={setPatient}
                errors={patientErrors}
                setErrors={setPatientErrors}
                schema={patientSchema}
              />
              <Input
                placeholder={""}
                label={"Birth Date"}
                type={"date"}
                name={"birthday"}
                onChange={handleSave}
                state={patient}
                setState={setPatient}
                errors={patientErrors}
                setErrors={setPatientErrors}
                schema={patientSchema}
              />
              <Input
                placeholder={""}
                label={"Height"}
                type={"number"}
                name={"height"}
                onChange={handleSave}
                state={patient}
                setState={setPatient}
                errors={patientErrors}
                setErrors={setPatientErrors}
                schema={patientSchema}
              />
              <Input
                placeholder={""}
                label={"Weight"}
                type={"number"}
                name={"weight"}
                onChange={handleSave}
                state={patient}
                setState={setPatient}
                errors={patientErrors}
                setErrors={setPatientErrors}
                schema={patientSchema}
              />
              <Select
                label={"Blood Type"}
                placeholder={"Choose Blood Type..."}
                list={selectOptions.bloodType}
                name={"bloodType"}
                onChange={handleSave}
                state={patient}
                setState={setPatient}
                errors={patientErrors}
                setErrors={setPatientErrors}
                schema={patientSchema}
              />
              <Select
                label={"Current Disease"}
                placeholder={"Choose Current Disease..."}
                list={selectOptions.diseases}
                name={"disease_now"}
                onChange={handleSave}
                state={patient}
                setState={setPatient}
                errors={patientErrors}
                setErrors={setPatientErrors}
                schema={patientSchema}
              />
              <AccessKey
                placeholder={""}
                label={"Access Key"}
                name={"accessKey"}
                onChange={handleSave}
                state={patient}
                setState={setPatient}
                errors={patientErrors}
                setErrors={setPatientErrors}
                schema={patientSchema}
              />
            </div>
          </form>
          <Button
            action={register}
            text={"Sign Up"}
            disabled={duringAdd}
            joiObject={joiPatient}
            state={patient}
            setStateErrors={setPatientErrors}
            toast={props.toast}
          />
        </div>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default PatientRegisterForm;
