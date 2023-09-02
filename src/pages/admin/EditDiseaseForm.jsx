import { useEffect, useState } from "react";
import messages from "../../constants/messages";
import Joi from "joi";
import Input from "../../components/Input";
import handleSave from "../../functions/handleSave";
import requestOptions from "../../constants/requestOptions";
import Button from "../../components/Button";

function EditDiseaseForm(props) {
  const [duringAdd, setDuringAdd] = useState(false);

  const [disease, setDisease] = useState({
    name: props.currentEdit.name,
  });
  useEffect(() => {
    setDisease({
      name: props.currentEdit.name,
    });
  }, [props.currentEdit]);

  const [diseaseErrors, setDiseaseErrors] = useState({});
  const diseaseSchema = {
    name: Joi.string().required().trim().messages(messages).label("Disease Name"),
  };
  const joiDisease = Joi.object(diseaseSchema);

  async function editDisease() {
    try {
      const newData = disease;
      const id = props.currentEdit.id;
      const infoRequestOptions = {
        ...requestOptions,
        headers: { ...requestOptions.headers, authorization: props.userInformation.token },
        method: "PUT",
        body: JSON.stringify({
          ...disease,
        }),
      };
      setDuringAdd(true);
      const response = await fetch(`http://localhost:3001/diseaseType/update/${id}`, infoRequestOptions);
      const data = await response.json();
      //   const data = { success: true };
      if (data.success) {
        props.setDiseases({ ...props.diseases, [id]: { ...props.currentEdit, ...newData } });
        props.setCurrentEdit(false);
        props.toast.success("Disease Type Updated", {
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
            <Input placeholder={""} label={"Name"} type={"text"} name={"name"} onChange={handleSave} state={disease} setState={setDisease} errors={diseaseErrors} setErrors={setDiseaseErrors} schema={diseaseSchema} />
          </div>
        </form>
        <Button action={editDisease} text={"Save"} disabled={duringAdd} joiObject={joiDisease} state={disease} setStateErrors={setDiseaseErrors} toast={props.toast} />
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default EditDiseaseForm;
