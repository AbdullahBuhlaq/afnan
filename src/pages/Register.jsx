import { useState } from "react";
import DoctorRegisterForm from "./Doctor/DoctorRegisterForm";
import PatientRegisterForm from "./Patient/PatientRegisterForm";
import { useNavigate } from "react-router-dom";

function Register(props) {
  const [stepNumber, setStepNumber] = useState(0);
  const [userType, setUserType] = useState(0);
  const navigate = useNavigate();

  try {
    return (
      <>
        {stepNumber == 0 ? (
          <>
            {/* <span
              onClick={() => {
                setUserType(0);
                setStepNumber(1);
              }}
            >
              doctor
            </span>
            <span
              onClick={() => {
                setUserType(1);
                setStepNumber(1);
              }}
            >
              patient
            </span> */}
            <div className="container33">
              <h1>Create an Account With Us</h1>
              <form>
                <img className="img-responsive" src="images/selection.jpg" alt="" />

                <div className="have-account">
                  {"Do You Have an Account? "}
                  <span
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Login Here
                  </span>
                </div>
                <div className="row">
                  <button
                    onClick={() => {
                      setUserType(0);
                      setStepNumber(1);
                    }}
                  >
                    I'm a Doctor
                  </button>
                  <button
                    onClick={() => {
                      setUserType(1);
                      setStepNumber(1);
                    }}
                  >
                    I'm a Patient
                  </button>
                </div>
              </form>
            </div>
          </>
        ) : stepNumber == 1 ? (
          userType == 0 ? (
            <DoctorRegisterForm setStepNumber={setStepNumber} toast={props.toast} />
          ) : (
            <PatientRegisterForm setStepNumber={setStepNumber} toast={props.toast} />
          )
        ) : null}
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default Register;
