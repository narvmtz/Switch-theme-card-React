import * as React from "react";
import Text from "./text.js";
import ButtonRedirect from "./buttonHire.js";

function Description(props) {
  return (
    <section
      className={props.isChecked ? "paragraph paragraph-light" : "paragraph"}
    >
      <Text title="Nar" subtitle="DEV" isChecked={props.isChecked}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        sollicitudin.
      </Text>
      <ButtonRedirect />
      <hr />
    </section>
  );
}

export default Description;
