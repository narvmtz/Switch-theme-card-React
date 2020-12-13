import * as React from "react";

function Text(props) {
  return (
    <React.Fragment>
      <h1>{props.title}</h1>
      <span>{props.subtitle}</span>
      <p className={props.isChecked ? "text-light" : "text-dark"}>
        {props.children}
      </p>
    </React.Fragment>
  );
}

export default Text;
