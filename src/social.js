import * as React from "react";
import SocialItem from "./socialItem.js";

const data = [
  {
    id: 1,
    socialURL: "https://github.com/",
    imageURL: "https://www.flaticon.com/svg/static/icons/svg/919/919847.svg",
    altImage: "Github profile",
    title: "1k",
    text: "Followers"
  },
  {
    id: 2,
    socialURL: "https://twitter.com/",
    imageURL: "https://www.flaticon.es/svg/static/icons/svg/145/145812.svg",
    altImage: "Twitter profile",
    title: "2.5k",
    text: "Followers"
  },
  {
    id: 3,
    socialURL: "https://dribbble.com/",
    imageURL: "https://www.flaticon.es/svg/static/icons/svg/145/145801.svg",
    altImage: "Dribble profile",
    title: "3k",
    text: "Followers"
  }
];

function Social({ isChecked }) {
  return (
    <section className={isChecked ? "social social-light" : "social"}>
      <div className="social__list">
        {data.map(item => (
          <SocialItem
            isChecked={isChecked}
            key={item.id}
            socialURL={item.socialURL}
            imageURL={item.imageURL}
            altImage={item.altImage}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>
    </section>
  );
}

export default Social;
