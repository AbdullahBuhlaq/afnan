import { useState } from "react";
import messages from "../../constants/messages";
import Joi from "joi";
import Input from "../../components/Input";
import handleSave from "../../functions/handleSave";
import requestOptions from "../../constants/requestOptions";
import Button from "../../components/Button";

function AddMedicineForm(props) {
  const [duringAdd, setDuringAdd] = useState(false);

  const [medicine, setMedicine] = useState({
    name: "",
  });

  const [medicineErrors, setMedicineErrors] = useState({});
  const medicineSchema = {
    name: Joi.string()
      .required()
      .trim()
      .messages(messages)
      .label("Medicine Name"),
  };
  const joiMedicine = Joi.object(medicineSchema);

  async function addMedicine() {
    try {
      const newData = medicine;
      const infoRequestOptions = {
        ...requestOptions,
        headers: {
          ...requestOptions.headers,
          authorization: props.userInformation.token,
        },
        body: JSON.stringify({
          ...medicine,
        }),
      };
      setDuringAdd(true);
      const response = await fetch(
        `${import.meta.env.VITE_URL}/medicine/create`,
        infoRequestOptions
      );
      const data = await response.json();
      if (data.success) {
        props.setMedicines({
          ...props.medicines,
          [data.data]: { ...newData, id: data.data },
        });
        props.setAddNew(false);
        props.toast.success("Medicine Added", {
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
              state={medicine}
              setState={setMedicine}
              errors={medicineErrors}
              setErrors={setMedicineErrors}
              schema={medicineSchema}
            />
          </div>
        </form>
        <Button
          action={addMedicine}
          text={"Add"}
          disabled={duringAdd}
          joiObject={joiMedicine}
          state={medicine}
          setStateErrors={setMedicineErrors}
          toast={props.toast}
        />
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default AddMedicineForm;
