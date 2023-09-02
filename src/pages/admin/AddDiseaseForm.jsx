import { useState } from "react";
import messages from "../../constants/messages";
import Joi from "joi";
import Input from "../../components/Input";
import handleSave from "../../functions/handleSave";
import requestOptions from "../../constants/requestOptions";
import Button from "../../components/Button";

function AddDiseaseForm(props) {
  const [duringAdd, setDuringAdd] = useState(false);

  const [disease, setDisease] = useState({
    name: "",
  });

  const [diseaseErrors, setDiseaseErrors] = useState({});
  const diseaseSchema = {
    name: Joi.string().required().trim().messages(messages).label("Disease Name"),
  };
  const joiDisease = Joi.object(diseaseSchema);

  async function addDisease() {
    try {
      const newData = disease;
      const infoRequestOptions = {
        ...requestOptions,
        headers: { ...requestOptions.headers, authorization: props.userInformation.token },
        body: JSON.stringify({
          ...disease,
        }),
      };
      setDuringAdd(true);
      const response = await fetch("http://localhost:3001/diseaseType/create", infoRequestOptions);
      const data = await response.json();
      if (data.success) {
        props.setDiseases({ ...props.diseases, [data.data]: { ...newData, id: data.data } });
        props.setAddNew(false);
        props.toast.success(" Disease Type Added", {
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
            <Input placeholder={""} label={"Disease Name"} type={"text"} name={"name"} onChange={handleSave} state={disease} setState={setDisease} errors={diseaseErrors} setErrors={setDiseaseErrors} schema={diseaseSchema} />
          </div>
        </form>
        <Button action={addDisease} text={"Add"} disabled={duringAdd} joiObject={joiDisease} state={disease} setStateErrors={setDiseaseErrors} toast={props.toast} />
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default AddDiseaseForm;
