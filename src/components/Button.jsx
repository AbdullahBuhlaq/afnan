import validateForm from "../functions/validateForm";
function Button(props) {
  try {
    return (
      <>
        <button
          className="button"
          onClick={async (event) => {
            const isValid = await validateForm(event, props.joiObject, props.state, props.setStateErrors);
            isValid
              ? await props.action()
              : props.toast.info("Enter Fields Correctly Please!", {
                  position: props.toast.POSITION.TOP_CENTER,
                });
          }}
          disabled={props.disabled}
        >
          <span className="default">{props.text}</span>
          <div className="left"></div>
          <div className="right"></div>
        </button>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default Button;
