import { useState } from "react";
import generalTabs from "../constants/generalTabs";
import requestOptions from "../constants/requestOptions";
import Tab from "./Tab";
function Navbar(props) {
  async function logout() {
    try {
      let response = await fetch(`${import.meta.env.VITE_URL}/auth/logout`, {
        ...requestOptions,
        method: "put",
        headers: {
          ...requestOptions.headers,
          authorization: props.userInformation.token,
        },
      });
      let data = await response.json();
      // let data = { success: true };
      if (data.success) {
        localStorage.removeItem("user");
        props.navigate("/login");
      } else {
        console.log(data.error);
        props.toast.error("عذرا, حدث خطأ في السيرفر", {
          position: props.toast.POSITION.TOP_CENTER,
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  const [show, setShow] = useState(false);

  try {
    return (
      <>
        <div className="dash">
          <header className="navbar-fixed-top">
            <div className="container">
              <div className="logo">
                {" "}
                <a href="index.html">
                  <img src="images/logo.png" alt="" />
                </a>{" "}
              </div>
              <nav className="webimenu">
                <div
                  className="menu-toggle"
                  onClick={() => {
                    setShow(!show);
                  }}
                >
                  {" "}
                  <i className="fa fa-bars"> </i>{" "}
                </div>
                <ul
                  className="ownmenu"
                  style={{ display: show ? "block" : "none" }}
                >
                  {generalTabs.map((tab, tabIndex) => {
                    return (
                      <Tab
                        key={tabIndex}
                        tab={tab}
                        currentTab={props.currentTab}
                        setCurrentTab={props.setCurrentTab}
                      />
                    );
                  })}
                  {props.tabs.map((tab, tabIndex) => {
                    return (
                      <Tab
                        key={tabIndex}
                        tab={tab}
                        currentTab={props.currentTab}
                        setCurrentTab={props.setCurrentTab}
                      />
                    );
                  })}
                  {props.tabs.length ? (
                    <li onClick={() => logout()}>
                      <a style={{ color: "red", cursor: "pointer" }}>logout</a>
                    </li>
                  ) : (
                    <li onClick={() => props.navigate("/login")}>
                      <a style={{ color: "green", cursor: "pointer" }}>login</a>
                    </li>
                  )}
                </ul>
              </nav>
            </div>
          </header>
        </div>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default Navbar;
