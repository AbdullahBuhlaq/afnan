import TableCell from "./TableCell";
import TableImageCell from "./TableImageCell";

function TableRow(props) {
  try {
    return (
      <>
        <div className="products-row">
          <TableCell value={props.diagnosis["doctor.user.name"]} />
          <TableCell value={props.diagnosis["blood_pressure"]} />
          <TableCell value={props.diagnosis["cholesterol"]} />
          <TableCell value={new Date(props.diagnosis["createdAt"]).toLocaleString("default", { month: "long", day: "numeric", year: "numeric" })} />
          <TableCell value={props.diagnosis["heart_beat"]} />
          <TableCell value={props.diagnosis["sugar"]} />
          <TableCell value={props.diagnosis["diseaseType.name"]} />
          <TableCell value={props.diagnosis["medicine.name"]} />
          <TableCell value={props.diagnosis["note"]} />
          <TableCell value={props.diagnosis["description"]} />
          <TableCell value={props.diagnosis["pictures"].length} type={"pic"} setShowPic={props.setShowPic} diagnosis={props.diagnosis} />
        </div>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default TableRow;
