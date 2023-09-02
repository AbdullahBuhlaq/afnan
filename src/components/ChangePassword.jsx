import { useState } from "react";
import messages from "../constants/messages";
import Joi from "joi";
import Input from "../components/Input";
import handleSave from "../functions/handleSave";
import requestOptions from "../constants/requestOptions";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import CheckPasswordInput from "../components/CheckPassword";

function ChangePassword(props) {
  const navigate = useNavigate();
  const [duringAdd, setDuringAdd] = useState(false);

  const [changePassword, setChangePassword] = useState({
    password: "",
    newPassword: "",
  });

  const [changePasswordErrors, setChangePasswordErrors] = useState({});
  const changePasswordSchema = {
    password: Joi.string().required().min(8).max(50).messages(messages).label("Current Password"),
    newPassword: Joi.string().required().min(8).max(50).messages(messages).label("New Password"),
  };
  const joiChangePassword = Joi.object(changePasswordSchema);

  async function change() {
    try {
      const newData = changePassword;
      const infoRequestOptions = {
        ...requestOptions,
        headers: { ...requestOptions.headers, authorization: props.userInformation.token },
        method: "PUT",
        body: JSON.stringify({
          ...changePassword,
        }),
      };
      setDuringAdd(true);
      const response = await fetch("http://localhost:3001/account/ch-pass", infoRequestOptions);
      const data = await response.json();
      if (data.success) {
        props.setChangePasswordPopup(false);
        props.toast.success("Password Has Changed", {
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
            <Input placeholder={""} label={"Current Password"} type={"password"} name={"password"} onChange={handleSave} state={changePassword} setState={setChangePassword} errors={changePasswordErrors} setErrors={setChangePasswordErrors} schema={changePasswordSchema} />
            <Input placeholder={""} label={"New Password"} type={"password"} name={"newPassword"} onChange={handleSave} state={changePassword} setState={setChangePassword} errors={changePasswordErrors} setErrors={setChangePasswordErrors} schema={changePasswordSchema} />
            <CheckPasswordInput password={changePassword.newPassword} errors={changePasswordErrors} setErrors={setChangePasswordErrors} />
          </div>
        </form>
        <Button action={change} text={"Save"} disabled={duringAdd} joiObject={joiChangePassword} state={changePassword} setStateErrors={setChangePasswordErrors} toast={props.toast} />
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default ChangePassword;
