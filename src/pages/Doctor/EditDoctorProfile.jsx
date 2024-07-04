import { useEffect, useState } from "react";
import messages from "../../constants/messages";
import Joi from "joi";
import Input from "../../components/Input";
import handleSave from "../../functions/handleSave";
import selectOptions from "../../constants/selectOptions";
import Select from "../../components/Select";
import requestOptions from "../../constants/requestOptions";
import Button from "../../components/Button";
import axios from "axios";

function EditDoctorProfile(props) {
  const [duringAdd, setDuringAdd] = useState(false);

  const [doctor, setDoctor] = useState({
    username: props.profile.username,
    gender: props.profile.gender,
    name: props.profile.name,
    address: props.profile.address,
    medicalSpecialty: props.profile.medicalSpecialty,
    schedule: props.profile.schedule,
  });
  useEffect(() => {
    try {
      setDoctor({
        username: props.profile.username,
        gender: props.profile.gender,
        name: props.profile.name,
        address: props.profile.address,
        medicalSpecialty: props.profile.medicalSpecialty,
        schedule: props.profile.schedule,
      });
    } catch (err) {
      console.log(err);
    }
  }, [props.profile]);

  const [doctorErrors, setDoctorErrors] = useState({});
  const doctorSchema = {
    name: Joi.string()
      .required()
      .min(2)
      .max(50)
      .trim()
      .messages(messages)
      .label("Name"),
    gender: Joi.string().required().messages(messages).label("Gender"),
    medicalSpecialty: Joi.string()
      .required()
      .messages(messages)
      .label("Medical Specialty"),
    address: Joi.string()
      .required()
      .min(2)
      .trim()
      .messages(messages)
      .label("Adress"),
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
    schedule: Joi.any().required(),
  };
  const joiDoctor = Joi.object(doctorSchema);

  const [image, setImage] = useState(false);

  async function editProfile() {
    const newData = doctor;
    const url = `${import.meta.env.VITE_URL}/doctor/update`;

    setDuringAdd(true);
    let formData = new FormData();
    if (image) formData.append("images", image);
    Object.keys(newData).map((key) => {
      if (key == "schedule") formData.append(key, JSON.stringify(newData[key]));
      else formData.append(key, newData[key]);
    });

    const response = await axios.put(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        authorization: props.userInformation.token,
      },
    });
    const data = response.data;

    if (data.success) {
      props.setProfile({ ...props.profile, ...newData, image: data.data });
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
              state={doctor}
              setState={setDoctor}
              errors={doctorErrors}
              setErrors={setDoctorErrors}
              schema={doctorSchema}
            />
            <Input
              placeholder={""}
              label={"User Name"}
              type={"text"}
              name={"username"}
              onChange={handleSave}
              state={doctor}
              setState={setDoctor}
              errors={doctorErrors}
              setErrors={setDoctorErrors}
              schema={doctorSchema}
            />
            <Input
              placeholder={""}
              label={"Adress"}
              type={"text"}
              name={"address"}
              onChange={handleSave}
              state={doctor}
              setState={setDoctor}
              errors={doctorErrors}
              setErrors={setDoctorErrors}
              schema={doctorSchema}
            />
            <Select
              label={"Gedner"}
              placeholder={"Choose gender..."}
              list={selectOptions.gender}
              name={"gender"}
              onChange={handleSave}
              state={doctor}
              setState={setDoctor}
              errors={doctorErrors}
              setErrors={setDoctorErrors}
              schema={doctorSchema}
            />
            <Select
              label={"Medical Specialty"}
              placeholder={"Choose medical specialty..."}
              list={selectOptions.medicalSpecialties}
              name={"medicalSpecialty"}
              onChange={handleSave}
              state={doctor}
              setState={setDoctor}
              errors={doctorErrors}
              setErrors={setDoctorErrors}
              schema={doctorSchema}
            />
            <div className="column" style={{ position: "relative" }}>
              <h3>Profile Picture</h3>
              <input
                type="file"
                name=""
                id=""
                onChange={(event) => {
                  setImage(event.target.files[0]);
                }}
              />
            </div>
          </div>
        </form>
        <Button
          action={editProfile}
          text={"Save"}
          disabled={duringAdd}
          joiObject={joiDoctor}
          state={doctor}
          setStateErrors={setDoctorErrors}
          toast={props.toast}
        />
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default EditDoctorProfile;
