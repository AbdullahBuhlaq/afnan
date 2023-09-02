import { motion } from "framer-motion";
import { Fragment, useEffect, useRef, useState } from "react";
import "./card.css";
function DiseaseDard(props) {
  const [ShowSetting, setShowSetting] = useState(false);
  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (e.target.tagName != "LI" && e.target != ref.current) {
        setShowSetting(false);
      }
    });
  }, []);
  const ref = useRef();
  try {
    return (
      <>
        <motion.div className="test-card" initial={props.firstRender ? { opacity: 0, scale: 0 } : false} animate={{ opacity: 1, scale: 1, transition: { duration: 0.2 * props.index } }} whileHover={{ scale: 1.02, transition: { ease: "linear" } }}>
          <h3>{props.disease.name}</h3>
          <div className="test-options">
            <span
              className="test-icon"
              onClick={() => {
                setShowSetting(true);
              }}
              ref={ref}
            >
              &#x22EE;
            </span>
            <ul className={"test-dropdown" + (ShowSetting ? " show" : "")} style={{ borderRadius: "5px" }}>
              <li
                onClick={() => {
                  props.setCurrentEdit(props.disease);
                  setShowSetting(false);
                }}
                style={{ cursor: "pointer", color: "black" }}
              >
                Edit
              </li>
              <li
                onClick={() => {
                  props.deleteDisease(props.disease.id);
                  setShowSetting(false);
                }}
                style={{ cursor: "pointer", color: "red" }}
              >
                Delete
              </li>
            </ul>
          </div>
        </motion.div>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default DiseaseDard;
