import { useEffect, useState } from "react";
import messages from "../../constants/messages";
import Joi from "joi";
import Input from "../../components/Input";
import handleSave from "../../functions/handleSave";
import requestOptions from "../../constants/requestOptions";
import Button from "../../components/Button";

function EditMedicineForm(props) {
  const [duringAdd, setDuringAdd] = useState(false);

  const [medicine, setMedicine] = useState({
    name: props.currentEdit.name,
  });
  useEffect(() => {
    setMedicine({
      name: props.currentEdit.name,
    });
  }, [props.currentEdit]);

  const [medicineErrors, setMedicineErrors] = useState({});
  const medicineSchema = {
    name: Joi.string()
      .required()
      .trim()
      .messages(messages)
      .label("Medicine Name"),
  };
  const joiMedicine = Joi.object(medicineSchema);

  async function editMedicine() {
    try {
      const newData = medicine;
      const id = props.currentEdit.id;
      const infoRequestOptions = {
        ...requestOptions,
        headers: {
          ...requestOptions.headers,
          authorization: props.userInformation.token,
        },
        method: "PUT",
        body: JSON.stringify({
          ...medicine,
        }),
      };
      setDuringAdd(true);
      const response = await fetch(
        `${process.env.REACT_APP_URL}/medicine/update/${id}`,
        infoRequestOptions
      );
      const data = await response.json();
      //   const data = { success: true };
      if (data.success) {
        props.setMedicines({
          ...props.medicines,
          [id]: { ...props.currentEdit, ...newData },
        });
        props.setCurrentEdit(false);
        props.toast.success("Medicine Updated", {
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
          action={editMedicine}
          text={"Save"}
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

export default EditMedicineForm;
