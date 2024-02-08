import { useEffect, useState } from "react";
import MainSelectorBar from "../Components/MainSelectorBar";
import AboutSection from "../Components/AboutSection";
import ProjectsSection from "../Components/ProjectsSection";
import IntrestsSection from "../Components/IntrestsSection";
import RelaxSection from "../Components/RelaxSection";

export default function Web() {
  const [SelectedHorizontal, setSelectedHorizontal] = useState(0);
  const [Animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        triggerAnimation(event);
      }
      if (event.key === "ArrowLeft") {
        triggerAnimation(event);
      }
    };

    //Attach
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  // Trigger animation which brings down the current section
  // then after the section is fully down, switch the section and reset its vertical selector
  // then reverses the animation which brings the section back into view
  const triggerAnimation = (event: KeyboardEvent) => {
    setAnimate(true);
    if (event.key === "ArrowRight") {
      setTimeout(() => {
        setSelectedHorizontal((prev) => (prev == 3 ? prev : prev + 1));
        setAnimate(false);
      }, 150);
    }
    if (event.key === "ArrowLeft") {
      setTimeout(() => {
        setSelectedHorizontal((prev) => (prev == 0 ? prev : prev - 1));
        setAnimate(false);
      }, 150);
    }
  };

  const animationStyling = Animate
    ? " blur-md translate-y-full opacity-0"
    : " ";

  const screenList = [
    <AboutSection />,
    <ProjectsSection />,
    <IntrestsSection />,
    <RelaxSection />,
  ];

  return (
    <div className=" flex flex-col h-screen justify-between items-center overflow-hidden font-main">
      <div className=" w-3/4 mt-10 h-3/4 overflow-clip">
        <div
          className={
            ` flex flex-row justify-between text-xl text-white  rounded-xl transition-all h-full w-full` +
            animationStyling
          }
        >
          {screenList[SelectedHorizontal]}
        </div>
      </div>

      <div className=" text-xl text-white  w-3/4 border mb-10 mt-5 flex-grow  rounded-xl bg-main z-40">
        <div className=" flex flex-row justify-evenly h-full items-center">
          <MainSelectorBar index={SelectedHorizontal} />
        </div>
      </div>
    </div>
  );
}
