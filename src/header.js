import * as React from "react";
import HeartIcon from "./heartIcon.js";
import BackIcon from "./arrowBackIcon.js";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function Header(props) {
  return (
    <section className={props.isChecked ? "header header-light" : "header"}>
      <BackIcon />
      <div className="menu">
        <HeartIcon />
        <MoreVertIcon />
      </div>
    </section>
  );
}

export default Header;
