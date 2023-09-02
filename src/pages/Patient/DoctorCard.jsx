import { Fragment } from "react";
import TableCell from "../../components/TableCell";
import TableImageCell from "../../components/TableImageCell";

function DoctorCard(props) {
  try {
    return (
      <>
        <div className="products-row">
          <TableImageCell value={props.doctor["name"]} image={!props.image || props.image == "" ? "images/profile.webp" : props.image} />
          <TableCell value={props.doctor["address"]} />
          <TableCell value={props.doctor["medicalSpecialty"]} />
          <TableCell value={props.doctor["gender"]} />
          <TableCell value={""} type={"schedule"} setCurrentSchedule={props.setCurrentSchedule} schedule={props.schedule} />
        </div>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default DoctorCard;
