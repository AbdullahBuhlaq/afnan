import { useState } from "react";
import messages from "../constants/messages";
import Joi from "joi";
import Input from "../components/Input";
import handleSave from "../functions/handleSave";
import requestOptions from "../constants/requestOptions";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const navigate = useNavigate();
  const [duringAdd, setDuringAdd] = useState(false);

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [userErrors, setUserErrors] = useState({});
  const userSchema = {
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
    password: Joi.string()
      .required()
      .min(8)
      .max(50)
      .messages(messages)
      .label("Password"),
  };
  const joiUser = Joi.object(userSchema);

  async function login() {
    try {
      const newData = user;
      const infoRequestOptions = {
        ...requestOptions,
        body: JSON.stringify({
          ...user,
        }),
      };
      setDuringAdd(true);
      const response = await fetch(
        `${import.meta.env.VITE_URL}/auth/login`,
        infoRequestOptions
      );
      const data = await response.json();
      // const data = {success: true, data: { token: "sldkfjslkfj", id: 1, userType: "patient" } };
      if (data.success) {
        localStorage.setItem("user", JSON.stringify({ ...data.data }));
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
          <h1>{"Login Now"}</h1>

          <form>
            <div className="row">
              <Input
                placeholder={""}
                label={"User Name"}
                type={"text"}
                name={"username"}
                onChange={handleSave}
                state={user}
                setState={setUser}
                errors={userErrors}
                setErrors={setUserErrors}
                schema={userSchema}
              />
              <Input
                placeholder={""}
                label={"Password"}
                type={"password"}
                name={"password"}
                onChange={handleSave}
                state={user}
                setState={setUser}
                errors={userErrors}
                setErrors={setUserErrors}
                schema={userSchema}
              />
            </div>
          </form>
          <div className="new-account" onClick={() => navigate("/register")}>
            You Don't Have an Account? Create one Here
          </div>
          <Button
            action={login}
            text={"Login"}
            disabled={duringAdd}
            joiObject={joiUser}
            state={user}
            setStateErrors={setUserErrors}
            toast={props.toast}
          />
        </div>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default Login;
