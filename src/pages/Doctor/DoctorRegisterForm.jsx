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
import { MdOutlineArrowForwardIos } from "react-icons/md";

function DoctorRegisterForm(props) {
  const navigate = useNavigate();
  const [duringAdd, setDuringAdd] = useState(false);

  const [doctor, setDoctor] = useState({
    username: "",
    password: "",
    gender: "",
    name: "",
    address: "",
    medicalSpecialty: "",
  });

  const [doctorErrors, setDoctorErrors] = useState({});
  const doctorSchema = {
    name: Joi.string().required().min(2).max(50).trim().messages(messages).label("Name"),
    gender: Joi.string().required().messages(messages).label("Gender"),
    medicalSpecialty: Joi.string().required().messages(messages).label("Medical Specialty"),
    address: Joi.string().required().min(2).trim().messages(messages).label("Address"),
    username: Joi.string()
      .trim()
      .pattern(/[a-zA-Z]+[a-zA-Z0-9\_\.]*$/)
      .min(3)
      .max(30)
      .required()
      .messages({ ...messages, "string.pattern.base": "{{#label}} must contain just numbers and letters" })
      .label("User Name"),
    password: Joi.string().required().min(8).max(50).messages(messages).label("Password"),
  };
  const joiDoctor = Joi.object(doctorSchema);

  async function register() {
    const newData = doctor;
    const infoRequestOptions = {
      ...requestOptions,
      body: JSON.stringify({
        ...doctor,
      }),
    };
    setDuringAdd(true);
    const response = await fetch("http://localhost:3001/auth/signup-doctor", infoRequestOptions);
    const data = await response.json();
    // const data = { id: 4, success: true, data: { token: "sldkfjslkfj", id: 1 } };
    if (data.success) {
      localStorage.setItem("user", JSON.stringify({ token: data.data.token, id: data.data.id, userType: "doctor" }));
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
  }

  return (
    <>
      <div className="form-container">
        <span
          onClick={() => {
            props.setStepNumber(0);
          }}
          className="back"
        >
          <MdOutlineArrowForwardIos />
        </span>
        <h1>{"Create un Account With Us"}</h1>

        <form>
          <div className="row">
            <Input placeholder={""} label={"Name"} type={"text"} name={"name"} onChange={handleSave} state={doctor} setState={setDoctor} errors={doctorErrors} setErrors={setDoctorErrors} schema={doctorSchema} />
            <Input placeholder={""} label={"User Name"} type={"text"} name={"username"} onChange={handleSave} state={doctor} setState={setDoctor} errors={doctorErrors} setErrors={setDoctorErrors} schema={doctorSchema} />
            <Input placeholder={""} label={"Password"} type={"password"} name={"password"} onChange={handleSave} state={doctor} setState={setDoctor} errors={doctorErrors} setErrors={setDoctorErrors} schema={doctorSchema} />
            <CheckPasswordInput password={doctor.password} errors={doctorErrors} setErrors={setDoctorErrors} />
            <Input placeholder={""} label={"Address"} type={"text"} name={"address"} onChange={handleSave} state={doctor} setState={setDoctor} errors={doctorErrors} setErrors={setDoctorErrors} schema={doctorSchema} />
            <Select label={"Gender"} placeholder={"Choose gender..."} list={selectOptions.gender} name={"gender"} onChange={handleSave} state={doctor} setState={setDoctor} errors={doctorErrors} setErrors={setDoctorErrors} schema={doctorSchema} />
            <Select label={"Medical Specialty"} placeholder={"Choose medical specialty..."} list={selectOptions.medicalSpecialties} name={"medicalSpecialty"} onChange={handleSave} state={doctor} setState={setDoctor} errors={doctorErrors} setErrors={setDoctorErrors} schema={doctorSchema} />
          </div>
        </form>
        <Button action={register} text={"Sign Up"} disabled={duringAdd} joiObject={joiDoctor} state={doctor} setStateErrors={setDoctorErrors} toast={props.toast} />
      </div>
    </>
  );
}

export default DoctorRegisterForm;
