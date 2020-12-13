import * as React from "react";

function ButtonRedirect(props) {
  return (
    <React.Fragment>
      <a
        href="https://www.linkedin.com"
        target="_blank"
        className={props.isChecked ? "button button-light" : "button"}
      >
        Hire Me
      </a>
    </React.Fragment>
  );
}

export default ButtonRedirect;
