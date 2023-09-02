function TableCell(props) {
  try {
    return (
      <>
        <div className="product-cell category" title={props.value}>
          {props.value}
          {props.type == "pic" ? (
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => {
                if (props.value) props.setShowPic(props.diagnosis.pictures);
              }}
            >
              {" Show"}
            </span>
          ) : null}
          {props.type == "schedule" ? (
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => {
                props.setCurrentSchedule({ ...props.schedule });
              }}
            >
              {" Show Schedule"}
            </span>
          ) : null}
        </div>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default TableCell;
