import handleSave from "../functions/handleSave";
import Randomstring from "randomstring";

function AccessKey(props) {
  try {
    return (
      <>
        <div className="column" style={{ position: "relative" }}>
          <h3>{props.label}</h3>
          <input type={"text"} name={props.name} id={props.name} placeholder={props.placeholder} value={props.state[props.name]} spellCheck="false" dir="rtl" disabled={true} />
          <div className="validating-error">{props.errors[props.name] && <div>{props.errors[props.name]}</div>}</div>

          <span
            style={{ position: "absolute", left: "15px", top: "40px", cursor: "pointer" }}
            onClick={async () => {
              const code = Randomstring.generate({
                length: 6,
                charset: "numeric",
              });
              await handleSave({ target: { name: props.name, value: code } }, props.state, props.setState, props.errors, props.setErrors, props.schema);
            }}
            className="generate"
          >
            Generate
          </span>
        </div>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default AccessKey;
