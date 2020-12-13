import React, { useState } from "react";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";

function HeartIcon() {
  const [clicked, setClicked] = useState(false);

  const clickedValue = () => {
    setClicked(!clicked);
  };
  return (
    <div className="menu" onClick={clickedValue}>
      {clicked ? (
        <FavoriteRoundedIcon className="heartFilled" />
      ) : (
        <FavoriteBorderRoundedIcon />
      )}
    </div>
  );
}

export default HeartIcon;
