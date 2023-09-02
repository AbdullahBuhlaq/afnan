function ProfileField(props) {
  try {
    return (
      <>
        <div>
          <h3>{props.name}</h3>
          <p>{props.value && props.value != "" ? props.value : "-"}</p>
        </div>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default ProfileField;
