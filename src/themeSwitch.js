import * as React from "react";

function ThemeSwitch({ isChecked, setIsChecked }) {
  const toggleValue = () => {
    setIsChecked(!isChecked);
  };
  return (
    <React.Fragment>
      <label className="switch">
        <input checked={isChecked} onChange={toggleValue} type="checkbox" />
        <span className="slider round" />
      </label>
    </React.Fragment>
  );
}

export default ThemeSwitch;
