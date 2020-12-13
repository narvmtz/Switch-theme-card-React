import React, { useState } from "react";
import "./style.css";
import Description from "./description.js";
import Header from "./header.js";
import ThemeSwitch from "./themeSwitch.js";
import Social from "./social.js";
import ProfPic from "./profPicture.js";

export default function App() {
  const [isChecked, setIsChecked] = useState(true);
  return (
    <main
      className={isChecked ? "wrapperMain wrapperMain-light" : "wrapperMain"}
    >
      <ThemeSwitch isChecked={isChecked} setIsChecked={setIsChecked} />
      <div className="main__card">
        <section className={isChecked ? "card card-light" : "card"}>
          <Header isChecked={isChecked} />
          <ProfPic className="profile" />
          <Description isChecked={isChecked} />
          <Social isChecked={isChecked} />
        </section>
      </div>
    </main>
  );
}
