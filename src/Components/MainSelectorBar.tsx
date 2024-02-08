import React from "react";

interface MainSelectorBar {
  index: number;
}

function MainSelectorBar(props: MainSelectorBar) {
  const listLabel = ["About", "Projects", "Intrests", "Relax"];
  const activeStyling = (index: number) => {
    if (props.index % listLabel.length == index) {
      return " animate-pulse";
    }
    return " opacity-0";
  };
  return (
    <>
      {listLabel.map((item, index) => (
        <h1 className="text-6xl" key={index}>
          <span className={activeStyling(index)}>▶</span> {item}
        </h1>
      ))}
    </>
  );
}

export default MainSelectorBar;
