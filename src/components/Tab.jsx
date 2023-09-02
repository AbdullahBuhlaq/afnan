import { NavLink } from "react-router-dom";

function Tab(props) {
  try {
    return (
      <>
        <li
          className={props.tab.icon + (props.currentTab == props.tab.value ? " active" : "")}
          onClick={() => {
            props.setCurrentTab(props.tab.value);
          }}
        >
          <NavLink to={"/" + props.tab.value}>{props.tab.name}</NavLink>
        </li>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default Tab;
