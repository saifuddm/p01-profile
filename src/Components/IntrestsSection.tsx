import { useEffect, useState } from "react";
import Divider from "./Divider";

function IntrestsSection() {
  // const ulStyling = " ml-8 list-disc list-outside ";
  const listLabel = ["Intrests", "Extra"];
  const miniScreenList = [<MiniScreenOne />, <MiniScreenTwo />];
  const [Animate, setAnimate] = useState(false);
  const [SelectedVertical, setSelectedVertical] = useState(0);

  //Handle key up and down
  useEffect(() => {
    const handleKeyPressVertical = (event: KeyboardEvent) => {
      if (event.key === "ArrowDown") {
        miniScreenSwitch(event);
      }
      if (event.key === "ArrowUp") {
        miniScreenSwitch(event);
      }
    };

    //Attach
    window.addEventListener("keydown", handleKeyPressVertical);

    return () => {
      window.removeEventListener("keydown", handleKeyPressVertical);
    };
  }, []);

  const activeStyling = (index: number) => {
    if (SelectedVertical % listLabel.length == index) {
      return " animate-pulse";
    }
    return " opacity-0";
  };

  function MiniScreenOne() {
    return <p>HELLO.</p>;
  }

  function MiniScreenTwo() {
    return <>TEST</>;
  }

  const animationStyling = Animate
    ? " blur-lg -translate-x-full opacity-0"
    : " ";

  const miniScreenSwitch = (event: KeyboardEvent) => {
    setAnimate(true);

    if (event.key === "ArrowDown") {
      setTimeout(() => {
        setSelectedVertical((prev) => (prev == 1 ? prev : prev + 1));
        setAnimate(false);
      }, 150);
    }
    if (event.key === "ArrowUp") {
      setTimeout(() => {
        setSelectedVertical((prev) => (prev == 0 ? prev : prev - 1));
        setAnimate(false);
      }, 150);
    }
  };
  return (
    <>
      <div className="border  h-full rounded-xl flex-grow p-10 items-center content-center">
        <div className=" text-4xl space-x-5">
          <span className={activeStyling(0)}>▶</span>
          <span className="font-extrabold">{listLabel[0]}</span>
        </div>
        <Divider />

        <div className=" text-4xl space-x-5">
          <span className={activeStyling(1)}>▶</span>
          <span className="font-extrabold">{listLabel[1]}</span>
        </div>
      </div>
      <div className="h-full w-2/6 ml-5 overflow-clip">
        <div
          className={
            `border border-gold-600 h-full rounded-xl w-full p-10 break-words transition-all ` +
            animationStyling
          }
        >
          {miniScreenList[SelectedVertical]}
        </div>
      </div>
    </>
  );
}

export default IntrestsSection;
