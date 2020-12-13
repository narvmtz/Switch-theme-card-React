import * as React from "react";

function SocialItem(props) {
  return (
    <div>
      <a href={props.socialURL} target="_blank">
        <img
          src={props.imageURL}
          className={
            props.isChecked
              ? "social__image social__image-light"
              : "social__image"
          }
          alt={props.altImage}
        />
      </a>
      <h2>{props.title}</h2>
      <p className={props.isChecked ? "text-light" : "text-dark"}>
        {props.text}
      </p>
    </div>
  );
}

export default SocialItem;
