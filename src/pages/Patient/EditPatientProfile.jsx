import { useEffect, useState } from "react";
import messages from "../../constants/messages";
import Joi from "joi";
import Input from "../../components/Input";
import handleSave from "../../functions/handleSave";
import selectOptions from "../../constants/selectOptions";
import Select from "../../components/Select";
import requestOptions from "../../constants/requestOptions";
import Button from "../../components/Button";
import AccessKey from "../../components/AccessKey";

function EditPatientProfile(props) {
  const [duringAdd, setDuringAdd] = useState(false);

  const [patient, setPatient] = useState({
    username: props.profile.infoPatient.username,
    gender: props.profile.infoPatient.gender,
    name: props.profile.infoPatient.name,
    birthday: props.profile.infoPatient.birthday,
    weight: props.profile.infoPatient.weight,
    height: props.profile.infoPatient.height,
    bloodType: props.profile.infoPatient.bloodType,
    accessKey: props.profile.infoPatient.accessKey,
    disease_now: props.profile.infoPatient.disease_now,
  });
  useEffect(() => {
    try {
      setPatient({
        username: props.profile.infoPatient.username,
        gender: props.profile.infoPatient.gender,
        name: props.profile.infoPatient.name,
        birthday: props.profile.infoPatient.birthday,
        weight: props.profile.infoPatient.weight,
        height: props.profile.infoPatient.height,
        bloodType: props.profile.infoPatient.bloodType,
        accessKey: props.profile.infoPatient.accessKey,
        disease_now: props.profile.infoPatient.disease_now,
      });
    } catch (err) {
      console.log(err);
    }
  }, [props.profile.infoPatient]);

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
    username: Joi.string()
      .trim()
      .pattern(/[a-zA-Z]+[a-zA-Z0-9\_\.]*$/)
      .min(3)
      .max(30)
      .required()
      .messages({
        ...messages,
        "string.pattern.base":
          "{{#label}} must contain just numbers and letters",
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

  async function editProfile() {
    try {
      const newData = patient;
      const infoRequestOptions = {
        ...requestOptions,
        headers: {
          ...requestOptions.headers,
          authorization: props.userInformation.token,
        },
        method: "PUT",
        body: JSON.stringify({
          ...patient,
        }),
      };
      setDuringAdd(true);
      const response = await fetch(
        `${import.meta.env.VITE_URL}/patient/update`,
        infoRequestOptions
      );
      const data = await response.json();
      if (data.success) {
        props.setProfile({
          ...props.profile,
          infoPatient: { ...props.profile.infoPatient, ...newData },
        });
        props.setEdit(false);
        props.toast.success("Profile Edited", {
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
            <Select
              label={"Gender"}
              placeholder={"Choose gender"}
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
          action={editProfile}
          text={"Save"}
          disabled={duringAdd}
          joiObject={joiPatient}
          state={patient}
          setStateErrors={setPatientErrors}
          toast={props.toast}
        />
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default EditPatientProfile;
